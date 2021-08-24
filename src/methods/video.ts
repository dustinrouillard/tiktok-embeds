import { proxyVideo, videoFromIdOrWeb } from "../helpers/video";
import { RequestParams } from "../types/Request";
import { generateMeta } from "../utils/meta";
import { parseUserAgent } from "../utils/useragent";

export async function VideoFromShare(request: Request, params: RequestParams<{ id: string }>, args?: any[]): Promise<Response> {
  const Link = new URL(request.url);
  const path = Link.pathname.endsWith('/') ? Link.pathname.slice(0, -1) : Link.pathname;
  const url = await videoFromIdOrWeb(params.id);

  const type = parseUserAgent(request.headers.get('user-agent') as string);
  if (['discord', 'telegram'].includes(type) && (args && !args[0] || true)) return generateMeta(type, Link.origin, `/raw${path}.mp4`, url.data);

  const proxied = await proxyVideo(url.address, url.cookie);
  return proxied;
}

export async function VideoFromUser(request: Request, params: RequestParams<{ user: string; id: string }>, args?: any[]): Promise<Response> {
  const Link = new URL(request.url);
  const path = Link.pathname.endsWith('/') ? Link.pathname.slice(0, -1) : Link.pathname;
  const url = await videoFromIdOrWeb(`${params.user}/video/${params.id}`);

  const type = parseUserAgent(request.headers.get('user-agent') as string);
  if (['discord', 'telegram'].includes(type) && (args && !args[0] || true)) return generateMeta(type, Link.origin, `/raw${path}.mp4`, url.data);

  const proxied = await proxyVideo(url.address, url.cookie);
  return proxied;
}

export async function OEmbedCustom(request: Request, params: RequestParams, args?: any[]): Promise<Response> {
  const Link = new URL(request.url);

  const description = Link.searchParams.get('desc');
  const url = Link.searchParams.get('url');
  const title = Link.searchParams.get('title');

  const json = {
    author_name: description,
    author_url: url,
    provider_name: "dstn.to - TikTok",
    provider_url: "https://github.com/dustinrouillard",
    title,
    type: "video",
    version: "1.0",
  };

  return new Response(JSON.stringify(json), { headers: { 'content-type': 'application/json' } });
}
