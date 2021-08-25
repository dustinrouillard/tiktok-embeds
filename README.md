# TikTok Share Embeds

This generates an OpenGraph embed for a tiktok from the following url formats

- `https://vm.tiktok.com/ZMRjsP94a`
- `https://tiktok.com/@momma_mandy_plus7/video/6992363023767850246`

Right now this only seems to work in Discord, but that's where it's used most so I'll work on getting other apps working later on.

Runs in Cloudflare Workers, deployed with Wrangler, makes it snappy.

## Link usage

Going to the direct link will return the video

<https://vm.dstn.to/ZMRjsP94a>

This link will return the metatags for the discord embed if the useragent contains Discord, then within the meta tags the url for the video is the following (which is required to have .mp4 at the end and used to return the video even if discord's user agent)

<https://vm.dstn.to/ZMRjsP94a/video.mp4>

## Demo

![Discord Usage GIF](https://files.dstn.to/2c0f5c0bec98589e.gif)

This is my bot detecting that a tiktok link was sent and just sending a message with the link using the worker host to auto embed it.

The repo for this bot is [here](https://dstn.to/tt-discord-embeds) if you'd like to run it yourself.
