import Route from 'route-parser';

import { NotFound } from './methods/notfound';
import { VideoFromShare, VideoFromUser, ThumbnailFromShare, ThumbnailFromUser, OEmbedCustom } from './methods/video';

const routes = [
  { route: new Route('/oembed.json'), method: 'GET', handler: OEmbedCustom },

  { route: new Route('/:id/video.mp4'), method: 'GET', handler: VideoFromShare, args: [true] },
  { route: new Route('/:id/thumb.jpeg'), method: 'GET', handler: ThumbnailFromShare },

  { route: new Route('/:user/video/:id/video.mp4'), method: 'GET', handler: VideoFromUser, args: [true] },
  { route: new Route('/:user/video/:id/thumb.jpeg'), method: 'GET', handler: ThumbnailFromUser },

  { route: new Route('/:id'), method: 'GET', handler: VideoFromShare },
  { route: new Route('/:user/video/:id'), method: 'GET', handler: VideoFromUser },
];

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  const route = routes.find((route) => route.route.match(url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname) && route.method == request.method);
  if (!route) return NotFound(request);

  const params = route.route.match(url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname);

  return route.handler(request, params as any, route.args);
}
