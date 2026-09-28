const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../src/app.js");

let baseUrl;

test.before(async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

test.after(() => server.close());

test("root contains service name", async () => {
  const res = await fetch(`${baseUrl}/`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.service, "platform-demo");
});

test("health is healthy", async () => {
  const res = await fetch(`${baseUrl}/health`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.status, "ok");
});

test("version returns service name and version", async () => {
  const res = await fetch(`${baseUrl}/version`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.deepEqual(body, { service: "platform-demo", version: "1.0.0" });
});
