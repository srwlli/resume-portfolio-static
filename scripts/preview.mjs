import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' };

createServer((request, response) => {
  const requested = decodeURIComponent((request.url || '/').split('?')[0]);
  const relative = requested.endsWith('/') ? `${requested}index.html` : requested;
  const file = normalize(join(root, relative));
  if (!file.startsWith(root)) { response.writeHead(403); response.end('Forbidden'); return; }
  try {
    if (!statSync(file).isFile()) throw new Error('not a file');
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
  }
}).listen(port, () => console.log(`Static preview: http://localhost:${port}/`));
