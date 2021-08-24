export const TikTokHeaders = {
  'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.${Math.floor(
    Math.random() * (48 - 1) + 1,
  )} (KHTML, like Gecko) Version/12.0 Mobile/${Math.random().toString(16).substr(2, 7).toUpperCase()} Safari/604.1`,
  'Accept-Encoding': 'gzip,deflate,br',
  Referer: 'https://www.tiktok.com/'
}