import { TikTokData } from '../types/Tiktok';

export function generateMeta(type: 'discord' | 'telegram' | 'other', base: string, path: string, data: TikTokData, address?: string) {
  if (!data.desc) data.desc = `@${data.author}`;

  const metas = [
    '<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />',
    '<meta content="#1d1d1d" data-react-helmet="true" name="theme-color" />',
    '<meta property="og:site_name" content="dstn.to - TikTok">',

    '<meta name="twitter:card" content="player" />',
    `<meta name="twitter:title" content="${data.author} on TikTok" />`,
  ];

  if (type != 'telegram')
    metas.push(
      `<meta name="twitter:player" content="${address ? `${address}` : `${base}${path}/video.mp4`}" />`,
      `<meta name="twitter:description" content="${data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc}" />`,
    );

  metas.push(
    `<meta property="og:url" content="https://tiktok.com/@${data.author}/video/${data.id}" />`,
    `<meta property="og:video" content="${address ? `${address}` : `${base}${path}/video.mp4`}" />`,
    `<meta property="og:video:secure_url" content="${address ? `${address}` : `${base}${path}/video.mp4`}" />`,
    '<meta property="og:video:type" content="video/mp4" />',
    `<meta property="og:title" content="@${data.authorId}" />`,
    `<meta property="og:description" content="${data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc}" />`,
    `<meta http-equiv="refresh" content="0; url=" />`,
    `<link rel="alternate" href="${base}/oembed.json?desc=${encodeURIComponent(data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc)}&title=${encodeURIComponent(
      `@${data.author}`,
    )}&url=${encodeURIComponent(`https://tiktok.com/@${data.author}/video/${data.id}`)}" type="application/json+oembed" title="@${data.author}">`,
  );

  return new Response(`<html><head>${metas.join('\n')}</head></html>`, { headers: { 'content-type': 'text/html' } });
}
