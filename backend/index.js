import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { initDB } from "./db.js";
import teachersRouter from "./routes/teachers.js";
import newsRouter from "./routes/news.js";
import uploadRouter from "./routes/upload.js";
import collectivesRouter from "./routes/collectives.js";
import applicationsRouter from "./routes/applications.js";
import staticPagesRouter from "./routes/static-pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

app.use(express.json());

// CORS — разрешаем запросы с фронтенд дев-сервера
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (_req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Статика: загруженные файлы
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Статика: админка и публичные страницы
app.use("/admin", express.static(path.join(__dirname, "..", "public", "admin")));
app.use("/pages", express.static(path.join(__dirname, "..", "public", "pages")));

// API routes
app.use("/api/upload", uploadRouter);

app.use("/api/teachers", teachersRouter);
app.use("/api/admin/teachers", teachersRouter);

app.use("/api/news", newsRouter);
app.use("/api/admin/news", newsRouter);

app.use("/api/collectives", collectivesRouter);
app.use("/api/admin/collectives", collectivesRouter);

app.use("/api/applications", applicationsRouter);
app.use("/api/admin/applications", applicationsRouter);

app.use("/api/pages", staticPagesRouter);
app.use("/api/admin/pages", staticPagesRouter);

async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
    console.log(`Админка педагогов: http://localhost:${PORT}/admin/teachers.html`);
    console.log(`Админка новостей:  http://localhost:${PORT}/admin/news.html`);
    console.log(`Админка коллективов: http://localhost:${PORT}/admin/collectives.html`);
    console.log(`Админка заявок:     http://localhost:${PORT}/admin/applications.html`);
    console.log(`Админка страниц:   http://localhost:${PORT}/admin/pages.html`);
  });
}

start().catch(console.error);
