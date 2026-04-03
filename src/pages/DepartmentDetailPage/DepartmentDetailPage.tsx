import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { departmentDetailAssets } from "../../lib/departmentDetailAssets";
import styles from "./DepartmentDetailPage.module.css";

const relatedNews = [
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
  { day: "5", month: "Декабря", year: "2026", text: "Телемост состоялся между центром «Песнохорки» и школой «Аркон» в рамках международного сотрудничества" },
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
];

const teachers = [
  { photo: departmentDetailAssets.imgTeacher1, firstName: "Бурдина", lastName: "Алёна Максимовна", role: "Педагог дополнительного образования, руководитель хореографической студии «Орбита»" },
  { photo: departmentDetailAssets.imgTeacher2, firstName: "Кем", lastName: "Анастасия Сергеевна", role: "Педагог дополнительного образования, руководитель объединения «Перспектива»" },
];

const awards = [
  "2025 — Лауреат фестиваля «Поющие России»",
  "2025 — Лауреат фестиваля «Поющие России»",
  "2025 — Лауреат фестиваля «Поющие России»",
  "2025 — Лауреат фестиваля «Поющие России»",
];

const directions = [
  { icon: departmentDetailAssets.imgIconMic, label: "Народный вокал" },
  { icon: departmentDetailAssets.imgIconMic, label: "Гармонь" },
  { icon: departmentDetailAssets.imgIconMic, label: "Нотная грамота" },
  { icon: departmentDetailAssets.imgIconMic, label: "Народный танец" },
  { icon: departmentDetailAssets.imgIconMic, label: "Сценические движения" },
];

