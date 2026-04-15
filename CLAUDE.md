# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pesnohorky — сайт центра эстетического воспитания «Песнохорки». Fullstack: React 19 + TypeScript + Vite (фронтенд) + Express + SQLite (бэкенд). CMS-система через HTML-админку.

## Commands

- `npm run dev` — Vite dev server (localhost:5173), проксирует /api и /uploads на бэкенд
- `npm start` — Express бэкенд (localhost:3001)
- `npm run build` — TypeScript type-check (`tsc -b`) + Vite production build
- `npm run lint` — ESLint
- `npm run preview` — serve production build
- `node backend/seed.js` — заполнить БД начальными данными

**Для разработки запускать оба:** `npm start` (бэкенд) + `npm run dev` (фронтенд)

## Architecture

### Frontend

**Entry:** `index.html` → `src/main.tsx` → `App.tsx` (BrowserRouter + Routes)

**Routing (`App.tsx`):**
- `/` → `HomePage` — главная
- `/news` → `NewsLandingPage` — список новостей из API + пагинация
- `/news/:slug` → `NewsDetailPage` — детальная новость из API
- `/departments` → `DepartmentsPage` — список коллективов из API
- `/departments/:id` → `DepartmentDetailPage` — детальная коллектива из API
- `/teachers` → `TeachersStaffPage` — список педагогов из API
- `/teachers/:id` → `TeacherDetailPage` — детальная педагога из API
- `/parents` → `ParentsPage` — страница для родителей (карточки + EnrollModal)
- `/about-info/leadership` → `LeadershipPage` — руководство
- `*` → `StaticPage` — **любой другой URL** загружает страницу из CMS по slug

**Все CMS-страницы** (about, about-info, contacts, parents/safety, parents/privacy и т.д.) обслуживаются единым компонентом `StaticPage`. Новые страницы создаются через админку без правки кода.

**Source layout:**
- `src/pages/` — 10 страниц с уникальной логикой (HomePage, NewsLandingPage, NewsDetailPage, DepartmentsPage, DepartmentDetailPage, TeachersStaffPage, TeacherDetailPage, ParentsPage, LeadershipPage, StaticPage)
- `src/components/shared/` — PageHeader, Footer, MobileHeader, EnrollModal, EnrollForm
- `src/components/news/` — Navbar, Pagination, NewsCardMedium/Featured/Light/Event
- `src/components/ui/` — Button, Card, Heading
- `src/lib/api.ts` — API клиент (fetchTeachers, fetchNewsList, fetchCollectives, fetchStaticPage, fetchFooter, submitApplication и т.д.)

### Backend

**Сервер:** `backend/index.js` — Express на порту 3001

**База данных:** `backend/database.sqlite` (SQLite)

**Таблицы:**
- `teachers` — id, name, bio (HTML), photo_url, created_at
- `news` — id, title, content (HTML), date, image_url
- `collectives` — id, name, description (HTML), photo_url, age_range, schedule, teacher_name, directions, teacher_ids, created_at
- `applications` — id, parent_name, phone, child_name, child_age, collective_name, message, status, created_at
- `static_pages` — id, slug (unique), title, content (HTML), section, created_at, updated_at
- `footer_links` — id, col, label, url, is_external, sort_order
- `footer_contacts` — id, field, value, sort_order

**API роуты:**
- `GET/POST /api/teachers`, `GET/PUT/DELETE /api/admin/teachers/:id`
- `GET/POST /api/news`, `GET/DELETE /api/admin/news/:id`
- `GET/POST /api/collectives`, `GET/PUT/DELETE /api/admin/collectives/:id`
- `POST /api/applications`, `GET/DELETE /api/admin/applications/:id`
- `GET/POST /api/pages`, `GET/PUT/DELETE /api/admin/pages/:id`, `GET /api/pages/:slug`, `GET /api/pages/:a/:b`
- `GET /api/footer`, `POST/DELETE /api/admin/footer/links/:id`, `POST/DELETE /api/admin/footer/contacts/:id`
- `POST /api/upload` — загрузка изображений (multer → `backend/uploads/`)

**Статика:**
- `/uploads/` → `backend/uploads/` (загруженные файлы)
- `/admin/` → `public/admin/` (HTML-админка)

### Админка

