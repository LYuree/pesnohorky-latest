import { mkdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const archiveDir = path.resolve(rootDir, "figma-archive");
const assetsDir = path.resolve(archiveDir, "assets");
const manifestPath = path.resolve(archiveDir, "manifest.json");
const cursorProjectName = "c-Users-korsi-OneDrive-pesnochorky-pesnohorky-latest";
const agentToolsDir = path.resolve(homedir(), ".cursor", "projects", cursorProjectName, "agent-tools");

const searchFiles = [
  path.resolve(rootDir, "src/lib/figmaAssets.ts"),
  path.resolve(rootDir, "figma-archive/seeds.txt"),
];

const contentTypeToExt = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

function extractUrls(sourceText) {
  const urlRegex = /https:\/\/www\.figma\.com\/api\/mcp\/asset\/[0-9a-f-]+/g;
  return [...new Set(sourceText.match(urlRegex) || [])];
}

function detectExt(response) {
  const ct = (response.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  return contentTypeToExt[ct] || "bin";
}

async function loadAllUrls() {
  const filesToRead = [...searchFiles];
  try {
    const fs = await import("node:fs/promises");
    const names = await fs.readdir(agentToolsDir);
    for (const name of names) {
      if (name.endsWith(".txt")) {
        filesToRead.push(path.join(agentToolsDir, name));
      }
    }
  } catch {
    // Ignore missing .cursor folder or access issues.
  }

  const bySource = [];
  for (const file of filesToRead) {
    try {
      const content = await readFile(file, "utf8");
      const urls = extractUrls(content);
      bySource.push({ file, urls });
    } catch {
      bySource.push({ file, urls: [] });
    }
  }
  const all = [...new Set(bySource.flatMap((s) => s.urls))];
  return { all, bySource };
}

async function download(url) {
  const id = url.split("/").pop();
  const response = await fetch(url);
  if (!response.ok) {
    return { ok: false, id, url, status: response.status };
  }
  const ext = detectExt(response);
  const fileName = `${id}.${ext}`;
  const filePath = path.join(assetsDir, fileName);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(filePath, buffer);
  return { ok: true, id, url, fileName, ext };
}

async function main() {
  await mkdir(assetsDir, { recursive: true });
  const { all, bySource } = await loadAllUrls();
  if (all.length === 0) {
    console.log("No Figma MCP asset URLs found.");
    return;
  }

  console.log(`Found ${all.length} unique URLs.`);
  const results = [];

  for (const url of all) {
    const result = await download(url);
    results.push(result);
    if (result.ok) {
      console.log(`OK   ${result.fileName}`);
    } else {
      console.log(`FAIL ${result.id} -> HTTP ${result.status}`);
    }
  }

  const success = results.filter((r) => r.ok).length;
  const failed = results.length - success;
  const manifest = {
    createdAt: new Date().toISOString(),
    totals: {
      uniqueUrls: all.length,
      success,
      failed,
    },
    sources: bySource,
    results,
  };

  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  console.log("");
  console.log(`Archive complete: ${success} downloaded, ${failed} failed`);
  console.log(`Assets folder: ${assetsDir}`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
