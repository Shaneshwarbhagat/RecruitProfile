const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./api/db.json"); // Use relative path
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
