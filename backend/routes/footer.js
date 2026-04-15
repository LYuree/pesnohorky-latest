import { Router } from "express";
import { dbAll, dbRun } from "../db.js";

const router = Router();

// GET /api/footer — все данные футера
router.get("/", async (_req, res) => {
  try {
    const links = await dbAll("SELECT * FROM footer_links ORDER BY col, sort_order");
    const contacts = await dbAll("SELECT * FROM footer_contacts ORDER BY sort_order");
    res.json({ links, contacts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/footer/links — добавить ссылку
router.post("/links", async (req, res) => {
  const { col, label, url, is_external, sort_order } = req.body;
  if (!label || !url) return res.status(400).json({ error: "label и url обязательны" });
  try {
    const result = await dbRun(
      "INSERT INTO footer_links (col, label, url, is_external, sort_order) VALUES (?, ?, ?, ?, ?)",
      [col || 1, label, url, is_external ? 1 : 0, sort_order || 0]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/footer/links/:id
router.delete("/links/:id", async (req, res) => {
  try {
    await dbRun("DELETE FROM footer_links WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/footer/contacts — добавить контакт
router.post("/contacts", async (req, res) => {
  const { field, value, sort_order } = req.body;
  if (!field || !value) return res.status(400).json({ error: "field и value обязательны" });
  try {
    const result = await dbRun(
      "INSERT INTO footer_contacts (field, value, sort_order) VALUES (?, ?, ?)",
      [field, value, sort_order || 0]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/footer/contacts/:id
router.delete("/contacts/:id", async (req, res) => {
  try {
    await dbRun("DELETE FROM footer_contacts WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
