import corsProxy from 'cors-anywhere';

/* eslint-disable no-console */

const host = process.env.HOST || '0.0.0.0';
const port = 8080;

corsProxy.createServer({
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});
