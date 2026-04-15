import { initDB, dbRun, dbGet } from "./db.js";

const content = `
<h1>Основные сведения</h1>

<p><a href="https://песнохорки.рф/" target="_blank" rel="noreferrer">«Песнохорки»</a> — многопрофильное образовательное учреждение.</p>

<p><strong>Полное наименование образовательного учреждения в соответствии с Уставом:</strong> Муниципальное бюджетное учреждение дополнительного образования <a href="https://песнохорки.рф/" target="_blank" rel="noreferrer">«Центр эстетического воспитания «Песнохорки»</a></p>

<p><strong>Сокращенное наименование (по Уставу):</strong> <a href="https://песнохорки.рф/" target="_blank" rel="noreferrer">МБУ ДО «ЦЭВ «Песнохорки»</a></p>

<p><strong>Дата создания организации:</strong> 10 апреля 1995 г.</p>

<ul>
<li><a href="https://песнохорки.рф/uploads/files/litsenziya.pdf" target="_blank" rel="noreferrer">ЛИЦЕНЗИЯ</a></li>
<li><a href="https://песнохорки.рф/uploads/files/Vipiska_iz_reestra_litsenziy_no__L035-01260-222F00372540.pdf" target="_blank" rel="noreferrer">Выписка из реестра лицензий</a></li>
<li><a href="https://песнохорки.рф/uploads/files/OGRN.pdf" target="_blank" rel="noreferrer">ОГРН</a></li>
<li><a href="https://песнохорки.рф/uploads/files/list_zapisi.pdf" target="_blank" rel="noreferrer">Лист записи единого государственного реестра юридических лиц</a></li>
</ul>

<h2>Информация об учредителе</h2>

<table>
<tr><td><strong>Наименование учредителя</strong></td><td>Комитет по образованию города Барнаула</td></tr>
<tr><td><strong>Председатель комитета</strong></td><td>Муль Андрей Генрихович — 8(3852) 56-90-45</td></tr>
<tr><td><strong>Заместитель председателя комитета по экономике</strong></td><td>Паршуткина Лариса Николаевна — 8(3852) 56-90-03</td></tr>
<tr><td><strong>Адрес учредителя</strong></td><td>Комитет по образованию города Барнаула</td></tr>
<tr><td><strong>График работы учредителя</strong></td><td>понедельник – четверг 8.00-17.00, обед 12.00-13.00; пятница 8.00-16.00, обед 12.00-13.00</td></tr>
<tr><td><strong>Контактные телефоны учредителя</strong></td><td>(8-3852) 66-75-53</td></tr>
<tr><td><strong>Адрес электронной почты учредителя</strong></td><td><a href="mailto:kobra@obr.barnaul-adm.ru">kobra@obr.barnaul-adm.ru</a></td></tr>
<tr><td><strong>Сайт учредителя</strong></td><td><a href="http://www.barnaul-obr.ru/" target="_blank" rel="noreferrer">www.barnaul-obr.ru</a></td></tr>
</table>

<h2>Место нахождения образовательной организации</h2>

<p><strong>Адрес фактический:</strong> 656057, Алтайский край, г. Барнаул, ул. Энтузиастов, 5</p>
<p><strong>График работы:</strong> понедельник – суббота 8.00-20.00</p>
<p><strong>Адрес электронной почты:</strong> pesnohorki@yandex.ru</p>

<p><strong>Адрес юридический:</strong> 656057, Алтайский край, г. Барнаул, Павловский тракт, 134</p>
<p><strong>График работы:</strong></p>
<ul>
<li>понедельник – четверг 8.00-17.00, обед 12.00-12.48;</li>
<li>пятница 8.00-16.00, обед 12.00-12.48.</li>
</ul>
<p><strong>Адрес электронной почты:</strong> pesnohorki@yandex.ru</p>

<h2>Образовательная деятельность</h2>

<table>
<tr><td><strong>Вид</strong></td><td>дополнительное образование</td></tr>
<tr><td><strong>Подвид</strong></td><td>дополнительное образование детей и взрослых</td></tr>
<tr><td><strong>Язык обучения</strong></td><td>русский</td></tr>
<tr><td><strong>Нормативный срок обучения</strong></td><td>1-7 лет</td></tr>
<tr><td><strong>Место осуществления обр. деятельности</strong></td><td>ул. Энтузиастов 5</td></tr>
<tr><td><strong>Адрес электронной почты</strong></td><td>pesnohorki@yandex.ru</td></tr>
<tr><td><strong>Форма обучения</strong></td><td>Очная</td></tr>
</table>

<h2>Адреса осуществления образовательной деятельности</h2>

<p><a href="https://песнохорки.рф/" target="_blank" rel="noreferrer">МБУ ДО «ЦЭВ «Песнохорки»</a> осуществляет образовательную деятельность по дополнительным общеобразовательным (общеразвивающим) программам по следующим адресам:</p>

<ul>
<li>656057, Алтайский край, г. Барнаул, ул. Энтузиастов, 5;</li>
<li>656039, Алтайский край, г. Барнаул, ул. 42 Краснознаменной бригады, 8;</li>
<li>656065, Алтайский край, г. Барнаул, ул. Энтузиастов, 26;</li>
<li>656057, Алтайский край, г. Барнаул, ул. Панфиловцев, 13;</li>
<li>656057, Алтайский край, г. Барнаул, ул. 50 лет СССР, 10;</li>
<li>656054, Алтайский край, г. Барнаул, ул. Антона Петрова, 218;</li>
<li>656057, Алтайский край, г. Барнаул, ул. 50 лет СССР, 53;</li>
<li>656066, Алтайский край, г. Барнаул, ул. Новгородская, 24;</li>
<li>656057, Алтайский край, г. Барнаул, ул. Георгиева, 46;</li>
<li>656065, Алтайский край, г. Барнаул, ул. Солнечная Поляна, 51;</li>
<li>656066, Алтайский край, г. Барнаул, ул. Павловский тракт, 100</li>
</ul>

<p><em>Места осуществления образовательной деятельности, сведения о которых в соответствии с Федеральным законом от 29.12.2012 N 273-ФЗ «Об образовании в Российской Федерации», не включаются в соответствующую запись в реестре лицензий на осуществление образовательной деятельности — отсутствуют.</em></p>
`;

async function seed() {
  await initDB();
  const existing = await dbGet("SELECT id FROM static_pages WHERE slug = ?", ["about-info"]);
  if (existing) {
    await dbRun("UPDATE static_pages SET content = ?, updated_at = datetime('now') WHERE id = ?", [content.trim(), existing.id]);
    console.log("Обновлено: about-info, id=" + existing.id);
  } else {
    const r = await dbRun("INSERT INTO static_pages (slug, title, content, section) VALUES (?, ?, ?, ?)", ["about-info", "Сведения об образовательной организации", content.trim(), null]);
    console.log("Создано: about-info, id=" + r.lastID);
  }
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
