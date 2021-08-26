import { proxyAsset, videoFromIdOrWeb } from "../helpers/video";
import { RequestParams } from "../types/Request";
import { TikTokData } from "../types/Tiktok";
import { generateMeta } from "../utils/meta";
import { parseUserAgent } from "../utils/useragent";

export async function VideoFromShare(request: Request, params: RequestParams<{ id: string }>, args?: any[]): Promise<Response> {
  const Link = new URL(request.url);
  const path = Link.pathname.endsWith('/') ? Link.pathname.slice(0, -1) : Link.pathname;

  let url: { address: string; cookie: string; data: TikTokData } | undefined;
  if (path.endsWith('.mp4')) url = await videoFromIdOrWeb(params.id);

  if (!path.endsWith('.mp4')) {
    const type = parseUserAgent(request.headers.get('user-agent') as string);
    if (['discord', 'telegram'].includes(type)) {
      url = await videoFromIdOrWeb(params.id);
      return generateMeta(type, Link.origin, path, url.data);
    }
  }

  if (url) return await proxyAsset(url.address, url.cookie);
  return Response.redirect(`${Link.origin}${path}/video.mp4`, 302);
}

export async function VideoFromUser(request: Request, params: RequestParams<{ user: string; id: string }>, args?: any[]): Promise<Response> {
  const Link = new URL(request.url);
  const path = Link.pathname.endsWith('/') ? Link.pathname.slice(0, -1) : Link.pathname;

  let url: { address: string; cookie: string; data: TikTokData } | undefined;
  if (path.endsWith('.mp4')) url = await videoFromIdOrWeb(`${params.user}/video/${params.id}`);

  if (!path.endsWith('.mp4')) {
    const type = parseUserAgent(request.headers.get('user-agent') as string);
    if (['discord', 'telegram'].includes(type)) {
      url = await videoFromIdOrWeb(`${params.user}/video/${params.id}`);
      return generateMeta(type, Link.origin, path, url.data);
    }
  }

  if (url) return await proxyAsset(url.address, url.cookie);
  return Response.redirect(`${Link.origin}${path}/video.mp4`, 302);
}

export async function ThumbnailFromShare(request: Request, params: RequestParams<{ id: string }>, args?: any[]): Promise<Response> {
  const url = await videoFromIdOrWeb(params.id);
  const proxied = await proxyAsset(url.thumbnail, url.cookie);
  return proxied;
}

export async function ThumbnailFromUser(request: Request, params: RequestParams<{ user: string; id: string }>, args?: any[]): Promise<Response> {
  const url = await videoFromIdOrWeb(`${params.user}/video/${params.id}`);
  const proxied = await proxyAsset(url.thumbnail, url.cookie);
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
    provider_url: "https://dstn.to/tt-embeds",
    title,
    type: "video",
    version: "1.0",
  };

  return new Response(JSON.stringify(json), { headers: { 'content-type': 'application/json' } });
}
