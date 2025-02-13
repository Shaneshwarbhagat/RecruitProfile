const server = jsonServer.create();
const router = jsonServer.router(__dirname + "/db.json"); // Ensure db.json is in the same directory
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;