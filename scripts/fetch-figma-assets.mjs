import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const figmaAssetsPath = path.resolve(rootDir, "src/lib/figmaAssets.ts");
const outputDir = path.resolve(rootDir, "public/img/news");

const contentTypeToExt = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

function getExtensionFromResponse(response) {
  const contentType = (response.headers.get("content-type") || "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  if (!contentType) return "bin";
  return contentTypeToExt[contentType] || "bin";
}

function parseAssetEntries(fileContent) {
  const urlRegex =
    /([A-Za-z_$][\w$]*)\s*:\s*"https:\/\/www\.figma\.com\/api\/mcp\/asset\/[^"]+"/g;
  const entries = [];
  let match;
  while ((match = urlRegex.exec(fileContent)) !== null) {
    const [fullMatch, key] = match;
    const url = fullMatch.slice(fullMatch.indexOf('"') + 1, fullMatch.lastIndexOf('"'));
    entries.push({ key, url });
  }
  return entries;
}

async function downloadAsset({ key, url }) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const ext = getExtensionFromResponse(response);
  const filePath = path.join(outputDir, `${key}.${ext}`);

  await writeFile(filePath, buffer);
  return { key, filePath, ext };
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const source = await readFile(figmaAssetsPath, "utf8");
  const assets = parseAssetEntries(source);

  if (assets.length === 0) {
    console.log("No Figma MCP asset URLs found in src/lib/figmaAssets.ts");
    return;
  }

  console.log(`Found ${assets.length} assets. Downloading to: ${outputDir}`);

  let okCount = 0;
  let failCount = 0;

  for (const asset of assets) {
    try {
      const result = await downloadAsset(asset);
      okCount += 1;
      console.log(`OK   ${result.key} -> ${path.basename(result.filePath)}`);
    } catch (error) {
      failCount += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.log(`FAIL ${asset.key} -> ${message}`);
    }
  }

  console.log("");
  console.log(`Done. Success: ${okCount}, Failed: ${failCount}`);
  if (failCount > 0) {
    console.log(
      "Some links may be expired (Figma MCP URLs are time-limited). Refresh links and run script again."
    );
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Unexpected error: ${message}`);
  process.exitCode = 1;
});
