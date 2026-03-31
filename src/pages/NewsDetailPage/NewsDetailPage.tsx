import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { newsDetailAssets } from "../../lib/newsDetailAssets";
import styles from "./NewsDetailPage.module.css";

const relatedNews = [
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
  { day: "5", month: "Декабря", year: "2026", text: "Телемост состоялся между центром \"Песнохорки\" и школой \"Аркон\" в рамках международного сотрудничества" },
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
  { day: "21", month: "января", year: "2026", text: "Театральная студия \"Маска\" поставит спектакль по повести Владимира Железникова \"Чучело\"" },
];

export default function NewsDetailPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      {/* ── Hero section (red) ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Новости</span>
            <span>/</span>
            <span>Фестиваль искусств</span>
            <span>/</span>
            <span>Весенний калейдоскоп</span>
          </div>

          <div className={styles.heroMeta}>
            <span className={styles.heroSection}>Наши новости</span>
          </div>

          <div className={styles.heroMetaRow}>
            <span className={styles.heroOrg}>Песнохорки</span>
            <span className={styles.heroDept}>BROADWAY</span>
            <span className={styles.heroTeachers}>Педагоги:</span>
            <span>Иванова А. В.(вокал),</span>
            <span>Петров С. П. (хореография)</span>
          </div>

          <div className={styles.heroDateRow}>
            <span>15 марта 2026</span>
            <span>Сибэнергомаш</span>
          </div>

          <h1 className={styles.heroTitle}>Весенний калейдоскоп</h1>

          <div className={styles.heroImgWrap}>
            <img alt="" className={styles.heroImg} src={newsDetailAssets.imgHero} />
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className={styles.articleSection}>
        <div className={styles.articleInner}>
          <div className={styles.articleColumns}>
            <div className={styles.articleMain}>
              <p className={styles.articleText}>
                15 марта в ДК &quot;Родина&quot; прошел ежегодный фестиваль детского творчества
                «Весенний калейдоскоп». В этом году он собрал рекордное количество участников —
                150 детей из 12 коллективов нашего центра.
              </p>
              <p className={styles.articleText}>&nbsp;</p>
              <p className={styles.articleText}>
                Фестиваль объединил все направления: вокал, хореографию, театральное искусство и
                декоративно-прикладное творчество. Зрителями стали родители, бабушки, дедушки и
                просто любители детского творчества — полный зал (300 мест) был заполнен до отказа.
              </p>
            </div>
            <div className={styles.articleSide}>
              <div className={styles.articleBranches}>
                <img alt="" className={styles.branchImg} src={newsDetailAssets.imgBranch1} />
                <img alt="" className={styles.branchImg} src={newsDetailAssets.imgBranch2} />
                <img alt="" className={styles.branchImg} src={newsDetailAssets.imgBranch3} />
              </div>
              <p className={styles.articleSideText}>
                Открыли фестиваль самые юные участники — младшая группа хора «Песнохорки»
                (возраст 5-7 лет). Они исполнили попурри из русских народных песен «Во поле береза»
              </p>
              <p className={styles.articleText}>&nbsp;</p>
              <p className={styles.articleSideText}>
                Зал встречал их бурными овациями — некоторые зрители даже подпевали.
                Руководитель хора отметила «Дети очень волновались, но справились отлично»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image + text block ── */}
      <section className={[styles.articleSection, styles.articleSectionWhite].join(" ")}>
        <div className={styles.articleInner}>
          <div className={styles.imgBlock}>
            <img alt="" className={styles.articleFullImg} src={newsDetailAssets.imgPhoto1} />
          </div>

          <h2 className={styles.articleSubtitle}>После вокалистов на сцену вышли танцоры</h2>

          <div className={styles.articleColumns}>
            <div className={styles.articleMain}>
              <p className={styles.articleText}>
                Современная хореография в исполнении группы «Ритм» (педагог Козлов Д) сорвала
                аплодисменты. Номер «Мечты» про космос и звезды поставили специально к фестивалю
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image 2 ── */}
      <section className={[styles.articleSection, styles.articleSectionRed].join(" ")}>
        <div className={styles.articleInner}>
          <div className={styles.imgBlock}>
            <img alt="" className={styles.articleFullImg} src={newsDetailAssets.imgPhoto2} />
          </div>
          <p className={styles.articleTextLight}>
            А следом за современным танцем — народный. Контраст получился впечатляющий
          </p>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className={[styles.articleSection, styles.articleSectionDark].join(" ")}>
        <div className={styles.articleInner}>
          <blockquote className={styles.quote}>
            «Я на фестивале в пятый раз, и каждый год дети удивляют. Сегодня был момент, когда
            мурашки пошли по коже — когда младший хор запел а капелла. Это надо слышать!»
          </blockquote>
          <p className={styles.quoteAuthor}>— Елена Петрова</p>
          <p className={styles.quoteRole}>мама участницы</p>
        </div>
      </section>

      {/* ── Final text ── */}
      <section className={[styles.articleSection, styles.articleSectionWhite].join(" ")}>
        <div className={styles.articleInner}>
          <p className={styles.articleText}>
            Завершился фестиваль общим финалом — все 150 участников вышли на сцену с воздушными
            шарами.
          </p>
          <p className={styles.articleText}>&nbsp;</p>
          <p className={styles.articleText}>
            Зрители встали, аплодисменты не стихали несколько минут
          </p>
        </div>
      </section>

      {/* ── Related news ── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <h2 className={styles.relatedTitle}>Похожие новости</h2>
          <div className={styles.relatedGrid}>
            {relatedNews.map((item, i) => (
              <div className={styles.relatedCard} key={i}>
                <div className={styles.relatedCardImg}>
                  <img alt="" className={styles.relatedCardImgInner} src={newsDetailAssets.imgThumb1} />
                </div>
                <div className={styles.relatedCardDate}>
                  <span className={styles.relatedDateDay}>{item.day}</span>
                  <span className={styles.relatedDateMonth}>{item.month}</span>
                  <span className={styles.relatedDateYear}>{item.year}</span>
                </div>
                <div className={styles.relatedCardLine}>
                  <img alt="" className={styles.relatedCardLineImg} src={newsDetailAssets.imgLine} />
                </div>
                <p className={styles.relatedCardText}>{item.text}</p>
              </div>
            ))}
          </div>

          <Link to="/news" className={styles.backLink}>
            ← Назад к новостям
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
