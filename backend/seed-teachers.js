import { initDB, dbRun, dbAll } from "./db.js";

async function seed() {
  await initDB();

  const existing = await dbAll("SELECT id FROM teachers LIMIT 1");
  if (existing.length > 0) {
    console.log("Педагоги уже есть, пропускаем seed");
    return;
  }

  await dbRun(
    "INSERT INTO teachers (name, bio, photo_url) VALUES (?, ?, ?)",
    [
      "Бурдина Алёна Максимовна",
      "<p><strong>Должность:</strong> Педагог дополнительного образования, руководитель хореографической студии «Орбита»</p><p><strong>Квалификация:</strong> Первая квалификационная категория</p><p><strong>Образование:</strong></p><ul><li>КГБПОУ «Алтайский краевой колледж культуры и искусств», 2021 год — среднее профессиональное образование, «Руководитель любительского творческого коллектива, преподаватель» по специальности «Народное художественное творчество (Хореографическое творчество)»</li><li>ФГБОУ «Омский государственный университет им. Ф.М. Достоевского» — повышение квалификации «Программа профессионального обучения детей современному танцу», 72 часа, 2021 год</li></ul>",
      "/images/home/img1.png"
    ]
  );

  await dbRun(
    "INSERT INTO teachers (name, bio, photo_url) VALUES (?, ?, ?)",
    [
      "Кем Анастасия Сергеевна",
      "<p><strong>Должность:</strong> Педагог дополнительного образования, руководитель объединения «Перспектива»</p><p><strong>Квалификация:</strong> Высшая квалификационная категория</p>",
      "/images/home/imgGfdgnhtjgn1.png"
    ]
  );

  console.log("Педагоги добавлены!");
}

seed().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
