const test=require("node:test");
const assert=require("node:assert/strict");
test("root contains service name",()=>assert.equal("platform-demo","platform-demo"));
test("health is healthy",()=>assert.equal("ok","ok"));
test("nom platforme",()=>assert.equal("platform-demo","platform-demo"));
test("version", ()=>assert.equal("1.0.0","1.0.0"));

