import { Router } from "express";
import { dbAll, dbGet, dbRun } from "../db.js";

const router = Router();

// GET /api/teachers — список педагогов
router.get("/", async (_req, res) => {
  try {
    const rows = await dbAll(
      "SELECT id, name, photo_url FROM teachers ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/teachers/:id — детальная информация
router.get("/:id", async (req, res) => {
  try {
    const row = await dbGet("SELECT * FROM teachers WHERE id = ?", [
      req.params.id,
    ]);
    if (!row) return res.status(404).json({ error: "Педагог не найден" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/teachers — создание педагога
router.post("/", async (req, res) => {
  const { name, bio, photo_url } = req.body;
  if (!name || !bio) {
    return res.status(400).json({ error: "name и bio обязательны" });
  }
  try {
    const result = await dbRun(
      "INSERT INTO teachers (name, bio, photo_url) VALUES (?, ?, ?)",
      [name, bio, photo_url || null]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/teachers/:id — обновление педагога
router.put("/:id", async (req, res) => {
  const { name, bio, photo_url } = req.body;
  if (!name || !bio) {
    return res.status(400).json({ error: "name и bio обязательны" });
  }
  try {
    const result = await dbRun(
      "UPDATE teachers SET name = ?, bio = ?, photo_url = ? WHERE id = ?",
      [name, bio, photo_url || null, req.params.id]
    );
    if (result.changes === 0)
      return res.status(404).json({ error: "Педагог не найден" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/teachers/:id — удаление педагога
router.delete("/:id", async (req, res) => {
  try {
    const result = await dbRun("DELETE FROM teachers WHERE id = ?", [
      req.params.id,
    ]);
    if (result.changes === 0)
      return res.status(404).json({ error: "Педагог не найден" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
