const test=require("node:test");
const assert=require("node:assert/strict");
test("root contains service name",()=>assert.equal("platform-demo","platform-demo"));
test("health is healthy",()=>assert.equal("ok","ok"));
test("service name is correct",()=>assert.equal("service","platform-demo"));
test("version is correct",()=>assert.equal("version","1.0.0"));
