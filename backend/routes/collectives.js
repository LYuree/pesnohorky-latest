import { Router } from "express";
import { dbAll, dbGet, dbRun } from "../db.js";

const router = Router();

// GET /api/collectives — список коллективов
router.get("/", async (_req, res) => {
  try {
    const rows = await dbAll(
      "SELECT id, name, photo_url, age_range, teacher_name FROM collectives ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/collectives/:id — детальная информация
router.get("/:id", async (req, res) => {
  try {
    const row = await dbGet("SELECT * FROM collectives WHERE id = ?", [
      req.params.id,
    ]);
    if (!row) return res.status(404).json({ error: "Коллектив не найден" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/collectives — создание коллектива
router.post("/", async (req, res) => {
  const { name, description, photo_url, age_range, schedule, teacher_name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name обязательно" });
  }
  try {
    const result = await dbRun(
      "INSERT INTO collectives (name, description, photo_url, age_range, schedule, teacher_name) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description || null, photo_url || null, age_range || null, schedule || null, teacher_name || null]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/collectives/:id — обновление коллектива
router.put("/:id", async (req, res) => {
  const { name, description, photo_url, age_range, schedule, teacher_name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name обязательно" });
  }
  try {
    const result = await dbRun(
      "UPDATE collectives SET name = ?, description = ?, photo_url = ?, age_range = ?, schedule = ?, teacher_name = ? WHERE id = ?",
      [name, description || null, photo_url || null, age_range || null, schedule || null, teacher_name || null, req.params.id]
    );
    if (result.changes === 0)
      return res.status(404).json({ error: "Коллектив не найден" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/collectives/:id — удаление коллектива
router.delete("/:id", async (req, res) => {
  try {
    const result = await dbRun("DELETE FROM collectives WHERE id = ?", [
      req.params.id,
    ]);
    if (result.changes === 0)
      return res.status(404).json({ error: "Коллектив не найден" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
