import { TikTokHeaders } from '../config';
import { FrontityState, VideoData } from '../types/Frontity';

export async function videoFromIdOrWeb(id: string): Promise<{ address: string; thumbnail: string; data: VideoData }> {
  if (id.includes('/video/')) {
    let [user, _, postId] = id.split('/');
    if (!postId && user) postId = user;
    const apiData = await fetch(`https://www.tiktok.com/embed/v2/${postId}`, { headers: TikTokHeaders });

    const con = await apiData.text();
    const matched = con.match(/<script id="__FRONTITY_CONNECT_STATE__" type="application\/json">(.*?)<\/script>/);

    if (!matched) {
      throw 'api_request_failed';
    }

    const json: FrontityState = JSON.parse(`${matched[0].slice(21).split('">')[1].slice(0, -9)}`);

    const source = json.source.data[`/embed/v2/${postId}`];

    return {
      address: source.videoData.itemInfos.video.urls[0],
      thumbnail: source.videoData.itemInfos.covers[0],
      data: source.videoData,
    };
  }

  const url = `https://vm.tiktok.com/${id}`;

  const req = await fetch(url, { headers: TikTokHeaders, redirect: 'manual' });
  if (req.status != 301) throw 'vm_request_failed';

  const newUrl = new URL(req.headers.get('location') as string);
  return videoFromIdOrWeb(newUrl.pathname.slice(1));
}

export async function proxyAsset(url: string) {
  const video = await fetch(url, {
    method: 'GET',
    headers: { ...TikTokHeaders, referer: 'https://www.tiktok.com/' },
  });

  return video;
}
