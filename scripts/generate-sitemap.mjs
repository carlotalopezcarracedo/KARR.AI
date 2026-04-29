import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, 'public', 'sitemap.xml');
const SITE_URL = 'https://kairas.es';

const EXCLUDED_DIRS = new Set(['.git', '.claude', 'node_modules', 'dist']);
const EXCLUDED_CANONICAL_PATHS = new Set([
  '/automatizacion-ia-empresas-galicia/',
  '/automatizacion-procesos-empresas/'
]);

const PRIORITY_MAP = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/servicios/': { changefreq: 'monthly', priority: '0.9' },
  '/contacto/': { changefreq: 'monthly', priority: '0.8' },
  '/automatizacion-procesos/': { changefreq: 'monthly', priority: '0.9' },
  '/automatizacion-empresas-galicia/': { changefreq: 'monthly', priority: '0.8' },
  '/ia-empresas/': { changefreq: 'monthly', priority: '0.8' },
  '/optimizacion-operativa-pymes/': { changefreq: 'monthly', priority: '0.8' },
  '/automatizacion-whatsapp-empresas/': { changefreq: 'monthly', priority: '0.8' },
  '/crm-pymes-seguimiento-clientes/': { changefreq: 'monthly', priority: '0.8' },
  '/automatizacion-clinicas/': { changefreq: 'monthly', priority: '0.7' },
  '/blog/': { changefreq: 'weekly', priority: '0.7' },
  '/blog/automatizaciones-que-recuperan-tiempo-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/como-saber-que-proceso-automatizar-primero/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/': { changefreq: 'monthly', priority: '0.6' },
  '/accesibilidad/': { changefreq: 'yearly', priority: '0.3' },
  '/privacidad/': { changefreq: 'yearly', priority: '0.3' },
  '/aviso-legal/': { changefreq: 'yearly', priority: '0.3' },
  '/cookies/': { changefreq: 'yearly', priority: '0.1' }
};
const REQUIRED_CANONICAL_PATHS = Object.keys(PRIORITY_MAP);

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

function extract(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : '';
}

function canonicalToPath(canonicalUrl) {
  try {
    const url = new URL(canonicalUrl);
    return url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  } catch {
    return '';
  }
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const seen = new Map();

for (const filePath of walk(ROOT)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const robots = extract(html, /<meta\s+name="robots"\s+content="([^"]+)"/i).toLowerCase();
  const canonical = extract(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);

  if (!canonical || robots.includes('noindex') || !robots.includes('index')) {
    continue;
  }

  const canonicalPath = canonicalToPath(canonical);
  if (!canonicalPath || !canonical.startsWith(SITE_URL)) {
    continue;
  }
  if (EXCLUDED_CANONICAL_PATHS.has(canonicalPath)) {
    continue;
  }

  const stats = fs.statSync(filePath);
  const sourcePath = toPosix(path.relative(ROOT, filePath));

  const previous = seen.get(canonicalPath);
  if (!previous || stats.mtimeMs > previous.mtimeMs) {
    seen.set(canonicalPath, {
      canonical: `${SITE_URL}${canonicalPath}`,
      mtimeMs: stats.mtimeMs,
      lastmod: formatDate(stats.mtime),
      sourcePath
    });
  }
}

const urls = Array.from(seen.entries())
  .sort(([a], [b]) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  })
  .map(([pathname, data]) => {
    const defaults = PRIORITY_MAP[pathname] ?? { changefreq: 'monthly', priority: '0.5' };
    return {
      loc: data.canonical,
      lastmod: data.lastmod,
      changefreq: defaults.changefreq,
      priority: defaults.priority,
      sourcePath: data.sourcePath
    };
  });

const missingRequiredPaths = REQUIRED_CANONICAL_PATHS.filter((pathname) => !seen.has(pathname));
if (missingRequiredPaths.length > 0) {
  console.error('Sitemap generation failed. Missing required canonical paths:');
  for (const pathname of missingRequiredPaths) {
    console.error(`- ${SITE_URL}${pathname}`);
  }
  process.exit(1);
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    (url) => [
      '  <url>',
      `    <loc>${url.loc}</loc>`,
      `    <lastmod>${url.lastmod}</lastmod>`,
      `    <changefreq>${url.changefreq}</changefreq>`,
      `    <priority>${url.priority}</priority>`,
      '  </url>'
    ].join('\n')
  ),
  '</urlset>',
  ''
].join('\n');

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, xml, 'utf8');

console.log(`Generated sitemap with ${urls.length} URLs -> ${toPosix(path.relative(ROOT, OUTPUT))}`);
