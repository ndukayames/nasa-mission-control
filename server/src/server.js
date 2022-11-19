const http = require("http");

const app = require("./app");
const { loadPlanets } = require("../src/models/planets.model");

const PORT = process.env.PORT || 8000;

// load planet before server starts
async function startServer() {
  await loadPlanets();

  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server started, located at ${PORT}`);
  });
}

startServer();
