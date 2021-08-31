const http = require('http');
const { checkServerIdentity } = require('tls');
const app = require('./app');

const server = http.createServer(app);
const port = process.env.API_PORT || 3000;

server.listen(port, () => {
  console.log(`springbig-anagrams api running on port ${port}`);
});