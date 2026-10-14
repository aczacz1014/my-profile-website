'use strict';

const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const publicDirectory = path.join(__dirname, 'public');
const port = Number(process.env.PORT || 3000);
const host = '127.0.0.1';
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2'
};

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer between 1 and 65535.');
  process.exit(1);
}

function respond(request, response, status, message, headers = {}) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  response.end(request.method === 'HEAD' ? undefined : message);
}

const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    return respond(request, response, 405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
  }

  let pathname;
  try {
    pathname = decodeURIComponent(request.url.split('?')[0]);
  } catch {
    return respond(request, response, 400, 'Bad Request');
  }
  const segments = pathname.split('/');
  if (!pathname.startsWith('/') || pathname.includes('\0') || pathname.includes('\\') ||
      segments.some(segment => segment.startsWith('.'))) {
    return respond(request, response, 403, 'Forbidden');
  }

  try {
    const filename = path.join(publicDirectory, pathname.endsWith('/') ? pathname + 'index.html' : pathname);
    // Resolve symlinks too, so only files inside public can be served.
    const [root, actual] = await Promise.all([fs.realpath(publicDirectory), fs.realpath(filename)]);
    if (!actual.startsWith(root + path.sep)) {
      return respond(request, response, 403, 'Forbidden');
    }
    const info = await fs.stat(actual);
    if (!info.isFile()) return respond(request, response, 404, 'Not Found');
    const data = request.method === 'HEAD' ? null : await fs.readFile(actual);
    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(actual).toLowerCase()] || 'application/octet-stream',
      'Content-Length': data ? data.length : info.size,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    response.end(data);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR'].includes(error.code)) return respond(request, response, 404, 'Not Found');
    if (error.code === 'EACCES') return respond(request, response, 403, 'Forbidden');
    console.error('Unable to serve file:', error.message);
    respond(request, response, 500, 'Internal Server Error');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is in use. Try: PORT=3001 npm start`
    : `Server error: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, host, () => console.log(`Profile website: http://${host}:${port}\nStop: Ctrl+C`));
