import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { homeAssets } from "../../lib/homeAssets";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      {/* ── Hero (includes header) ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* Header */}
          <div className={styles.header}>
            <Navbar />
            <div className={styles.breadcrumbs}>
              <span>Главная</span>
              <span>/</span>
              <span>Родителям</span>
              <span>/</span>
              <span>Родителям</span>
              <span>/</span>
              <span>Родителям</span>
            </div>
          </div>

          <img alt="" className={styles.heroImgLeft} src={homeAssets.imgImage26} />
          <img alt="" className={styles.heroImgRight} src={homeAssets.imgImage26} />
          <img alt="" className={styles.heroMatryoshka} src={homeAssets.imgMatryoshka} />

          <p className={styles.heroSubtitle}>
            Центр эстетического
            <br />
            воспитания
          </p>

          <h1 className={styles.heroTitle}>Песнохорки</h1>

          <div className={styles.heroBtn}>
            <div className={styles.btnContent}>
              <span className={styles.btnText}>Записать ребёнка</span>
            </div>
            <div className={styles.btnCorner}>
              <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine1} />
            </div>
          </div>

          <div className={styles.heroBranches}>
            <div className={styles.heroBranch1}>
              <div className={styles.heroBranch1Inner}>
                <img alt="" className={styles.branchImg} src={homeAssets.imgBranchHero1} />
              </div>
            </div>
            <div className={styles.heroBranch2}>
              <div className={styles.heroBranch2Inner}>
                <img alt="" className={styles.branchImg} src={homeAssets.imgBranchHero2} />
              </div>
            </div>
            <div className={styles.heroBranch3}>
              <div className={styles.heroBranch3Inner}>
                <img alt="" className={styles.branchImg} src={homeAssets.imgBranchHero3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info section: Песнохорки (red) ── */}
      <section className={[styles.sectionFull, styles.infoSection].join(" ")}>
        <div className={styles.infoInner}>
          <div className={styles.infoDollLeft}>
            <img alt="" className={styles.infoDollLeftInner} src={homeAssets.imgDollLeft} />
          </div>
          <div className={styles.infoPesno5}>
            <img alt="" className={styles.infoPesno5Img} src={homeAssets.imgPesno5} />
          </div>
          <div className={styles.infoContent}>
            <div className={styles.infoHeader}>
              <div className={styles.infoHeaderTop}>
                <span className={styles.infoHeaderTopText}>Наши отделения</span>
              </div>
              <div className={styles.infoHeaderRow}>
                <h2 className={styles.infoTitle}>Песнохорки</h2>
                <span className={styles.infoSubtitle}>Студия театра народной музыки</span>
              </div>
            </div>
            <div className={styles.infoBody}>
              <p>
                Студия театра народной музыки С другой стороны, понимание сути
                ресурсосберегающих технологий говорит о возможностях инновационных
                методов управления процессами. Без учёта сложившейся международной
                обстановки, консультация с широким активом требует определения и
                уточнения системы обучения кадров, соответствующей насущным потребностям.
              </p>
              <p>&nbsp;</p>
              <p>
                Не следует, однако, забывать, что повышение уровня гражданского сознания,
                а также свежий взгляд на привычные вещи — безусловно открывает новые
                горизонты для системы обучения кадров, соответствующей насущным потребностям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Техносказка (white) ── */}
      <section className={[styles.sectionFull, styles.deptSection, styles.deptSectionWhite].join(" ")}>
        <div className={styles.deptInner}>
          <div className={styles.techPesno9}>
            <img alt="" className={styles.techPesno9Img} src={homeAssets.imgPesno9} />
          </div>
          <div className={styles.techChatGpt}>
            <div className={styles.techChatGptInner}>
              <img alt="" className={styles.techChatGptImg} src={homeAssets.imgChatGpt} />
            </div>
          </div>
          <p className={[styles.deptSectionLabel, styles.textRed].join(" ")}>Наши отделения</p>
          <div className={styles.deptLine}>
            <img alt="" className={styles.deptLineInner} src={homeAssets.imgLine3} />
          </div>
          <h2 className={[styles.deptTitle, styles.textRed].join(" ")}>Техносказка</h2>
          <p className={[styles.deptSubtitleRight, styles.textRed].join(" ")}>
            Детский педагогический отряд
          </p>
          <div className={[styles.deptBody, styles.textRed].join(" ")}>
            <p>
              дети не просто знакомятся с современными технологиями — они учатся
              применять их для осмысления и сохранения культурного наследия. Через
              конструирование, программирование и проектную деятельность ребята создают
              модели, вдохновлённые народными сказками, традиционными ремёслами и
              национальными образами.
            </p>
            <p>&nbsp;</p>
            <p>
              Занятия проходят в формате увлекательных исследований: мы разбираем
              механизмы, собираем автоматизированные модели, учимся работать в команде и
              доводить идеи до работающего прототипа. В основе подхода — свобода
              творчества, поддержка любознательности и живой интерес ребёнка
            </p>
          </div>
        </div>
      </section>

      {/* ── Созвучие (red) ── */}
      <section className={[styles.sectionFull, styles.deptSection, styles.deptSectionRed].join(" ")}>
        <div className={styles.deptInner}>
          <div className={styles.sozvPesno10}>
            <img alt="" className={styles.sozvPesno10Inner} src={homeAssets.imgPesno10} />
          </div>
          <div className={styles.sozvPesno7}>
            <img alt="" className={styles.sozvPesno7Inner} src={homeAssets.imgPesno7} />
          </div>
          <p className={[styles.deptSectionLabel, styles.textWhite].join(" ")}>Наши отделения</p>
          <div className={styles.deptLine}>
            <img alt="" className={styles.deptLineInner} src={homeAssets.imgLine2} />
          </div>
          <h2 className={[styles.deptTitle, styles.textWhite].join(" ")}>Созвучие</h2>
          <p className={[styles.deptSubtitleRight, styles.textWhite].join(" ")}>
            Студия театра народной музыки
          </p>
          <div className={[styles.deptBody, styles.textWhite].join(" ")}>
            <p>
              Студия театра народной музыки С другой стороны, понимание сути
              ресурсосберегающих технологий говорит о возможностях инновационных методов
              управления процессами. Без учёта сложившейся международной обстановки,
              консультация с широким активом требует определения и уточнения системы
              обучения кадров, соответствующей насущным потребностям.
            </p>
            <p>&nbsp;</p>
            <p>
              Не следует, однако, забывать, что повышение уровня гражданского сознания,
              а также свежий взгляд на привычные вещи — безусловно открывает новые
              горизонты для системы обучения кадров, соответствующей насущным потребностям.
            </p>
          </div>
          <div className={styles.sozvBtn}>
            <div className={styles.heroBtn}>
              <div className={styles.btnContent}>
                <span className={[styles.btnText, styles.btnTextLarge].join(" ")}>
                  Записать ребёнка
                </span>
              </div>
              <div className={styles.btnCorner}>
                <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── "А также..." (red) ── */}
      <section className={[styles.sectionFull, styles.alsoSection].join(" ")}>
        <div className={styles.alsoInner}>
          <p className={styles.alsoLabel}>А также...</p>
          <div className={styles.alsoLine}>
            <img alt="" className={styles.deptLineInner} src={homeAssets.imgLine6} />
          </div>
          <div className={styles.alsoCards}>
            {[
              { title: "Арт", subtitle: "планета", desc: "Творческое оббъединение" },
              { title: "Созвучие", subtitle: "", desc: "Музыкально-инструментальная группа" },
              { title: "Broadway", subtitle: "", desc: "Студия современного танца" },
              { title: "Broadway", subtitle: "", desc: "Студия современного танца" },
            ].map((card, i) => (
              <div className={styles.alsoCard} key={i}>
                <img alt="" className={styles.alsoCardImg} src={homeAssets.imgCardThumb} />
                <div className={styles.alsoCardTitleWrap}>
                  <div className={styles.alsoCardTitleRow}>
                    <span className={styles.alsoCardTitle}>{card.title}</span>
                    {card.subtitle && (
                      <span className={styles.alsoCardSubtitle}>{card.subtitle}</span>
                    )}
                  </div>
                  <div className={styles.alsoCardLine}>
                    <img alt="" className={styles.alsoCardLineImg} src={homeAssets.imgLine4} />
                  </div>
                  <div className={styles.alsoCardLineSmall}>
                    <img alt="" className={styles.branchImg} src={homeAssets.imgLine5} />
                  </div>
                </div>
                <p className={styles.alsoCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.alsoBtn}>
            <div className={styles.alsoBtnContent}>
              <span className={styles.alsoBtnText}>Все отделения</span>
            </div>
            <div className={styles.alsoBtnCorner}>
              <img alt="" className={styles.alsoBtnCornerImg} src={homeAssets.imgLine7} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Red banner ── */}
      <div className={styles.redBanner} />

      {/* ── Педагоги ── */}
      <section className={styles.teachersSection}>
        <div className={styles.teachersInner}>
          <h2 className={styles.teachersTitle}>Педагоги</h2>
          <div className={styles.teachersGrid}>
            {/* Top-left */}
            <div className={styles.teacherCard}>
              <div className={styles.teacherPhoto}>
                <img alt="" className={styles.teacherPhotoImg} src={homeAssets.imgTeacher1} />
              </div>
              <div className={[styles.teacherInfo, styles.teacherInfoLeft].join(" ")}>
                <div className={styles.teacherName}>
                  <p className={styles.teacherSurname}>Бурдина</p>
                  <p className={styles.teacherFirstName}>Алёна Максимовна</p>
                </div>
                <p className={styles.teacherDesc}>
                  Педагог дополнительного образования, руководитель хореографической
                  студии &quot;Орбита&quot;
                </p>
              </div>
            </div>

            {/* Top-right */}
            <div className={styles.teacherCard}>
              <div className={[styles.teacherInfo, styles.teacherInfoRight].join(" ")}>
                <div className={styles.teacherName}>
                  <p className={styles.teacherSurname}>Кем</p>
                  <p className={styles.teacherFirstName}>Анастасия Сергеевна</p>
                </div>
                <p className={styles.teacherDesc}>
                  Педагог дополнительного образования, руководитель объединения
                  &quot;Перспектива&quot;
                </p>
              </div>
              <div className={styles.teacherPhoto}>
                <img alt="" className={styles.teacherPhotoImg} src={homeAssets.imgTeacher2} />
              </div>
            </div>

            {/* Bottom-left */}
            <div className={styles.teacherCard}>
              <div className={styles.teacherPhoto}>
                <img alt="" className={styles.teacherPhotoImg} src={homeAssets.imgTeacher2} />
              </div>
              <div className={[styles.teacherInfo, styles.teacherInfoLeft].join(" ")}>
                <div className={styles.teacherName}>
                  <p className={styles.teacherSurname}>Бурдина</p>
                  <p className={styles.teacherFirstName}>Алёна Максимовна</p>
                </div>
                <p className={styles.teacherDesc}>
                  Педагог дополнительного образования, руководитель хореографической
                  студии &quot;Орбита&quot;
                </p>
              </div>
            </div>

            {/* Bottom-right */}
            <div className={[styles.teacherCard, styles.teacherCardCenter].join(" ")}>
              <div className={[styles.teacherInfo, styles.teacherInfoRight].join(" ")}>
                <div className={styles.teacherName}>
                  <p className={styles.teacherSurname}>Кем</p>
                  <p className={styles.teacherFirstName}>Анастасия Сергеевна</p>
                </div>
                <p className={styles.teacherDesc}>
                  Педагог дополнительного образования, руководитель объединения
                  &quot;Перспектива&quot;
                </p>
              </div>
              <div className={styles.teacherPhoto}>
                <img alt="" className={styles.teacherPhotoImg} src={homeAssets.imgTeacher1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Последние новости ── */}
      <section className={styles.newsSection}>
        <h2 className={styles.newsTitle}>Последние новости</h2>
        <div className={styles.newsContent}>
          <div className={styles.newsFeatured}>
            <div className={styles.newsFeaturedImg}>
              <img alt="" className={styles.newsFeaturedImgInner} src={homeAssets.imgNewsThumb} />
            </div>
            <div>
              <div className={styles.newsDate}>
                <span className={styles.newsDateDay}>21</span>
                <span className={styles.newsDateRest}>февраля</span>
                <span className={styles.newsDateRest}>2026</span>
              </div>
              <div className={styles.newsDateLine}>
                <img alt="" className={styles.newsDateLineImg} src={homeAssets.imgLineCard} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
              <p className={styles.newsFeaturedHeadline}>
                Коллективы центра &quot;Песнохорки&quot; выступили на торжественном
                открытии Чемпионата и Первенства СФО Региональные соревнования «Кубок
                Алтайского края» (РС) по спортивному ориентированию (лыжные дисциплины)
              </p>
              <div>
                <p className={styles.newsFeaturedSummary}>
                  Церемония состоялась в минувшую субботу и собрала более 200 юных
                  спортсменов из Красноярского края, Новосибирской и Томской, Кемеровской
                  и Омской, Иркутской областей, Алтайского края, Республики Алтай
                </p>
                <div className={styles.newsTags} style={{ marginTop: 25 }}>
                  <span>песнохорки</span>
                  <span>спорт</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.newsRight}>
            {[0, 1].map((i) => (
              <div className={styles.newsLightCard} key={i}>
                <div className={styles.newsLightTop}>
                  <div className={styles.newsLightDate}>
                    <span className={styles.newsDateDay}>21</span>
                    <span className={styles.newsDateRest}>февраля</span>
                    <span className={styles.newsDateRest}>2026</span>
                  </div>
                  <div className={styles.newsLightImg}>
                    <img alt="" className={styles.newsLightImgInner} src={homeAssets.imgNewsThumb} />
                  </div>
                </div>
                <p className={styles.newsLightHeadline}>
                  Концерт ко Дню матери состоялся на базе школы №135
                </p>
                <div className={styles.newsTags}>
                  <span>песнохорки</span>
                  <span>спорт</span>
                </div>
              </div>
            ))}
            <div className={styles.newsAllBtn}>
              <div className={styles.btnContent}>
                <span className={[styles.btnText, styles.btnTextLarge].join(" ")}>
                  Все новости
                </span>
              </div>
              <div className={styles.btnCorner}>
                <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Как записаться ── */}
      <section className={[styles.sectionFull, styles.signupSection].join(" ")}>
        <div className={styles.signupInner}>
          <p className={styles.signupLabel}>Как записаться?</p>
          <div className={styles.signupBody}>
            <p>Чтобы записать ребенка в центр детского творчества, следуйте этим шагам:</p>
            <p>1. Ознакомьтесь с программами центра: художественные кружки, музыкальные занятия или театральные студии.</p>
            <p>2. Заполните анкету с данными о ребенке и его предпочтениях.</p>
            <p>3. Посетите центр для знакомства с педагогами и атмосферой.</p>
            <p>4. Обсудите расписание и стоимость занятий.</p>
            <p>5. После оформления всех документов ребенок сможет начать занятия.</p>
          </div>
          <div className={styles.signupFrame}>
            <img alt="" className={styles.signupFrameImg} src={homeAssets.imgFrame60} />
          </div>
          <div className={styles.signupBtnLeft}>
            <div className={styles.signupBtn}>
              <div className={styles.btnContent}>
                <span className={styles.signupBtnText}>Документ 1</span>
              </div>
              <div className={styles.btnCorner}>
                <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine8} />
              </div>
            </div>
          </div>
          <div className={styles.signupBtnRight}>
            <div className={styles.signupBtn}>
              <div className={styles.btnContent}>
                <span className={styles.signupBtnText}>Документ 2</span>
              </div>
              <div className={styles.btnCorner}>
                <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine8} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