export default function DepartmentDetailPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      {/* Hero: red section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Объединения</span>
            <span>/</span>
            <span>[Категория]</span>
            <span>/</span>
            <span>[Название]</span>
          </div>
          <div className={styles.heroCategory}>Наши Объединения</div>
          <h1 className={styles.heroTitle}>Песнохорки</h1>
          <div className={styles.heroLine}>
            <img alt="" className={styles.heroLineImg} src={departmentDetailAssets.imgLineDivider} />
          </div>
          <div className={styles.heroMeta}>
            <span>Песнохорки</span>
            <span className={styles.heroDivider}>|</span>
            <span>Вокал</span>
            <span className={styles.heroDivider}>|</span>
            <span>Руководитель: Иванова А. В.</span>
            <span className={styles.heroDivider}>|</span>
            <span>Педагоги: Иванова А. В., Петров С. П.</span>
          </div>
          <button className={styles.enrollBtn} type="button">
            <span className={styles.enrollBtnText}>Записать ребёнка</span>
            <img alt="" className={styles.enrollBtnLine} src={departmentDetailAssets.imgLineBtn} />
          </button>
          <a className={styles.askLink} href="#contacts">задать вопрос</a>
        </div>
      </section>

      {/* Description: white section */}
      <section className={styles.descSection}>
        <div className={styles.descInner}>
          <p className={styles.descText}>
            Песнохорки — народный хор для детей и подростков 7–18 лет.
            Учим петь, понимать русскую культуру и выступать на сцене.
          </p>
          <p className={styles.descText}>&nbsp;</p>
          <p className={styles.descText}>
            В программе: народный вокал, сценическое движение, нотная грамота.
            Регулярно участвуем в городских и всероссийских фестивалях.
            Есть адаптированные программы для детей с ОВЗ.
          </p>
        </div>
      </section>

      {/* Info: red section */}
      <section className={styles.infoSection}>
        <div className={styles.infoInner}>
          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <img alt="" className={styles.infoIcon} src={departmentDetailAssets.imgIconOvz} />
              <span className={styles.infoText}>Возраст: 7–18 лет</span>
            </div>
            <div className={styles.infoItem}>
              <img alt="" className={styles.infoIcon} src={departmentDetailAssets.imgIconOvz} />
              <span className={styles.infoText}>ОВЗ: есть условия</span>
            </div>
            <div className={styles.infoItem}>
              <img alt="" className={styles.infoIcon} src={departmentDetailAssets.imgIconOvz} />
              <span className={styles.infoText}>Расписание: Пн, Ср, Пт 16:00</span>
            </div>
            <div className={styles.infoItem}>
              <img alt="" className={styles.infoIcon} src={departmentDetailAssets.imgIconOvz} />
              <span className={styles.infoText}>Занято: 25 из 30 мест</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leader: red section */}
      <section className={styles.leaderSection}>
        <div className={styles.leaderInner}>
          <div className={styles.sectionLabel}>Руководитель:</div>
          <div className={styles.leaderLine}>
            <img alt="" className={styles.leaderLineImg} src={departmentDetailAssets.imgLineDivider} />
          </div>
          <div className={styles.leaderRow}>
            <div className={styles.leaderPhotoWrap}>
              <img alt="Иванова Анна Петровна" className={styles.leaderPhoto} src={departmentDetailAssets.imgLeaderPhoto} />
            </div>
            <div className={styles.leaderInfo}>
              <p className={styles.leaderName}>Иванова Анна Петровна</p>
              <p className={styles.leaderDetail}>Заслуженный работник культуры</p>
              <p className={styles.leaderDetail}>Стаж: 20 лет</p>
              <p className={styles.leaderDetail}>Образование: КГБПОУ «Алтайский краевой колледж»</p>
              <blockquote className={styles.leaderQuote}>
                «Для меня «Песнохорки» — это не просто хор. Это семья. Здесь дети не только учатся петь, они учатся слышать друг друга, поддерживать и вместе создавать настоящее чудо.»
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers: white section */}
      <section className={styles.teachersSection}>
        <div className={styles.teachersInner}>
          <h2 className={styles.sectionTitleDark}>Педагоги</h2>
          <div className={styles.teachersGrid}>
            {teachers.map((t, i) => (
              <div className={styles.teacherCard} key={i}>
                <div className={styles.teacherPhotoWrap}>
                  <img alt={t.firstName} className={styles.teacherPhoto} src={t.photo} />
                </div>
                <p className={styles.teacherFirstName}>{t.firstName}</p>
                <p className={styles.teacherLastName}>{t.lastName}</p>
                <p className={styles.teacherRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions: red section */}
      <section className={styles.directionsSection}>
        <div className={styles.directionsInner}>
          <div className={styles.directionsLabel}>Направления</div>
          <div className={styles.directionsLine}>
            <img alt="" className={styles.directionsLineImg} src={departmentDetailAssets.imgLineDivider} />
          </div>
          <div className={styles.directionsRow}>
            {directions.map((d) => (
              <div className={styles.directionItem} key={d.label}>
                <img alt="" className={styles.directionIcon} src={d.icon} />
                <span className={styles.directionLabel}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards: white section */}
      <section className={styles.awardsSection}>
        <div className={styles.awardsInner}>
          <div className={styles.awardsLabel}>Награды</div>
          <div className={styles.awardsLine}>
            <img alt="" className={styles.awardsLineImg} src={departmentDetailAssets.imgLineCard} />
          </div>
          <div className={styles.awardsList}>
            {awards.map((award, i) => (
              <div className={styles.awardItem} key={i}>
                <img alt="" className={styles.awardIcon} src={departmentDetailAssets.imgAward} />
                <span className={styles.awardText}>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News: red section */}
      <section className={styles.newsSection}>
        <div className={styles.newsInner}>
          <div className={styles.newsLabel}>Последние новости</div>
          <div className={styles.newsLine}>
            <img alt="" className={styles.newsLineImg} src={departmentDetailAssets.imgLineDivider} />
          </div>
          <div className={styles.newsGrid}>
            {relatedNews.map((item, i) => (
              <div className={styles.newsCard} key={i}>
                <div className={styles.newsCardImg}>
                  <img alt="" className={styles.newsCardImgInner} src={departmentDetailAssets.imgNewsThumb} />
                </div>
                <div className={styles.newsCardDate}>
                  <span className={styles.newsDay}>{item.day}</span>
                  <span className={styles.newsMonth}>{item.month}</span>
                  <span className={styles.newsYear}>{item.year}</span>
                </div>
                <div className={styles.newsCardLine}>
                  <img alt="" className={styles.newsCardLineImg} src={departmentDetailAssets.imgLineBtn} />
                </div>
                <p className={styles.newsCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts: white section */}
      <section className={styles.contactsSection} id="contacts">
        <div className={styles.contactsInner}>
          <div className={styles.contactsLabel}>Контакты</div>
          <div className={styles.contactsLine}>
            <img alt="" className={styles.contactsLineImg} src={departmentDetailAssets.imgLineCard} />
          </div>
          <p className={styles.contactText}>Кабинет: 215 (3 этаж)</p>
          <p className={styles.contactText}>8 913 000 00 00</p>
          <p className={styles.contactText}>pesnohorki@mail.com</p>
          <button className={styles.enrollBtnWhite} type="button">
            <span className={styles.enrollBtnText}>Записать ребёнка</span>
            <img alt="" className={styles.enrollBtnLine} src={departmentDetailAssets.imgLineBtn} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
