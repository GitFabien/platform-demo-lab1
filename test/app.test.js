const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../src/app.js");

test("GET /version returns the service name and version", async () => {
  await new Promise((resolve) => server.listen(0, resolve));

  try {
    const response = await fetch(
      `http://localhost:${server.address().port}/version`
    );

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      service: "platform-demo",
      version: "1.0.0",
    });
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});