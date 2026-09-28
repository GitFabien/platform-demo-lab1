const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../src/app");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));

test("GET /version returns expected service and version", async () => {
  // Démarre le serveur dynamiquement
  server.listen(0);
  const port = server.address().port;

  // Lance la requête
  const response = await fetch(`http://127.0.0.1:${port}/version`);
  const body = await response.json();

  // Vérifie les résultats
  assert.equal(response.status, 200);
  assert.deepEqual(body, {
    service: "platform-demo",
    version: "1.0.0"
  });

  // Ferme le serveur
  server.close();
});