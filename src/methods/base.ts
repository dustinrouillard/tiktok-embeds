export async function Base(request: Request): Promise<Response> {
  return new Response(JSON.stringify({ working: true }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*', 'access-control-allow-headers': '*' },
  });
}