HTML-страницы в `public/admin/`:
- `teachers.html` — CRUD педагогов (Quill + загрузка фото)
- `news.html` — CRUD новостей (Quill + загрузка фото)
- `collectives.html` — CRUD коллективов (Quill, фото, направления, выбор руководителя и педагогов из БД)
- `pages.html` — CMS страниц (Quill, секции, slug). Любая созданная страница автоматически доступна на фронте
- `applications.html` — просмотр заявок
- `footer.html` — управление контактами и ссылками в футере
- `quill-extended.js` — общий модуль Quill с кнопкой загрузки фото и режимом HTML-кода

## Conventions

- **CSS Modules** для стилей; `clamp()` для адаптивности вместо множества media queries
- **Контейнер:** `max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 80px)`
- **PageHeader** — единый компонент для Navbar + breadcrumbs на всех страницах
- **Footer** — загружает данные из API, при отсутствии показывает дефолтные ссылки
- **TypeScript strict mode** — no unused variables
- **Breakpoints:** 1024px (tablet), 768px (mobile), 480px (small mobile)
- Brand colors: `#a51312` (red), `#fffff9` (warm white)
- Fonts: "Harlequinade" (заголовки), "Montserrat Alternates" (текст)
- HTML-контент из CMS рендерится через `dangerouslySetInnerHTML`
- Vite proxy: `/api` и `/uploads` → `http://localhost:3001`

---

## Инструкция по деплою на сервер (RU)

### Требования

- **Node.js** 18+ (рекомендуется 20 LTS)
- **npm** 9+
- Сервер с доступом по SSH (VPS, Dedic, или хостинг с Node.js)

### 1. Подготовка файлов

```bash
# Клонируем репозиторий на сервер
git clone <url-репозитория> /var/www/pesnohorky
cd /var/www/pesnohorky

# Устанавливаем зависимости
npm install

# Собираем фронтенд
npm run build
```

### 2. Инициализация базы данных

```bash
# Создаст таблицы и начальные данные
node backend/seed.js
```

База создастся в `backend/database.sqlite`. **Сделайте бэкап этого файла** — в нём все данные сайта.

### 3. Настройка бэкенда

Бэкенд запускается командой `node backend/index.js` на порту 3001. Для продакшена используйте PM2:

```bash
# Установить PM2 глобально
npm install -g pm2

# Запустить бэкенд
pm2 start backend/index.js --name pesnohorky-api

# Автозапуск при перезагрузке сервера
pm2 startup
pm2 save
```

### 4. Настройка Nginx

Nginx отдаёт статику фронтенда и проксирует API на бэкенд:

```nginx
server {
    listen 80;
    server_name pesnohorki.ru www.pesnohorki.ru;

    # Фронтенд (собранный Vite)
    root /var/www/pesnohorky/dist;
    index index.html;

    # Загруженные файлы
    location /uploads/ {
        alias /var/www/pesnohorky/backend/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Админка
    location /admin/ {
        alias /var/www/pesnohorky/public/admin/;
    }

    # API → проксируем на Express
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size 10m;
    }

    # SPA fallback — все остальные URL отдают index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# Проверить конфиг и перезапустить
sudo nginx -t
sudo systemctl reload nginx
```

### 5. HTTPS (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d pesnohorki.ru -d www.pesnohorki.ru
```

### 6. Обновление сайта

```bash
cd /var/www/pesnohorky
git pull
npm install
npm run build
pm2 restart pesnohorky-api
```

### 7. Бэкап базы данных

```bash
# Ручной бэкап
cp backend/database.sqlite backend/database.sqlite.bak

# Автоматический (cron, каждый день в 3:00)
crontab -e
# Добавить строку:
0 3 * * * cp /var/www/pesnohorky/backend/database.sqlite /var/www/pesnohorky/backend/backups/db-$(date +\%Y\%m\%d).sqlite
```

### 8. Важно

- **Админка** доступна по адресу `https://pesnohorki.ru/admin/pages.html` (и другие разделы). Защитите её через Nginx basic auth:

```nginx
location /admin/ {
    alias /var/www/pesnohorky/public/admin/;
    auth_basic "Admin";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
```

```bash
# Создать пароль
sudo apt install apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd admin
```

- **Загруженные фото** хранятся в `backend/uploads/` — включите эту папку в бэкапы
- **База данных** — единственный файл `backend/database.sqlite`, его потеря = потеря всего контента
- При изменении **только контента** (через админку) перезапуск не нужен
- При изменении **кода** — нужен `npm run build` + `pm2 restart pesnohorky-api`
- В админке в URL API захардкожен `http://localhost:3001` — на проде замените на относительные пути или домен. Для этого в каждом HTML-файле админки замените `const API = "http://localhost:3001"` на `const API = ""`
