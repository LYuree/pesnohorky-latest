import { Router } from "express";
import { dbAll, dbRun } from "../db.js";

const router = Router();

// POST /api/applications — создание заявки
router.post("/", async (req, res) => {
  const { parent_name, phone, child_name, child_age, collective_name, message } = req.body;
  if (!parent_name || !phone) {
    return res.status(400).json({ error: "parent_name и phone обязательны" });
  }
  try {
    const result = await dbRun(
      `INSERT INTO applications (parent_name, phone, child_name, child_age, collective_name, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [parent_name, phone, child_name || null, child_age || null, collective_name || null, message || null]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/applications — список заявок (для админки)
router.get("/", async (_req, res) => {
  try {
    const rows = await dbAll("SELECT * FROM applications ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/applications/:id/status — обновление статуса
router.put("/:id/status", async (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: "status обязателен" });
  }
  try {
    const result = await dbRun("UPDATE applications SET status = ? WHERE id = ?", [status, req.params.id]);
    if (result.changes === 0) return res.status(404).json({ error: "Заявка не найдена" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/applications/:id — удаление заявки
router.delete("/:id", async (req, res) => {
  try {
    const result = await dbRun("DELETE FROM applications WHERE id = ?", [req.params.id]);
    if (result.changes === 0) return res.status(404).json({ error: "Заявка не найдена" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
