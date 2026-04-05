import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500&display=swap";

const outPublicFonts = path.resolve(rootDir, "public/fonts");
const outCss = path.resolve(rootDir, "src/fonts/montserrat-alternates.css");

const ua =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

function getUrlsFromCss(css) {
  const urls = [];
  const re = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+)\)/g;
  let m;
  while ((m = re.exec(css)) !== null) urls.push(m[1]);
  return [...new Set(urls)];
}

function extFromContentType(contentType) {
  const ct = (contentType || "").split(";")[0].trim().toLowerCase();
  if (ct === "font/woff2") return "woff2";
  if (ct === "font/woff") return "woff";
  return "bin";
}

async function download(url) {
  const res = await fetch(url, { headers: { "user-agent": ua } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const contentType = res.headers.get("content-type");
  const ext = extFromContentType(contentType);
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, ext };
}

async function main() {
  await mkdir(outPublicFonts, { recursive: true });

  const cssRes = await fetch(cssUrl, { headers: { "user-agent": ua } });
  if (!cssRes.ok) throw new Error(`CSS HTTP ${cssRes.status}`);
  const cssText = await cssRes.text();

  const urls = getUrlsFromCss(cssText);
  if (urls.length === 0) {
    throw new Error("No font URLs found in Google Fonts CSS response");
  }

  const replacements = new Map();
  let idx = 0;

  for (const url of urls) {
    idx += 1;
    const { buf, ext } = await download(url);
    const fileName = `montserrat-alternates-${idx}.${ext}`;
    await writeFile(path.join(outPublicFonts, fileName), buf);
    replacements.set(url, `/fonts/${fileName}`);
    console.log(`OK ${fileName}`);
  }

  let localCss = cssText;
  for (const [remote, local] of replacements.entries()) {
    localCss = localCss.replaceAll(remote, local);
  }

  await writeFile(outCss, localCss, "utf8");
  console.log(`\nWrote CSS: ${outCss}`);
  console.log(`Fonts in: ${outPublicFonts}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

