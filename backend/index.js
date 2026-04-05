import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { initDB } from "./db.js";
import teachersRouter from "./routes/teachers.js";
import newsRouter from "./routes/news.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

app.use(express.json());

// CORS — разрешаем запросы с фронтенд дев-сервера
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  if (_req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Статика: админка и публичные страницы
app.use("/admin", express.static(path.join(__dirname, "..", "public", "admin")));
app.use("/pages", express.static(path.join(__dirname, "..", "public", "pages")));

// API routes
app.use("/api/teachers", teachersRouter);
app.use("/api/admin/teachers", teachersRouter);

app.use("/api/news", newsRouter);
app.use("/api/admin/news", newsRouter);

async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
    console.log(`Админка педагогов: http://localhost:${PORT}/admin/teachers.html`);
    console.log(`Админка новостей:  http://localhost:${PORT}/admin/news.html`);
    console.log(`Страница педагогов: http://localhost:${PORT}/pages/teachers.html`);
    console.log(`Страница новостей:  http://localhost:${PORT}/pages/news.html`);
  });
}

start().catch(console.error);
