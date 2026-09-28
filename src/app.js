const http = require("node:http");
const PORT = Number(process.env.PORT || 8080);
const APP_NAME = "platform-demo";
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        service: APP_NAME,
        message: "Hello from the platform demo!",
      }),
    );
    return;
  }
  if (req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: "not found" }));
});
server.listen(PORT, () => console.log(`${APP_NAME} listening on ${PORT}.`));

app.get('/version', (req, res) => {
  res.json({
    service: "platform-demo",
    version: "1.0.0"
  });
});

const request = require('supertest');
const app = require('./app'); // Remplace par le fichier qui exporte ton application Express

describe('GET /version', () => {
  it('doit retourner le bon JSON et un code 200', async () => {
    const res = await request(app).get('/version');
    
    // 1. Vérification du code HTTP
    expect(res.statusCode).toEqual(200);
    
    // 2. Vérification du contenu JSON
    expect(res.body).toEqual({
      service: 'platform-demo',
      version: '1.0.0'
    });
  });
});