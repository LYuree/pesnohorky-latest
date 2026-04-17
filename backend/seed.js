/**
 * Seed script — заполняет базу данными из db-dump.json
 * Использование: node backend/seed.js
 *
 * Безопасно запускать повторно — пропускает записи, которые уже существуют.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initDB, dbRun, dbGet } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dumpPath = path.join(__dirname, "db-dump.json");

async function seed() {
  await initDB();

  if (!fs.existsSync(dumpPath)) {
    console.log("db-dump.json не найден, создаю минимальные данные...");
    await seedMinimal();
    return;
  }

  const data = JSON.parse(fs.readFileSync(dumpPath, "utf8"));
  let created = 0;
  let skipped = 0;

  // Teachers
  for (const t of data.teachers || []) {
    const existing = await dbGet("SELECT id FROM teachers WHERE id = ?", [t.id]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO teachers (id, name, bio, photo_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [t.id, t.name, t.bio, t.photo_url, t.created_at]
    );
    created++;
  }

  // News
  for (const n of data.news || []) {
    const existing = await dbGet("SELECT id FROM news WHERE id = ?", [n.id]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO news (id, title, content, date, image_url) VALUES (?, ?, ?, ?, ?)",
      [n.id, n.title, n.content, n.date, n.image_url]
    );
    created++;
  }

  // Collectives
  for (const c of data.collectives || []) {
    const existing = await dbGet("SELECT id FROM collectives WHERE id = ?", [c.id]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO collectives (id, name, description, photo_url, age_range, schedule, teacher_name, directions, teacher_ids, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [c.id, c.name, c.description, c.photo_url, c.age_range, c.schedule, c.teacher_name, c.directions || null, c.teacher_ids || null, c.created_at]
    );
    created++;
  }

  // Static pages
  for (const p of data.pages || []) {
    const existing = await dbGet("SELECT id FROM static_pages WHERE slug = ?", [p.slug]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO static_pages (id, slug, title, content, section, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [p.id, p.slug, p.title, p.content, p.section, p.created_at, p.updated_at]
    );
    created++;
  }

  // Footer links
  for (const l of data.footerLinks || []) {
    const existing = await dbGet("SELECT id FROM footer_links WHERE id = ?", [l.id]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO footer_links (id, col, label, url, is_external, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      [l.id, l.col, l.label, l.url, l.is_external, l.sort_order]
    );
    created++;
  }

  // Footer contacts
  for (const c of data.footerContacts || []) {
    const existing = await dbGet("SELECT id FROM footer_contacts WHERE id = ?", [c.id]);
    if (existing) { skipped++; continue; }
    await dbRun(
      "INSERT INTO footer_contacts (id, field, value, sort_order) VALUES (?, ?, ?, ?)",
      [c.id, c.field, c.value, c.sort_order]
    );
    created++;
  }

  console.log(`Seed завершён: ${created} создано, ${skipped} пропущено (уже существуют)`);
  process.exit(0);
}

async function seedMinimal() {
  // Минимальный набор данных, если db-dump.json нет
  const aboutExists = await dbGet("SELECT id FROM static_pages WHERE slug = ?", ["about"]);
  if (!aboutExists) {
    await dbRun(
      "INSERT INTO static_pages (slug, title, content, section) VALUES (?, ?, ?, ?)",
      ["about", "О центре", "<p>«Песнохорки» — центр эстетического воспитания.</p>", null]
    );
    console.log("  Создана страница: about");
  }

  const contactsExists = await dbGet("SELECT id FROM static_pages WHERE slug = ?", ["contacts"]);
  if (!contactsExists) {
    await dbRun(
      "INSERT INTO static_pages (slug, title, content, section) VALUES (?, ?, ?, ?)",
      ["contacts", "Контакты", "<p>г. Барнаул, Павловский тракт, 134</p><p>Тел: +7 (3852) 569-463</p>", null]
    );
    console.log("  Создана страница: contacts");
  }

  console.log("Минимальный seed завершён");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
