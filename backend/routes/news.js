import { Router } from "express";
import { dbAll, dbGet, dbRun } from "../db.js";

const router = Router();

function stripHtml(html) {
  return (html || "").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

// GET /api/news — список новостей (с коротким preview)
router.get("/", async (_req, res) => {
  try {
    const rows = await dbAll(
      "SELECT id, title, date, image_url, content FROM news ORDER BY date DESC"
    );
    const result = rows.map(r => ({
      id: r.id,
      title: r.title,
      date: r.date,
      image_url: r.image_url,
      preview: stripHtml(r.content).slice(0, 200),
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/news/:id — детальная новость
router.get("/:id", async (req, res) => {
  try {
    const row = await dbGet("SELECT * FROM news WHERE id = ?", [
      req.params.id,
    ]);
    if (!row) return res.status(404).json({ error: "Новость не найдена" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/news — создание новости
router.post("/", async (req, res) => {
  const { title, content, date, image_url } = req.body;
  if (!title || !content || !date) {
    return res
      .status(400)
      .json({ error: "title, content и date обязательны" });
  }
  try {
    const result = await dbRun(
      "INSERT INTO news (title, content, date, image_url) VALUES (?, ?, ?, ?)",
      [title, content, date, image_url || null]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/news/:id — удаление новости
router.delete("/:id", async (req, res) => {
  try {
    const result = await dbRun("DELETE FROM news WHERE id = ?", [
      req.params.id,
    ]);
    if (result.changes === 0)
      return res.status(404).json({ error: "Новость не найдена" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
