import { initDB, dbRun } from "./db.js";

const pages = [
  {
    slug: "parents/safety",
    title: "Безопасность и ответственность",
    section: "parents",
    content: `<h1>Безопасность и ответственность</h1>
<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Analiz_deti_gorod_5_mesyatsev_2025_May__1_.doc" target="_blank" rel="noopener noreferrer">Анализ аварийности с участием детей на дорогах за 5 месяцев 2025 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/avgust_otvetstvennost_za_lozhnie_soobshcheniya.pdf" target="_blank" rel="noopener noreferrer">Ответственность за ложные звонки</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/besopasnost_simoi.pdf" target="_blank" rel="noopener noreferrer">Памятка безопасности в зимний период Прочитать</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/vnimanie_led.pdf" target="_blank" rel="noopener noreferrer">Внимание — лёд! Прочитать</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/sosulki.pdf" target="_blank" rel="noopener noreferrer">Осторожно сосульки! Прочитать</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Gorki.docx" target="_blank" rel="noopener noreferrer">Организация детского досуга на зимних горках</a></li>
</ul>`,
  },
  {
    slug: "parents/privacy",
    title: "Политика конфиденциальности",
    section: "parents",
    content: `<p>В соответствии с Постановлением Правительства РФ от 10.07.2013 N 582 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети «Интернет» и обновления информации об образовательной организации» образовательная организация размещает на официальном сайте:</p>
<p>а) информацию: о дате создания образовательной организации, об учредителе, учредителях образовательной организации, о месте нахождения образовательной организации и ее филиалов (при наличии), режиме, графике работы, контактных телефонах и об адресах электронной почты;</p>
<p>о структуре и об органах управления образовательной организации, в том числе о наименовании структурных подразделений (органов управления), их руководителях, местах нахождения, адресах официальных сайтов в сети «Интернет» (при наличии), адресах электронной почты;</p>
<p>о реализуемых образовательных программах с указанием учебных предметов, курсов, дисциплин (модулей), практики, предусмотренных соответствующей образовательной программой;</p>
<p>о численности обучающихся по реализуемым образовательным программам за счёт бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и по договорам об образовании за счёт средств физических и (или) юридических лиц;</p>
<p>о языках образования; о федеральных государственных образовательных стандартах и об образовательных стандартах с приложением их копий (при наличии);</p>
<p>о руководителе образовательной организации, его заместителях, руководителях филиалов образовательной организации (при наличии), в том числе фамилию, имя, отчество (при наличии), должность, контактные телефоны, адреса электронной почты;</p>
<p>о персональном составе педагогических работников с указанием уровня образования, квалификации и опыта работы, в том числе фамилию, имя, отчество (при наличии) работника, занимаемую должность (должности), преподаваемые учебные предметы, дисциплины, курсы, обеспечение повышения уровня профессионального образования;</p>
<p>о материально-техническом обеспечении образовательной деятельности, в том числе сведения о наличии оборудованных учебных кабинетов, объектов для проведения практических занятий, библиотек, объектов спорта, средств обучения и воспитания, об условиях питания и охраны здоровья обучающихся, о доступе к информационным системам и информационно-телекоммуникационным сетям, об электронных образовательных ресурсах;</p>
<p>о направлениях и результатах научной (научно-исследовательской) деятельности и научно-исследовательской базе для её осуществления (для образовательных организаций высшего образования и организаций дополнительного профессионального образования);</p>
<p>о результатах приёма по каждой профессии, специальности среднего профессионального образования (при наличии вступительных испытаний), каждому направлению подготовки или специальности высшего образования с различными условиями приёма (на места, финансируемые за счёт бюджетных ассигнований, по договорам об образовании за счёт средств физических и юридических лиц);</p>
<p>о количестве вакантных мест для приёма (перевода) по каждой образовательной программе, по каждой форме обучения, в том числе о количестве вакантных мест, финансируемых за счёт бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов, по договорам об образовании за счёт средств физических и (или) юридических лиц;</p>
<p>о наличии и условиях предоставления обучающимся стипендий, мер социальной поддержки; о наличии общежития, интерната, количестве жилых помещений в общежитии, интернате для иногородних обучающихся, формировании платы за проживание в общежитии;</p>
<p>об объёме образовательной деятельности, финансовое обеспечение которой осуществляется за счёт бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов, по договорам об образовании за счёт средств физических и (или) юридических лиц;</p>
<p>о поступлении финансовых и материальных средств и об их расходовании по итогам финансового года; о трудоустройстве выпускников;</p>
<p>б) копии: устава образовательной организации; лицензии на осуществление образовательной деятельности (с приложениями); свидетельства о государственной аккредитации (с приложениями); плана финансово-хозяйственной деятельности образовательной организации, утверждённого в установленном законодательством Российской Федерации порядке, или бюджетной сметы образовательной организации; локальных нормативных актов, предусмотренных частью 2 статьи 30 Федерального закона «Об образовании в Российской Федерации», правил внутреннего распорядка обучающихся, правил внутреннего трудового распорядка, коллективного договора;</p>
<p>в) отчёт о результатах самообследования;</p>
<p>г) документ о порядке оказания платных образовательных услуг, в том числе образец договора об оказании платных образовательных услуг, документ об утверждении стоимости обучения по каждой образовательной программе;</p>
<p>д) предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчёты об исполнении таких предписаний;</p>
<p>е) иную информацию, которая размещается, опубликовывается по решению образовательной организации и (или) размещение, опубликование которой являются обязательными в соответствии с законодательством Российской Федерации.</p>`,
  },
  {
    slug: "parents/social-cert",
    title: "Социальный сертификат дополнительного образования",
    section: "parents",
    content: `<p><strong>Социальный сертификат дополнительного образования</strong> — это официальный именной электронный документ (идентификационный номер в реестре), подтверждающий право ребенка на получение образовательных услуг в рамках системы персонифицированного финансирования за счет средств государственного или муниципального бюджета.</p>

<p><strong>Основные положения и правовое регулирование</strong></p>
<ul>
  <li>Правовая база: Реализация сертификатов осуществляется в соответствии с Федеральным законом № 189-ФЗ «О государственном (муниципальном) социальном заказе на оказание услуг в социальной сфере» и Федеральным законом № 273-ФЗ «Об образовании в Российской Федерации».</li>
  <li>Целевая аудитория: Дети в возрасте от 5 до 17 лет включительно.</li>
  <li>Номинал: Объем средств или учебных часов, закрепленных за сертификатом на календарный год. Сумма определяется индивидуально каждым муниципалитетом.</li>
</ul>

<p><strong>Порядок оформления и использования</strong></p>
<ol>
  <li>Получение: Осуществляется через портал «Госуслуги» или региональные информационные системы (Навигаторы дополнительного образования). Заявление подается единожды; ежегодное подтверждение права на сертификат не требуется.</li>
  <li>Активация: После подачи заявки документ необходимо активировать в уполномоченной организации или через личный кабинет (зависит от региональных правил).</li>
  <li>Выбор программ: Сертификатом можно оплатить занятия по программам, прошедшим независимую оценку качества и включенным в соответствующие реестры (технические, художественные, физкультурно-спортивные и др.).</li>
  <li>Ограничения:
    <ul>
      <li>Количество одновременно посещаемых кружков по «значимым» программам может быть ограничено (обычно до 3-х).</li>
      <li>Сертификат, как правило, не распространяется на предпрофессиональные программы в школах искусств и спортивных школах (ДШИ, ДХШ), реализуемые за счет бюджетных ассигнований.</li>
    </ul>
  </li>
</ol>

<p><strong>Преимущества для граждан</strong></p>
<ul>
  <li>Доступность: Возможность обучаться в частных организациях и у индивидуальных предпринимателей, имеющих соответствующую лицензию и включенных в систему социального заказа.</li>
  <li>Прозрачность: Контроль остатка средств и учет посещаемости через личный кабинет родителя.</li>
  <li>Целевое использование: Денежные средства не выдаются наличными, а перечисляются напрямую образовательной организации за фактически оказанные услуги.</li>
</ul>

<p><strong>Полезные ссылки:</strong></p>
<p><a href="https://altai22.pfdo.ru/app/munitipality-info/884" target="_blank" rel="noreferrer">Портал персонифицированного дополнительного образования Алтайского края</a></p>
<p><a href="https://www.gosuslugi.ru/help/faq/sections/102906" target="_blank" rel="noreferrer">Что такое сертификат дополнительного образования (госуслуги)</a></p>`,
  },
  {
    slug: "parents/paid-services",
    title: "Платные услуги",
    section: "parents",
    content: `<p>Платные образовательные услуги в МБУ ДО «ЦЭВ «Песнохорки» не оказываются.</p>`,
  },
  {
    slug: "parents/smart-holidays",
    title: "Умные каникулы",
    section: "parents",
    content: `<p><strong>Добро пожаловать на "Умные Каникулы"!</strong></p>

<p>УМНЫЕ КАНИКУЛЫ – это не просто профессионально организованный удаленный детский отдых вместе с МБУДО ЦЭВ «Песнохорки», но также занятия и масер-классы в игровой форме и увлекательная занятость детей в течение всего дня.</p>

<p>Сотрудники УМНЫХ КАНИКУЛ – это педагоги нашего центра, хорошо образованные и творческие кадры. Они работают и создают веселые уроки для ваших детей, чтобы они могли чувствовать себя на творческом подъеме в не простых для детей условиях самоизоляции.</p>

<p><strong>Умные каникулы</strong></p>

<ul>
  <li>Педагог дополнительного образования Терентьева А.Ю. <a href="https://disk.yandex.ru/i/DILkFqAZNyyLsw" target="_blank" rel="noreferrer">Пальчиковые игры</a></li>
  <li>Педагог дополнительного образования Косилова Н.В. <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/master_klass_umnie_kanikuli_mishka.docx" target="_blank" rel="noreferrer">Мастер-класс</a></li>
  <li>Педагог дополнительного образования Ясевич Н.И. <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Master-klass_po_lepke_Ovsyannikov_I_.pptx" target="_blank" rel="noreferrer">Мастер-класс по лепке</a></li>
  <li>Педагог дополнительного образования Мельникова Л.В. презентация и <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prazdniki_oseni__1_.pptx" target="_blank" rel="noreferrer">аудиоурок</a> по теме «Народный календарь. Осень»</li>
  <li>Педагог дополнительного образования Пятибратова Н.С. мастер-класс по декоративно-прикладному творчеству <a href="http://https://cloud.mail.ru/stock/fQFRsZxSh964S8jvTvbrpGgc" target="_blank" rel="noreferrer">«Цыпленок из помпона»</a></li>
  <li>Педагог дополнительного образования Заркова О.С. <a href="https://disk.yandex.ru/i/DILkFqAZNyyLsw" target="_blank" rel="noreferrer">Разминка перед хореографическим занятием</a></li>
  <li>Педагог дополнительного образования Горопах Е.С. <a href="https://disk.yandex.ru/i/DILkFqAZNyyLsw" target="_blank" rel="noreferrer">Видеоурок</a></li>
</ul>`,
  },
  {
    slug: "parents/anti-corruption",
    title: "Противодействие коррупции",
    section: "parents",
    content: `<p>Федеральный закон от 25.12.2008 №273-ФЗ «О противодействии коррупции». Закон Алтайского края от 03.06.2010 № 46-ЗС «О противодействии коррупции в Алтайском крае» <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Protiv__korr__v_OO.ppt" target="_blank" rel="noopener noreferrer">Скачать для подробного просмотра</a></p>

<p><a href="http://www.educaltai.ru/about_main/anti_corruption/methodical_materials/index.php" target="_blank" rel="noopener noreferrer">Просмотреть на сайте Министерства Образования и Науки</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/prikaz(1).pdf" target="_blank" rel="noopener noreferrer">Приказ о утверждении и вводе в действие нормативно-правовых актов</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/antikorruptsionnaya_politika(1).pdf" target="_blank" rel="noopener noreferrer">Антикоррупционная политика МБУ ДО «ЦЭВ «Песнохорки»</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_konflikte_interesov.pdf" target="_blank" rel="noopener noreferrer">Положение о конфликте интересов в МБУ ДО «ЦЭВ «Песнохорки»</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_poryadke_uvedomleniya(1).pdf" target="_blank" rel="noopener noreferrer">Положение о порядке уведомления руководителя о фактах обращения в целях склонения к совершению коррупционных правонарушений</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/kodeks_etiki.pdf" target="_blank" rel="noopener noreferrer">Кодекс этики и служебного поведения работников МБУ ДО «ЦЭВ «Песнохорки»</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/plan_meropriyatiy_po_protivodkystviyu_korruptsii.pdf" target="_blank" rel="noopener noreferrer">План мероприятий по противодействию коррупции МБУ ДО «ЦЭВ «Песнохорки» на 2023-2024 учебный год</a></p>`,
  },
  {
    slug: "parents/quality-assessment",
    title: "Независимая оценка качества работы образовательных организаций",
    section: "parents",
    content: `<p>Видеоролик о проведении независимой оценки качества условий осуществления образовательной деятельности образовательными организациями.</p>

<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/tsentr_pesnohorki.pdf" target="_blank" rel="noreferrer">План мероприятий по улучшению качества работы образовательной организации, по результатам независимой оценки качества деятельности. Открыть для просмотра</a></p>

<p>Независимая оценка качества предоставления образовательных услуг образовательными организациями <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/nok_OD_2017_reiting_barnaul.xls" target="_blank" rel="noreferrer">(скачать EXCEL)</a></p>

<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/svodnye_dannye_NOK_barnaul.xls" target="_blank" rel="noreferrer">Информация о деятельности общеобразовательных организаций</a></p>`,
  },
  {
    slug: "parents/anti-extremism",
    title: "Профилактика экстремизма и терроризма",
    section: "parents",
    content: `<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02485020240212090617.pdf" target="_blank" rel="noreferrer"><u>Порядок работы со служебной информацией ограниченного распространения в МБУ ДО «ЦЭВ «Песнохорки»</u></a></p>

<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02485120240212090652(1).pdf" target="_blank" rel="noreferrer"><u>Инструкция о порядке обращения со служебной информацией ограниченного распространения в МБУ ДО «ЦЭВ «Песнохорки»</u></a></p>

<p>&nbsp;</p>

<p>С целью профилактики экстремизма несовершеннолетних, предлагаем вниманию педагогов и родителей видеофильм «Чёрное пятно», разработанный <a href="http://potencial22.ru/" target="_blank" rel="noreferrer">МБУ ДО ГППЦ «Потенциал»</a> совместно с комитетом по образованию города Барнаула в рамках реализации программы «Комплексные меры по профилактике зависимых состояний и противодействию незаконному обороту наркотиков в городе Барнауле на 2015-2020 годы».</p>

<p>Возрастная классификация данного видеофильма 18+, поэтому для просмотра необходима регистрация на видеохостинге YouTube для подтверждения своего возраста. (из письма <a href="http://potencial22.ru/" target="_blank" rel="noreferrer">МБУ ДО ГППЦ «Потенциал»</a> (орфография и пунктуация авторская))</p>`,
  },
  {
    slug: "parents/temperature",
    title: "Температурный режим",
    section: "parents",
    content: `<p><strong>Температура помещений МБУ ДО ЦЭВ «Песнохорки» по ул. Энтузиастов, 5</strong></p>
<table>
  <thead>
    <tr><th>Температура</th><th>Классные комнаты</th><th>Коридоры</th><th>Рекреации</th><th>Кабинет</th><th>Другие помещения</th></tr>
  </thead>
  <tbody>
    <tr><td>СанПин 2.4.3648-20</td><td>21-23</td><td>20-23</td><td>19-23</td><td>18-23</td><td>19-23</td></tr>
    <tr><td>06.03.2026 г.</td><td>23</td><td>22</td><td>22</td><td>23</td><td>22</td></tr>
  </tbody>
</table>

<p><strong>Температура помещений МБУ ДО ЦЭВ «Песнохорки» по ул. Павловский тракт, 134</strong></p>
<table>
  <thead>
    <tr><th>Температура</th><th>Классные комнаты</th><th>Коридоры</th><th>Рекреации</th><th>Кабинет</th><th>Другие помещения</th></tr>
  </thead>
  <tbody>
    <tr><td>СанПин 2.4.3648-20</td><td>21-23</td><td>19-23</td><td>19-23</td><td>18-23</td><td>19-23</td></tr>
    <tr><td>06.03.2026 г.</td><td>23</td><td>22</td><td>22</td><td>23</td><td>22</td></tr>
  </tbody>
</table>`,
  },
  {
    slug: "about-info/documents",
    title: "Документы",
    section: "about-info",
    content: `<h2>ДОКУМЕНТЫ ФЕДЕРАЛЬНОГО УРОВНЯ</h2>
<p><a href="https://docs.cntd.ru/document/902389617" target="_blank" rel="noopener noreferrer">Федеральный закон от 29.12.2012 N 273-ФЗ "Об образовании в Российской Федерации"</a></p>
<p><a href="http://www.kremlin.ru/acts/bank/46284" target="_blank" rel="noopener noreferrer">Федеральный закон Российской Федерации от 30.12.2020 N 519-ФЗ г. Москва "О внесении изменений в Федеральный закон "О персональных данных"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Deklaratsiya_prav_rebenka.docx" target="_blank" rel="noopener noreferrer">Декларация прав ребенка</a></p>
<p><a href="https://docs.cntd.ru/document/726524671" target="_blank" rel="noopener noreferrer">ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ ПОСТАНОВЛЕНИЕ ОТ 20 ОКТЯБРЯ 2021 ГОДА N 1802 ОБ УТВЕРЖДЕНИИ ПРАВИЛ РАЗМЕЩЕНИЯ НА ОФИЦИАЛЬНОМ САЙТЕ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ В ИНФОРМАЦИОННО-ТЕЛЕКОММУНИКАЦИОННОЙ СЕТИ "ИНТЕРНЕТ" И ОБНОВЛЕНИЯ ИНФОРМАЦИИ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ</a></p>
<p><a href="http://publication.pravo.gov.ru/Document/View/0001202209270013" target="_blank" rel="noopener noreferrer">Приказ Министерства просвещения Российской Федерации от 27.07.2022 № 629 "Об утверждении Порядка организации и осуществления образовательной деятельности по дополнительным общеобразовательным программам"</a></p>
<p><a href="http://publication.pravo.gov.ru/document/0001202505160008" target="_blank" rel="noopener noreferrer">Приказ Министерства просвещения Российской Федерации от 31.03.2025 № 253 "Об утверждении Порядка обеспечения условий доступности для инвалидов объектов и предоставляемых услуг в сфере общего, среднего профессионального образования..." (Зарегистрирован 15.05.2025 № 82197)</a></p>
<p><a href="https://docs.cntd.ru/document/566289534" target="_blank" rel="noopener noreferrer">Приказ Министерства Просвещения Российской Федерации от 16.09.2020 №500 «Об утверждении примерной формы договора об образовании на обучение по дополнительным образовательным программам»</a></p>
<p><a href="https://docs.cntd.ru/document/1302664691" target="_blank" rel="noopener noreferrer">Приказ Федеральной службы по надзору в сфере образования и науки от 04.08.2023 №1493 «Об утверждении требований к структуре официального сайта образовательной организации»</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/9__Postanovlenie_28.pdf" target="_blank" rel="noopener noreferrer">Постановление Главного государственного санитарного врача РФ от 28.09.2020 №28 «Об утверждении санитарных правил 2.4.3648-20 «Санитарно-эпидемиологические требования к организациям воспитания и обучения, отдыха и оздоровления детей и молодежи»</a></p>
<p><a href="https://docs.cntd.ru/document/542623974" target="_blank" rel="noopener noreferrer">Приказ Министерства труда и социальной защиты населения Российской Федерации от 05.05.2018 №298н «Об утверждении профессионального стандарта «Педагог дополнительного образования детей и взрослых»</a></p>

<h2>НОРМАТИВНЫЕ ПРАВОВЫЕ АКТЫ, СВЯЗАННЫЕ С РАБОТОЙ УЧРЕЖДЕНИЯ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_Komiteta_po_obrazovaniyu_goroda_Barnaula_ot_14_08_2023.rtf" target="_blank" rel="noopener noreferrer">Приказ Комитета по образованию города Барнаула от 14.08.2023 N 1239-осн "Об утверждении Порядка предоставления путевок в организации отдыха детей и их оздоровления, входящие в состав МАУ "ЦОО "Каникулы", в период летних каникул</a></p>

<h2>УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/UchDokum_a16f778f4fc14aa88a2cfd242e172293.pdf" target="_blank" rel="noopener noreferrer">Устав</a></p>

<h2>ЛОКАЛЬНЫЕ НОРМАТИВНЫЕ АКТЫ ПО ВОПРОСАМ ОРГАНИЗАЦИИ И ОСУЩЕСТВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/kollektivniy_dogovor_2024_-_2027_pdf1.pdf" target="_blank" rel="noopener noreferrer">Коллективный договор</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_pravilah_dostupa_IKS.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о правилах доступа педагогических работников к информационно-коммуникационным сетям и базам данных...</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_rabochey_programme.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о рабочей программе МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_sayte.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о сайте МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Instruktsiya_po_organizatsii_ohrani_zhizni_i_zdorovya.pdf" target="_blank" rel="noopener noreferrer">ИНСТРУКЦИЯ по организации охраны жизни и здоровья обучающихся для педагогов</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_kol_ve_obuch_.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о количестве обучающихся в объединениях, их возрастных категориях МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_rezh_zanyatiy.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о режиме занятий обучающихся МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_normah_professionalnoy_etiki.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о нормах профессиональной этики педагогических работников МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_vidachi_spravki_ob_obuchenii.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о порядке выдачи справки об обучении или периоде обучения</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_poseshcheniya_meropriyatiy.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о порядке посещения обучающимися мероприятий, не предусмотренных учебным планом МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Porlozhenie_ob_obraPD.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ об обработке и защите персональных данных работников МБУ ДО "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Ob_organizatsii_obrazovatelnogo_protsessa_udalenka.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ об организации образовательного процесса с использованием электронного обучения и дистанционных образовательных технологий МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_provedenie_promezhutochnoy_attestatsii.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ о проведении промежуточной аттестации обучающихся МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Poryadok_obucheniya_po_individualnomu_planu.pdf" target="_blank" rel="noopener noreferrer">Порядок обучения по индивидуальному плану, в том числе по ускоренному обучению, в пределах осваиваемой дополнительной образовательной программы</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/PVR_dlya_uch-sya.pdf" target="_blank" rel="noopener noreferrer">Правила внутреннего распорядка для обучающихся МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/persdannie.pdf" target="_blank" rel="noopener noreferrer">Политика информационной безопасности МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pravila_VTR.docx" target="_blank" rel="noopener noreferrer">Правила внутреннего трудового распорядка работников МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_prekrashcheniya_otnosheniy.pdf" target="_blank" rel="noopener noreferrer">Положение о порядке оформления, возникновения, приостановления и прекращения отношений между МБУ ДО "ЦЭВ "Песнохорки", обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie(1).pdf" target="_blank" rel="noopener noreferrer">Положение о правилах приема, порядке и основаниях перевода, отчисления и восстановления обучающихся МБУ ДО "ЦЭВ "Песнохорки"</a></p>

<h2>ГОСУДАРСТВЕННЫЙ КОНТРОЛЬ И НАДЗОР В СФЕРЕ ОБРАЗОВАНИЯ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/reshenie_pesnohorki(1).pdf" target="_blank" rel="noopener noreferrer">Решение о проведении плановой выездной проверки</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc01696120220221023409.pdf" target="_blank" rel="noopener noreferrer">Заключение эксперта</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc01696520220221024647.pdf" target="_blank" rel="noopener noreferrer">Предписание об устранении выявленных нарушений санитарно-эпидемиологических требований</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/OTCHET_ob_ispolnenii_predpisaniya.pdf" target="_blank" rel="noopener noreferrer">Отчет об исполнении предписания об устранении выявленных нарушений санитарно-эпидемиологических требований</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Uchreditelniy_kontrol_sentyabr_2023.pdf" target="_blank" rel="noopener noreferrer">Приказ о проведении ведомственного контроля за соблюдением трудового законодательства и иных нормативных правовых актов, содержащих нормы трудового права</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pesnohorki_spravka.pdf" target="_blank" rel="noopener noreferrer">Акт о результатах проверки состояния ведения кадрового делопроизводства</a></p>

<h2>ОТЧЕТЫ О САМООБСЛЕДОВАНИИ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_samoobsledovanii.pdf" target="_blank" rel="noopener noreferrer">Положение о самообследовании МБУ ДО "ЦЭВ "Песнохорки"</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/samoobsledovanie_2021.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2021 год</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/SAMOOBSLEDOVANIE(1).pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2022 год</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/2023_SAMOOBSLEDOVANIE.pdf.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2023 год</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/SAMOOBSLEDOVANIE_2024.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах самообследования МБУ ДО "Песнохорки" за 2024 год</a></p>

<h2>ОТЧЕТЫ О РЕЗУЛЬТАТАХ ДЕЯТЕЛЬНОСТИ</h2>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyatelnosti_2023.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах деятельности МБУ ДО "ЦЭВ "Песнохорки" и об использовании закрепленного за ним имущества на 01.01.2024</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyat__za_2022.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах деятельности МБУ ДО "ЦЭВ "Песнохорки" и об использовании закрепленного за ним муниципального имущества на 01.01.2023</a></p>`,
  },
  {
    slug: "about-info/education",
    title: "Образование",
    section: "about-info",
    content: `<h2>ЧИСЛЕННОСТЬ ОБУЧАЮЩИХСЯ ПО РЕАЛИЗУЕМЫМ ОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ</h2>

<p>на 27 августа 2025 года в МБУ ДО «ЦЭВ «Песнохорки» обучаются:</p>
<p>1) Муниципальное задание — 1561 ребенок;</p>
<p>2) Социальный заказ — 30 детей;</p>
<p>3) <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Inostrannie_grazhdane.pdf" target="_blank" rel="noreferrer">Сведения об обучающихся, являющихся иностранными гражданами</a></p>
<p>4) <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Inostrannie_grazhdane(1).pdf" target="_blank" rel="noreferrer">Язык обучения: русский.</a></p>

<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/OSNOVNAYa_PROGRAMMA_2025-2026_docx2.pdf" target="_blank" rel="noreferrer">Основная образовательная программа МБУ ДО "ЦЭВ "Песнохорки" на 2025-2026 учебный год</a></li>
</ul>

<p>Дополнительные общеобразовательные (общеразвивающие) программы, реализуемые за счет муниципального задания</p>

<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Yasevich_-_Samotsveti_bazoviy_ur.docx" target="_blank" rel="noreferrer">"Самоцветы" Базовый уровень</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Yasevich_-_Samotsveti_prodvinutiy_ur.docx" target="_blank" rel="noreferrer">"Самоцветы" Продвинутый уровень</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Shtrebel_-_Uspeh.docx" target="_blank" rel="noreferrer">"Успех"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Shleyher_-_Teatralniy_praktikum.docx" target="_blank" rel="noreferrer">"Театральный практикум"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-Traditsii_Sibiri.docx" target="_blank" rel="noreferrer">"Традиции Сибири"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_programma_Obichay_obryad_Traditsiya_detskiy_sad.docx" target="_blank" rel="noreferrer">"Обычай.Обряд.Традиция"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_programma_Narodniy_vokal.docx" target="_blank" rel="noreferrer">"Народный вокал"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_Programma__Narodnoe_tvorchestvo.docx" target="_blank" rel="noreferrer">"Народное творчество"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_Igrovoy_folklor.docx" target="_blank" rel="noreferrer">"Игровой фольклор"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Skorobogatora_-_Razvitie_golosa.docx" target="_blank" rel="noreferrer">"Развитие голоса"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Skorobogatova_-_Solist_2025-2026.docx" target="_blank" rel="noreferrer">"Солист"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pyatibratova_-_2025DOOP__Volshebniy_mir_bisera_2goda_288ch.docx" target="_blank" rel="noreferrer">"Волшебный бисер" 2 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pyatibratova_-_2025_Volshebniy_biser_4goda.docx" target="_blank" rel="noreferrer">"Волшебный бисер" 4 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Nagovitsina_-_Raduga_remesel_novaya_.doc" target="_blank" rel="noreferrer">"Радуга ремесел"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Miller_-_Vyazanaya_igrushka_Amigurumi.docx" target="_blank" rel="noreferrer">"Вязанная игрушка Амигуруми"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Miller_-_Vesyolaya_businka.docx" target="_blank" rel="noreferrer">"Веселая бусинка"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kutsenko_-_programma_SOZVUCHIE_2_goda_2025__2026_uluch.docx" target="_blank" rel="noreferrer">"Созвучие" 2 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kutsenko_-_programma_GITARA_2_goda_prodvinutaya_2025__2026_uluch.docx" target="_blank" rel="noreferrer">"Гитара" 2 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_chudesa_iz_shersti_na_2025_-26_god.docx" target="_blank" rel="noreferrer">"Чудеса из шерсти"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_magiya_tvorchestva_na_2025-26_god.docx" target="_blank" rel="noreferrer">"Магия творчества"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_azbuka_shitya_na_2025-26_uchebniy_god.docx" target="_blank" rel="noreferrer">"Азбука шитья"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Klyushina_-_Podsolnuhi_7_let.docx" target="_blank" rel="noreferrer">"Подсолнухи"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Skorochtenie.docx" target="_blank" rel="noreferrer">"Скорочтение"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Programma_Perspektiva_2_goda.docx" target="_blank" rel="noreferrer">"Перспектива" 2 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Perspektiva_plyus_4_goda.docx" target="_blank" rel="noreferrer">"Перспектива" 4 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kaplunova_-_RoboTerra.docx" target="_blank" rel="noreferrer">"РобоТерра"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Goropah_-_Programma_teatralnoy_studii__MASKA__1_.doc" target="_blank" rel="noreferrer">Театральная студия "Маска"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Goropah_-_Programma_po_plastilinografii_TEREMOK.docx" target="_blank" rel="noreferrer">"Волшебная пластилинография"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_Lovi_moment_programma.docx" target="_blank" rel="noreferrer">"Лови момент"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_V_momente_programma.docx" target="_blank" rel="noreferrer">"В моменте"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina__-_Art_Planeta_programma.docx" target="_blank" rel="noreferrer">"АртПланета"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vologodskaya_-Tantsevalnoe_detstvo.doc" target="_blank" rel="noreferrer">"Танцевальное детство"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Buyankina_-_Yuniy_modeler__216_.docx" target="_blank" rel="noreferrer">"Юный модельер"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Buyankina_-_Moya_igrushka_uluch_144.docx" target="_blank" rel="noreferrer">"Мастерская мягкой игрушки"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Burdina_-_Step-aerobika_programma.docx" target="_blank" rel="noreferrer">"Степ-аэробика"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Burdina_-__Pervie_shagi.docx" target="_blank" rel="noreferrer">"Первые шаги"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kaplunova_-_RobotoTehno.docx" target="_blank" rel="noreferrer">РобоТехно</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Rachinskaya_-_muz_teatr_Raduga_8-14.docx" target="_blank" rel="noreferrer">Музыкальный театр "Радуга"</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Makarenko_-_Narodnaya.docx" target="_blank" rel="noreferrer">"Народная"</a></li>
</ul>

<h2>Социальный заказ:</h2>
<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_Evrika.docx" target="_blank" rel="noreferrer">Эврика</a></li>
</ul>

<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_no__112_-_osn_ot_27_08_2025_Ob_utverzhdenii_i_vvode_v_deystvie_programm_na_2025-2026_uchebniy_god__3_.docx" target="_blank" rel="noreferrer">Приказ об утверждении и вводе в действие локальных нормативных актов от 27 августа 2025 № 112-осн</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03008920250908032010.pdf" target="_blank" rel="noreferrer">Годовой календарный учебный график МБУ ДО ЦЭВ "Песнохорки" на 2025-2026 учебный год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03008720250908031846.pdf" target="_blank" rel="noreferrer">План внутриучрежденческого контроля МБУ ДО "ЦЭВ "Песнохорки" на 2025-2026 учебный год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03009020250908032102.pdf" target="_blank" rel="noreferrer">План работы педагогических советов на 2025-2026 учебный год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Programma_razvitiya_2026_-_2030_.pdf" target="_blank" rel="noreferrer">Программа развития на 2026-2030 г</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/raspisanie.docx" target="_blank" rel="noreferrer">Расписание на 2025/2026 учебный год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/perechen_programm_docx1.pdf" target="_blank" rel="noreferrer">Перечень дополнительных общеобразовательных (общеразвивающих) программ МБУ ДО "ЦЭВ "Песнохорки" на 2025-2026 учебный год</a></li>
</ul>

<h2>ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ</h2>
<p>В соответствии с Федеральным Законом от 29.12.2012 №273-ФЗ «Об образовании в Российской Федерации» — образовательные стандарты для дополнительных общеобразовательных (общеразвивающих) программ отсутствуют.</p>`,
  },
  {
    slug: "about-info/structure",
    title: "Структура и органы управления образовательной организацией",
    section: "about-info",
    content: `<p>Муниципальное бюджетное учреждение дополнительного образования «Центр эстетического воспитания «Песнохорки» (МБУ ДО «ЦЭВ «Песнохорки»)</p>
<p>Директор учреждения: Камалова Ольга Николаевна</p>
<p>Адрес фактический и юридический:<br>656057, Алтайский край, г. Барнаул, Павловский тракт, 134</p>
<p>Контактные телефоны: (3852) 569-463, (3852) 569-462</p>
<p>Адрес электронной почты: <a href="mailto:pesnohorki@yandex.ru" target="_blank" rel="noreferrer">pesnohorki@yandex.ru</a></p>
<p>Адрес сайта: <a href="https://песнохорки.рф" target="_blank" rel="noreferrer">https://песнохорки.рф</a></p>
<p>Структурных подразделений у организации нет</p>

<p>Органами управления образовательной организации являются:</p>

<ul>
  <li>
    <p>Собрание трудового коллектива — коллегиальный орган самоуправления учреждения, представляющий интересы работников. В состав собрания трудового коллектива входят все работники МБУ ДО «ЦЭВ «Песнохорки».</p>
    <p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_ob_obshche_sobranii_rabotnikov(1).pdf" target="_blank" rel="noreferrer">ПОЛОЖЕНИЕ об общем собрании работников МБУ ДО "ЦЭВ "Песнохорки"</a></p>
  </li>
  <li>
    <p>Педагогический совет учреждения — коллегиальный орган для решения вопросов образовательной деятельности. В состав педагогического совета учреждения входят все педагоги МБУ ДО «ЦЭВ «Песнохорки».</p>
    <p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02277720251201030824_pdf23.pdf" target="_blank" rel="noreferrer">Положение о Педагогическом совете МБУ ДО «ЦЭВ «Песнохорки»</a></p>
  </li>
  <li>
    <p>Управляющий совет — осуществляет общее руководство учреждением. В состав управляющего совета входят Директор учреждения, 4 работника учреждения, 3 родителя (законных представителя), 1 представитель учредителя (назначается учредителем)</p>
    <p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Upravlyayushchiy_sovet.pdf" target="_blank" rel="noreferrer">ПОЛОЖЕНИЕ об органе государственно-общественного управления (Управляющий Совет Учреждения)</a></p>
  </li>
  <li>
    <p>Общее собрание родителей Учреждения является коллегиальным органом управления, ставит своей целью учет мнения родителей (законных представителей) обучающихся по вопросам управления учреждением и принятия локальных нормативно-правовых актов, затрагивающих их права и законные интересы.</p>
    <p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02274620251126074432.pdf" target="_blank" rel="noreferrer">Положение об общем собрании родителей МБУ ДО "ЦЭВ "Песнохорки"</a></p>
  </li>
</ul>`,
  },
  {
    slug: "about-info/facilities",
    title: "Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
    section: "about-info",
    content: `<p>Для обеспечения образовательного процесса учреждение дополнительного образования детей располагает следующей материально-технической базой:</p>

<h3>В оперативном управлении Центра находятся два помещения:</h3>
<ul>
  <li>Административный корпус находится по адресу: Павловский тракт, 134;</li>
  <li>Учебные классы по адресу: Энтузиастов, 5.</li>
</ul>

<p>Помещения соответствуют санитарно-гигиеническим требованиям и правилам пожарной безопасности.</p>

<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/pravka_mat_obespesenie.pdf" target="_blank" rel="noopener noreferrer">Справка о материально — техническом обеспечении образовательной деятельности по образовательным программам</a></p>

<h3>В административном корпусе по адресу: Павловский тракт, 134 располагается:</h3>
<ul>
  <li>помещение, выполняющее функцию этнографического музея, оборудованное в соответствии с требованиями САНПИН;</li>
  <li>администрация;</li>
  <li>методический кабинет;</li>
  <li>гардероб.</li>
</ul>

<h3>В здании по адресу: ул.Энтузиастов, 5 располагается:</h3>
<ul>
  <li>концертный зал, оборудованный сценой;</li>
  <li>2 помещения для хранения материальных запасов центра;</li>
  <li>учебные кабинеты, оборудованные необходимыми инструментарием;</li>
  <li>гардероб.</li>
</ul>

<h3>Доступная среда</h3>

<p>1. Наличие оборудованных учебных кабинетов, объектов для проведения практических занятий, библиотек, объектов спорта, средств обучения и воспитания, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья.<br><br>Услуги связи, коммунальные, а именно: электро-, водоснабжение, водоотведение, теплоснабжение от централизованных сетей.<br><br>В Учреждении нет библиотеки.<br><br>В Учреждении не имеются объекты спорта.</p>

<p>2. Средства обучения и воспитания в учреждении, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья<br><br>Средства обучения и воспитания – это объекты, используемые в образовательном процессе в качестве носителей учебной информации и инструмента деятельности педагога и обучающихся для достижения поставленных целей обучения, воспитания и развития.<br><br>Имеются мультимедийные средства, оргтехника, компьютерная техника, аудиотехника (акустические усилители и колонки), видеотехника (мультимедийные проекторы, телевизор).</p>

<p>3. Обеспечение беспрепятственного доступа в здание образовательной организации инвалидов и лиц с ограниченными возможностями здоровья.<br><br>Центральный вход в здание Учреждения имеет специальный пандус.<br><br>При необходимости лицу с ограниченными возможностями здоровья для обеспечения доступа в здание образовательной организации будет предоставлено сопровождающее лицо.</p>

<p>4. Условия питания обучающихся, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья.<br><br>В Учреждении предусмотрено обеспечение учащихся питьевой водой, отвечающей гигиеническим требованиям, предъявляемым к качеству воды.<br><br>Обеспечен свободный доступ учащихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья, к питьевой воде в течение всего времени их пребывания в Учреждении.<br><br>Питание учащихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья, в Учреждении не предусмотрено, так как время нахождения обучающихся в Учреждении не превышает трех академических часов в день.</p>

<p>5. Условия охраны здоровья обучающихся, в том числе приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья.<br><br>В целях безопасного и комфортного пребывания учащихся и сотрудников, качественного и эффективного осуществления образовательной деятельности в Учреждении созданы условия, гарантирующие охрану и укрепление здоровья учащихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья, охрану труда сотрудников, безопасность всех участников образовательной деятельности.<br><br>Оказание медицинских услуг учащимся включает в себя оказание первичной медико-санитарной помощи учащимся<br><br>Безопасность Учреждения реализуется посредством сторожа-вахтеры, отделение полиции по индустриальному району МО МВД России, дежурный 02, (3852) 42-02-02; ПЦО №2 ОВО по городу Барнаулу филиал ФГКУ «УВОВНГ» Российской Федерации по Алтайскому краю тел 42-57-74<br><br>Учреждение обеспечено кнопками тревожной сигнализации с выходом на пульт централизованной охраны.<br><br>Территория Учреждения имеет ограждение. В Учреждении действует пропускной режим. Сведения о посторонних лицах, посещающих здание Учреждения, вносятся в журнал учета посещения Учреждения.<br><br>Учреждение оснащено: современным противопожарным оборудованием, организовано его техническое и эксплуатационное обслуживание, имеются средства защиты и пожаротушения. Здание оснащено противопожарной звуковой сигнализацией, необходимыми табличками и указателями с обеспечением визуальной и звуковой информацией для сигнализации об опасности.<br><br>Состояние и содержание здания, оборудования соответствуют требованиям санитарных правил, требованиям пожарной безопасности, требованиям безопасности дорожного движения.<br><br>Учебные кабинеты оснащены естественной и искусственной освещенностью, воздушно-тепловым режимом, необходимым оборудованием и инвентарем в соответствии с требованиями санитарно – гигиенических правил для освоения дополнительных общеобразовательных (общеразвивающих) программ.<br><br>Учреждение обеспечивает организацию и проведение профилактических мер по предупреждению правонарушений несовершеннолетних, детского дорожно-транспортного травматизма, здорового образа жизни.</p>

<p>6. Доступ к информационным системам, в том числе приспособленным для использования инвалидами и лицами с ограниченными возможностями здоровья.<br><br>Доступ в интернет-сеть в Учреждении для педагогов и учащихся обеспечивается с двух персонального компьютера (всего 2 компьютерных места), что позволяет иметь свободу в выборе объекта для работы, изучения и применения современных технологий, доступ к информации о любом материале.</p>

<p>7. Доступ к электронным образовательным ресурсам инвалидов и лиц с ограниченными возможностями здоровья.<br><br>Условия доступа к электронным образовательным ресурсам для инвалидов и лиц с ОВЗ предоставлены на официальном сайте МБУ ДО «ЦЭВ «Песнохорки», на котором существует версия для слабовидящих.</p>

<p>8. Наличие специальных технических средств обучения коллективного и индивидуального пользования для инвалидов и лиц с ОВЗ отсутствуют.<br><br>Специальные технические средства обучения коллективного и индивидуального пользования для инвалидов и лиц с ОВЗ отсутствуют.</p>

<p>9. Наличие условий для беспрепятственного доступа в общежитие, интернат и количестве жилых помещений в общежитии, интернате, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья.<br><br>Общежитие, интернат (в том числе для иногородних) количество жилых помещений: отсутствует.<br><br>Количество жилых помещений в общежитии, интернате: отсутствует.</p>

<p>10. Места осуществления образовательной деятельности (адрес, контакты, проезд)<br><br>Адрес юридический и фактический: 656065, г. Барнаул, ул.Энтузиастов, 5 (ост. Барнаульский зоопарк — автобус: 10, 80, маршрутное такси: 27, 51, 58, 121, 144;)</p>

<h3>Наличие собственных электронных образовательных и информационных ресурсов:</h3>
<ul>
  <li>Официальная страница <a href="https://vk.com/public211801272" target="_blank" rel="noopener noreferrer">МБУ ДО «ЦЭВ «Песнохорки» ВКонтакте</a>, <a href="https://ok.ru/group/70000001725741" target="_blank" rel="noopener noreferrer">Одноклассники</a></li>
  <li>Информационные системы и информационно-телекоммуникационные сети Учреждения не приспособлены для использования инвалидами и лицами с ограниченными возможностями здоровья.</li>
  <li>Особые условия доступа к информационным системам и информационно-коммуникационным сетям для инвалидов и лиц с ОВЗ могут быть предоставлены при работе с официальным сайтом МБУ ДО «ЦЭВ «Песнохорки», на котором существует версия для слабовидящих.</li>
</ul>`,
  },
  {
    slug: "about-info/paid-education",
    title: "Платные образовательные услуги",
    section: "about-info",
    content: `<p>Платные образовательные услуги в МБУ ДО «ЦЭВ «Песнохорки» не оказываются</p>`,
  },
  {
    slug: "about-info/finances",
    title: "Финансово-хозяйственная деятельность",
    section: "about-info",
    content: `<p>МБУ ДО "ЦЭВ "Песнохорки" ведёт финансово-хозяйственную деятельность в соответствие с требованиями, утвержденными приказом Министерства финансов РФ от 28 июля 2010 г. № 81-н (в ред. Приказа Минфина России от 2 октября 2012 г. № 132н)</p>

<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/090119011.pdf" target="_blank" rel="noopener noreferrer">ПОЛОЖЕНИЕ ОБ УЧЕТНОЙ ПОЛИТИКЕ УЧРЕЖДЕНИЯ</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_uchetn_politiki___1_.pdf" target="_blank" rel="noopener noreferrer">ПРИКАЗ ОБ УТВЕРЖДЕНИИ УЧЕТНОЙ ПОЛИТИКИ ДЛЯ ЦЕЛЕЙ БУХГАЛТЕРСКОГО УЧЕТА</a></p>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/rekvizitiNovie__1_.docx" target="_blank" rel="noopener noreferrer">РЕКВИЗИТЫ</a></p>

<p>Муниципальное бюджетное учреждение дополнительного образования «Центр эстетического воспитания<br>«Песнохорки»<br>(МБУ ДО «ЦЭВ «Песнохорки»)<br>Адрес: 656057, Барнаул, ул. Павловский тракт, 134, тел. 56-94-63<br>ИНН 2222025779/КПП 222201001, ОГРН 1022201140048, ОКТМО 01701000, ОКПО 49689970<br>КБК 00000000000000000150<br>Наименование получателя:<br>ГОРФИНКОМИТЕТ (МБУ ДО «ЦЭВ «Песнохорки» л/с 20176U45980)<br>ОКЦ № 2 Сибирского ГУ Банка России<br>БИК 040173001, к/с № 40102810045370000009, р/с № 03234643017010001700<br>Назначение платежа: добровольные пожертвования.</p>

<h3>Государственное (муниципальное) задание:</h3>
<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/MZ_na_2025_god.pdf" target="_blank" rel="noopener noreferrer">Муниципальное задание</a></p>

<h3>Планирование финансово-хозяйственной деятельности:</h3>
<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_na_2023_g_.pdf" target="_blank" rel="noopener noreferrer">План финансово-хозяйственной деятельности на 2023 год и плановый период 2024 и 2025 годов</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan__FHD_na_2024_g_.pdf" target="_blank" rel="noopener noreferrer">План финансово-хозяйственной деятельности на 2024 год и плановый период 2025 и 2026 годов</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_16_12_2025.pdf" target="_blank" rel="noopener noreferrer">План финансово-хозяйственной деятельности на 2025 год и плановый период 2026 и 2027 годов</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/FHD_30_12_2025.pdf" target="_blank" rel="noopener noreferrer">План финансово-хозяйственной деятельности на 2025 и плановый период 2026 и 2027 годов на 30.12.2025</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_2026_god.pdf" target="_blank" rel="noopener noreferrer">План финансово-хозяйственной деятельности на 2026 год и плановый период 2027 и 2028 годов</a></li>
</ul>

<h3>Информация о поступлении и расходовании финансовых средств:</h3>
<ul>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_po_vnebyudzhetu_2024__1_.pdf" target="_blank" rel="noopener noreferrer">Отчет о расходовании внебюджетных средств МБУ ДО "ЦЭВ "Песнохорки" за 2024 год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02461520240125043258.pdf" target="_blank" rel="noopener noreferrer">Отчет о расходовании внебюджетных средств МБУ ДО "ЦЭВ "Песнохорки" за 2023 год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rashodah_vnebyudzhet.pdf" target="_blank" rel="noopener noreferrer">Отчет о расходовании внебюджетных средств за 2025 год</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyatel_2025g__1_.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах деятельности государственного (муниципального) учреждения и об использовании за ним государственного (муниципального) имущества на 01 января 2026 года</a></li>
  <li><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/otchet_o_ruzultatah_deyat_2024g___1_.pdf" target="_blank" rel="noopener noreferrer">Отчет о результатах деятельности государственного (муниципального) учреждения и об использовании закрепленного за ним государственного (муниципального) имущества на 01 января 2025 года</a></li>
</ul>

<p>ПРОГРАММЫ, финансируемые по договорам об образовании за счет средств физических и (или) юридических лиц, финансируемые за счет бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации в 2025/2026 учебном году не реализуются.</p>`,
  },
  {
    slug: "about-info/vacancies",
    title: "Вакантные места для приема (перевода) обучающихся",
    section: "about-info",
    content: `<p>На места, финансируемые за счёт местного бюджета по дополнительным общеобразовательным (общеразвивающим) программам вакантных мест для приёма (перевода) нет.</p>`,
  },
  {
    slug: "about-info/scholarships",
    title: "Стипендии и меры поддержки обучающихся",
    section: "about-info",
    content: `<p>Обучающимся в МБУ ДО "ЦЭВ "Песнохорки" стипендии не предоставляются</p>`,
  },
  {
    slug: "about-info/international",
    title: "Международное сотрудничество",
    section: "about-info",
    content: `<p><a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Soglashenie_o_sotrudnichestve.pdf" target="_blank" rel="noreferrer">Соглашение о сотрудничестве от 28.11.2025</a></p>
<p>Международной аккредитации образовательных программ в МБУ ДО «ЦЭВ «Песнохорки» нет.</p>`,
  },
  {
    slug: "about-info/nutrition",
    title: "Организация питания в образовательной организации",
    section: "about-info",
    content: `<p>Питание обучающихся в организации не осуществляется</p>`,
  },
];

async function seed() {
  await initDB();
  console.log("Seeding static_pages...");

  for (const page of pages) {
    try {
      await dbRun(
        "INSERT OR IGNORE INTO static_pages (slug, title, content, section) VALUES (?, ?, ?, ?)",
        [page.slug, page.title, page.content, page.section]
      );
      console.log(`  + ${page.slug}`);
    } catch (err) {
      console.error(`  ! ${page.slug}: ${err.message}`);
    }
  }

  console.log("Done!");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
