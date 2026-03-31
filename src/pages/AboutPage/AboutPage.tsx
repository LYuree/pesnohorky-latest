import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { aboutPageAssets } from "../../lib/aboutPageAssets";
import styles from "./AboutPage.module.css";

const directions = [
  {
    title: "Музыка и традиции",
    desc: "Народная музыка, фольклор и инструментальные занятия",
    count: "2 объединения | 2 педагога",
  },
  {
    title: "Танцы и хореография",
    desc: "Постановки, ритмика, сцена, фестивали и конкурсы",
    count: "2 объединения | 2* педагога",
  },
  {
    title: "Творческие мастерские",
    desc: "ДПИ, бисер, изо, художественные техники, дизайн костюма",
    count: "6 объединений | 5* педагогов",
  },
  {
    title: "Театр",
    desc: "Сцена, актёрские навыки, практика выступлений",
    count: "1 объединение | 1 педагог",
  },
  {
    title: "Развитие и поддержка",
    desc: "Развитие навыков, соц. проекты, волонтёрство и лидерство",
    count: "3 объединения | 3 педагога",
  },
];

const teachers = [
  {
    num: "1",
    name: "Терентьева Анна Юрьевна",
    disciplines: '«Песнохорки», «Народное творчество», «Игровой фольклор», «Обычай. Обряд. Традиция», «Традиции Сибири», «Народный вокал».',
  },
  {
    num: "1",
    name: "Терентьева Анна Юрьевна",
    disciplines: "Народная музыка, фольклор",
  },
  {
    num: "2",
    name: "Вьюгина Алина Сергеевна",
    disciplines: "Арт-планета, Лови момент",
  },
  {
    num: "2",
    name: "Скоробогатова Ольга Александровна",
    disciplines: "Народная музыка, фольклор",
  },
];

const additionalInfo = [
  "Награды Центра",
  "Профсоюз",
  "Подготовка к учебному году",
  "Музей",
  "Методические разработки",
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <div className={styles.header}>
        <Navbar />
        <div className={styles.breadcrumbs}>
          <span>Главная</span>
          <span>/</span>
          <span>О центре</span>
        </div>
      </div>

      <main className={styles.main}>
        {/* Intro */}
        <section className={styles.introSection}>
          <div className={styles.innerWide}>
            <h1 className={styles.pageTitle}>О центре</h1>
            <p className={styles.introText}>
              «Песнохорки» — центр эстетического воспитания, где дети развиваются через творчество и живую традицию. Мы знакомим ребят с культурой и историей своего народа не «по книжке», а через занятия, практику и выступления: ребёнок учится работать в команде, увереннее держится на сцене, развивает речь, внимание и дисциплину.
            </p>
            <p className={styles.introText}>&nbsp;</p>
            <p className={styles.introText}>
              Центр работает с 10 апреля 1995 года и вырос из ансамбля «Песнохорки» при поддержке администрации и образования Индустриального района. Сегодня это многопрофильное учреждение, где объединения и направления собраны в единое воспитательно-образовательное этнографическое пространство.
            </p>
            <p className={styles.introText}>&nbsp;</p>
            <p className={styles.introText}>
              На сайте вы можете посмотреть направления, выбрать объединение и педагога, увидеть награды, узнать про музей и подготовку к учебному году.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.innerNarrow}>
            <h2 className={styles.sectionTitle}>Центр в цифрах</h2>
            <div className={styles.titleLine}>
              <img alt="" className={styles.titleLineImg} src={aboutPageAssets.imgLineTitle} />
            </div>
            <div className={styles.statsGrid}>
              {[
                { num: "30+", label: "Лет работы" },
                { num: "14", label: "Объединений" },
                { num: "23", label: "Педагога" },
                { num: "1500+", label: "учеников" },
              ].map((s) => (
                <div className={styles.statCard} key={s.label}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className={styles.directionsSection}>
          <div className={styles.innerNarrow}>
            <h2 className={styles.sectionTitle}>Направления</h2>
            <div className={styles.directionsGrid}>
              {directions.map((d) => (
                <div className={styles.dirCard} key={d.title}>
                  <div className={styles.dirCardTop}>
                    <p className={styles.dirCardTitle}>{d.title}</p>
                    <div className={styles.dirCardLine}>
                      <img alt="" className={styles.dirCardLineImg} src={aboutPageAssets.imgLineCard} />
                    </div>
                    <p className={styles.dirCardDesc}>{d.desc}</p>
                  </div>
                  <p className={styles.dirCardCount}>{d.count}</p>
                </div>
              ))}
              <div className={styles.allLink}>
                <Link to="/departments" className={styles.allLinkText}>Все объединения</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section className={styles.teachersSection}>
          <div className={styles.innerNarrow}>
            <h2 className={styles.sectionTitle}>Наши педагоги</h2>
            <div className={styles.teachersControls}>
              <div className={styles.searchWrap}>
                <input className={styles.searchInput} placeholder="Поиск по имени" type="text" />
                <img alt="поиск" className={styles.searchIcon} src={aboutPageAssets.imgSearchIcon} />
              </div>
              <div className={styles.filterWrap}>
                <span className={styles.filterText}>Направления</span>
                <img alt="фильтр" className={styles.filterIcon} src={aboutPageAssets.imgFilterIcon} />
              </div>
            </div>
            <div className={styles.teachersGrid}>
              {teachers.map((t, i) => (
                <div className={styles.teacherCard} key={i}>
                  <div className={styles.teacherCardAvatar}>
                    <img alt="" className={styles.teacherAvatarImg} src={aboutPageAssets.imgTeacherAvatar} />
                    <span className={styles.teacherNum}>{t.num}</span>
                  </div>
                  <div className={styles.teacherCardInfo}>
                    <p className={styles.teacherName}>{t.name}</p>
                    <p className={styles.teacherDisciplines}>{t.disciplines}</p>
                  </div>
                  <img alt="" className={styles.teacherArrow} src={aboutPageAssets.imgLineTeacher} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional info */}
        <section className={styles.additionalSection}>
          <div className={styles.innerNarrow}>
            <h2 className={styles.sectionTitle}>Дополнительная информация</h2>
            <div className={styles.accordionGrid}>
              {additionalInfo.map((item, i) => (
                <div className={styles.accordionItem} key={item}>
                  <span className={styles.accordionText}>{item}</span>
                  <img
                    alt=""
                    className={styles.accordionLine}
                    src={[
                      aboutPageAssets.imgAccordionLine1,
                      aboutPageAssets.imgAccordionLine2,
                      aboutPageAssets.imgAccordionLine3,
                      aboutPageAssets.imgAccordionLine4,
                      aboutPageAssets.imgAccordionLine5,
                    ][i]}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
