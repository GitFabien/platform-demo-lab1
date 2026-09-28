const test = require("node:test");
const assert = require("node:assert/strict");

const PORT = 8090;

let server;

test.before(() => {
  process.env.PORT = PORT;
  server = require("../src/app");
});

test.after(() => {
  server.close();
});

test("version endpoint returns service and version", async () => {
  const response = await fetch(`http://localhost:${PORT}/version`);

  assert.equal(response.status, 200);

  const body = await response.json();

  assert.deepEqual(body, {
    service: "platform-demo",
    version: "1.0.0",
  });
});