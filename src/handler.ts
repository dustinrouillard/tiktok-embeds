import Route from 'route-parser';

import { NotFound } from './methods/notfound';
import { VideoFromShare, VideoFromUser, OEmbedCustom } from './methods/video';

const routes = [
  { route: new Route('/oembed.json'), method: 'GET', handler: OEmbedCustom },
  { route: new Route('/:id'), method: 'GET', handler: VideoFromShare },
  { route: new Route('/:user/video/:id'), method: 'GET', handler: VideoFromUser },
  { route: new Route('/raw/:id.mp4'), method: 'GET', handler: VideoFromShare, args: [true] },
  { route: new Route('/raw/:user/video/:id.mp4'), method: 'GET', handler: VideoFromUser, args: [true] },
];

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  const route = routes.find((route) => route.route.match(url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname) && route.method == request.method);
  if (!route) return NotFound(request);

  const params = route.route.match(url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname);

  return route.handler(request, params as any, route.args);
}
