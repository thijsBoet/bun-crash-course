const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/') return new Response('Hello Hot BUN!')
    if (url.pathname === '/blog') return new Response('Blog Bunnies!');
    return new Response('This is not the page you are looking for! Error 404', { status: 404 })
  }
})

console.log(`Server running at ${server.port}`);
