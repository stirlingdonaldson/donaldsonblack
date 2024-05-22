const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    console.log(url.pathname);
    if (url.pathname === "/") return new Response(Bun.file("src/index.html"));
    if (url.pathname === "/styles.css") return new Response(Bun.file("src/style.css"));
    if (url.pathname === "/about-us.html") return new Response(Bun.file("src/about-us.html"));
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
