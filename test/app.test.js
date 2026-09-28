const test = require("node:test");
const assert = require("node:assert/strict");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));

test("version returns service and version", async () => {
  const res = await fetch("http://localhost:8080/version");
  const data = await res.json();
  assert.deepEqual(data, { service: "platform-demo", version: "1.0.0" });
});
