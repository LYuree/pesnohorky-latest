import { Router } from "express";
import { dbAll, dbGet, dbRun } from "../db.js";

const router = Router();

// GET / — список всех страниц
router.get("/", async (_req, res) => {
  try {
    const rows = await dbAll(
      "SELECT id, slug, title, section, updated_at FROM static_pages ORDER BY section, slug"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET по slug любой глубины: /slug, /a/b, /a/b/c
router.get("/:a/:b/:c", async (req, res) => {
  try {
    const slug = req.params.a + "/" + req.params.b + "/" + req.params.c;
    const row = await dbGet("SELECT * FROM static_pages WHERE slug = ?", [slug]);
    if (!row) return res.status(404).json({ error: "Страница не найдена" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /:slug — получить страницу по простому slug
router.get("/:slug", async (req, res) => {
  try {
    const row = await dbGet("SELECT * FROM static_pages WHERE slug = ?", [
      req.params.slug,
    ]);
    if (!row) return res.status(404).json({ error: "Страница не найдена" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /:section/:page — получить страницу по вложенному slug
router.get("/:section/:page", async (req, res) => {
  try {
    const slug = req.params.section + "/" + req.params.page;
    const row = await dbGet("SELECT * FROM static_pages WHERE slug = ?", [
      slug,
    ]);
    if (!row) return res.status(404).json({ error: "Страница не найдена" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST / — создать страницу
router.post("/", async (req, res) => {
  const { slug, title, content, section } = req.body;
  if (!slug || !title || !content) {
    return res.status(400).json({ error: "slug, title и content обязательны" });
  }
  try {
    const result = await dbRun(
      "INSERT INTO static_pages (slug, title, content, section) VALUES (?, ?, ?, ?)",
      [slug, title, content, section || null]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /:id — обновить страницу
router.put("/:id", async (req, res) => {
  const { title, content, section } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "title и content обязательны" });
  }
  try {
    const result = await dbRun(
      "UPDATE static_pages SET title = ?, content = ?, section = ?, updated_at = datetime('now') WHERE id = ?",
      [title, content, section || null, req.params.id]
    );
    if (result.changes === 0)
      return res.status(404).json({ error: "Страница не найдена" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /:id — удалить страницу
router.delete("/:id", async (req, res) => {
  try {
    const result = await dbRun("DELETE FROM static_pages WHERE id = ?", [
      req.params.id,
    ]);
    if (result.changes === 0)
      return res.status(404).json({ error: "Страница не найдена" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
