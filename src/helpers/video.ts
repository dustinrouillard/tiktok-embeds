import { TikTokHeaders } from '../config';
import { TikTokData } from '../types/Tiktok';

export async function videoFromIdOrWeb(id: string) {
  const initial = await fetch('https://www.tiktok.com', { headers: TikTokHeaders });
  if (initial.status != 200) throw 'initial_request_failed';

  const url = id.includes('/') ? `https://www.tiktok.com/${id}` : `https://vm.tiktok.com/${id}`;

  const req = await fetch(url, { headers: { ...TikTokHeaders } });
  if (req.status != 200) throw 'vm_request_failed';

  const con = await req.text();
  const matched = con.match(/<script id="SIGI_STATE" type="application\/json">(.*?)<\/script>/);
  if (!matched) throw 'invalid_match_for_video';

  const object = `${matched[1].slice(21).split('window[')[0].split('};')[0]}`;
  const itemMatch = object.match(/"ItemModule":({.*?}),"UserModule"/);
  if (!itemMatch) throw 'invalid_item_match_for_video';

  const data = Object.values(JSON.parse(itemMatch[1]))[0] as TikTokData;

  return { address: data.video.playAddr, thumbnail: data.video.reflowCover, data };
}

export async function proxyAsset(url: string) {
  const video = await fetch(url, {
    method: 'GET',
    headers: { ...TikTokHeaders },
  });

  return video;
}
