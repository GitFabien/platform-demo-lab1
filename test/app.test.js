const test = require("node:test");
const assert = require("node:assert/strict");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));

test("GET /version returns service name and version", async () => {
  const port = process.env.PORT || 8080;
  const res = await fetch(`http://localhost:${port}/version`);
  
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "application/json");

  const body = await res.json();
  assert.deepEqual(body, {
    service: "platform-demo",
    version: "1.0.0",
  });
});