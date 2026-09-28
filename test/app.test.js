const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

test("GET /version returns service and version", async () => {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/version") {
      res.writeHead(200);
      res.end(
        JSON.stringify({
          service: "platform-demo",
          version: "1.0.0",
        }),
      );
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: "not found" }));
  });

  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const response = await fetch(http://127.0.0.1:${port}/version);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, {
    service: "platform-demo",
    version: "1.0.0",
  });

  await new Promise((resolve) => server.close(resolve));
});
