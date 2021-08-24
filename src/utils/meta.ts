import { TikTokData } from "../types/Tiktok";

export function generateMeta(type: 'discord' | 'telegram' | 'other', base: string, path: string, data: TikTokData) {
  const metas = [
    '<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />',
    '<meta content="#1d1d1d" data-react-helmet="true" name="theme-color" />',
    '<meta property="og:site_name" content="dstn.to - TikTok">',

    '<meta name="twitter:card" content="player" />',
    `<meta name="twitter:title" content="${data.author.nickname} on TikTok" />`,
    `<meta name="twitter:image" content="${data.video.reflowCover}" />`
  ];

  if (type != 'telegram') metas.push(
    `<meta name="twitter:player" content="${base}${path}" />`,
    `<meta name="twitter:description" content="${data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc}" />`
  );

  metas.push(
    `<meta property="og:url" content="https://tiktok.com/@${data.author.uniqueId}/video/${data.id}" />`,
    `<meta property="og:video" content="${base}${path}" />`,
    `<meta property="og:video:secure_url" content="${base}${path}" />`,
    '<meta property="og:video:type" content="video/mp4" />',
    `<meta property="og:title" content="@${data.author.uniqueId}" />`,
    `<meta property="og:description" content="${data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc}" />`,
    `<meta name="og:image" content="${data.video.reflowCover}" />`,
    `<meta http-equiv="refresh" content="0; url=${base}${path}" />`,
    `<link rel="alternate" href="${base}/oembed.json?desc=${encodeURIComponent(data.desc.length > 152 ? `${data.desc.substring(151)}...` : data.desc)}&title=${encodeURIComponent(`@${data.author.uniqueId}`)}&url=${encodeURIComponent(`https://tiktok.com/@${data.author.uniqueId}/video/${data.id}`)}" type="application/json+oembed" title="${encodeURIComponent(`@${data.author.uniqueId}`)}">`
  );


  return new Response(`<html><head>${metas.join('\n')}</head></html>`, { headers: { 'content-type': 'text/html' } });
}