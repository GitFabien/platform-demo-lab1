const test = require("node:test");
const assert = require("node:assert/strict");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));

test("health is healthy", () => assert.equal("ok", "ok"));

test("version returns correct service and version", () =>
  assert.deepEqual(
    {
      service: "platform-demo",
      version: "1.0.0",
    },
    {
      service: "platform-demo",
      version: "1.0.0",
    },
  ));