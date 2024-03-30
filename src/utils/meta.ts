import { VideoData } from '../types/Frontity';

export function generateMeta(type: 'discord' | 'telegram' | 'other', base: string, path: string, data: VideoData, address?: string) {
  if (!data.itemInfos.text) data.itemInfos.text = `@${data.authorInfos.uniqueId}`;

  const metas = [
    '<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />',
    '<meta content="#1d1d1d" data-react-helmet="true" name="theme-color" />',
    '<meta property="og:site_name" content="dstn.to - TikTok">',

    '<meta name="twitter:card" content="player" />',
    `<meta name="twitter:title" content="${data.authorInfos.uniqueId} on TikTok" />`,
  ];

  if (type != 'telegram')
    metas.push(
      `<meta name="twitter:player" content="${base}${path}/video.mp4" />`,
      `<meta name="twitter:description" content="${data.itemInfos.text.length > 152 ? `${data.itemInfos.text.slice(0, 151)}...` : data.itemInfos.text}" />`,
    );

  metas.push(
    `<meta property="og:url" content="https://tiktok.com/@${data.authorInfos.uniqueId}/video/${data.itemInfos.id}" />`,
    `<meta property="og:video" content="${base}${path}/video.mp4" />`,
    `<meta property="og:video:secure_url" content="${base}${path}/video.mp4" />`,
    '<meta property="og:video:type" content="video/mp4" />',
    `<meta property="og:title" content="@${data.authorInfos.uniqueId}" />`,
    `<meta property="og:description" content="${data.itemInfos.text.length > 152 ? `${data.itemInfos.text.slice(0, 151)}...` : data.itemInfos.text}" />`,
    `<meta http-equiv="refresh" content="0; url=" />`,
    `<link rel="alternate" href="${base}/oembed.json?desc=${encodeURIComponent(
      data.itemInfos.text.length > 152 ? `${data.itemInfos.text.slice(0, 151)}...` : data.itemInfos.text,
    )}&title=${encodeURIComponent(`@${data.authorInfos.uniqueId}`)}&url=${encodeURIComponent(
      `https://tiktok.com/@${data.authorInfos.uniqueId}/video/${data.itemInfos.id}`,
    )}" type="application/json+oembed" title="@${data.authorInfos.uniqueId}">`,
  );

  return new Response(`<html><head>${metas.join('\n')}</head></html>`, { headers: { 'content-type': 'text/html' } });
}
