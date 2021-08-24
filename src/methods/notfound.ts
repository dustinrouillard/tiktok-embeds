export function NotFound(request: Request): Response {
  return new Response(JSON.stringify({ error: true, code: 'not_found' }), {
    status: 404,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*', 'access-control-allow-headers': '*' },
  });
}
