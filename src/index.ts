const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    console.log(url.pathname);
    if (url.pathname === "/") return new Response(Bun.file("src/index.html"));
    if (url.pathname === "/index.css") return new Response(Bun.file("src/index.css"));
    if (url.pathname === "/about-us.html") return new Response(Bun.file("src/about-us.html"));
    if (url.pathname === "/about-us.css") return new Response(Bun.file("src/about-us.css"));
    if (url.pathname === "/info.html") return new Response(Bun.file("src/info.html"));
    if (url.pathname === "/info.css") return new Response(Bun.file("src/info.css"));
    if (url.pathname === "/work.html") return new Response(Bun.file("src/work.html"));
    if (url.pathname === "/work.css") return new Response(Bun.file("src/work.css"));
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
