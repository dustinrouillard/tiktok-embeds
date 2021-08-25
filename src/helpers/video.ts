import { TikTokHeaders } from "../config";
import { TikTokData } from "../types/Tiktok";

const Cookies = new Set<string>();

export async function videoFromIdOrWeb(id: string) {
  const initial = await fetch('https://www.tiktok.com', { headers: TikTokHeaders });
  if (initial.status != 200) throw 'initial_request_failed';

  const cookies = initial.headers.get('set-cookie')?.split(', ') || [];
  for await (const cookie of cookies) cookie.split(';')[0].includes('=') ? Cookies.add(cookie.split(';')[0]) : null;

  const WebCookie = Array.from(Cookies).find(cookie => cookie.split('=')[0] == 'tt_webid_v2') as string;

  const url = id.includes('/') ? `https://www.tiktok.com/${id}` : `https://vm.tiktok.com/${id}`;

  const req = await fetch(url, { headers: { ...TikTokHeaders, 'cookie': Array.from(Cookies).join('; ') } });
  if (req.status != 200) throw 'vm_request_failed';

  const con = await req.text();
  const matched = con.match(/<script id="__NEXT_DATA__" .*?>(.*?)<\/script>/);
  if (!matched) throw 'invalid_match_for_video';

  const data: TikTokData = JSON.parse(matched[1]).props.pageProps.itemInfo.itemStruct;

  return { address: data.video.playAddr, thumbnail: data.video.reflowCover, cookie: WebCookie, data };
}

export async function proxyAsset(url: string, cookie: string) {
  const video = await fetch(url, {
    method: 'GET',
    headers: { 'Cookie': `${cookie}`, ...TikTokHeaders },
  });

  return video;
}