import { useState } from "react";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { EnrollModal } from "../../components/shared/EnrollModal/EnrollModal";
import { homeAssets } from "../../lib/homeAssets";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [showEnroll, setShowEnroll] = useState(false);
  return (
    <div className={styles.page}>
      <MobileHeader />

      <PageHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <p className={styles.heroSubtitle}>
            Центр эстетического
            воспитания
          </p>

          <h1 className={styles.heroTitle}>Песнохорки</h1>

          <div className={styles.heroBtn} onClick={() => setShowEnroll(true)} style={{ cursor: "pointer" }}>
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
            <div className={styles.heroBtn} onClick={() => setShowEnroll(true)} style={{ cursor: "pointer" }}>
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
          <div className={styles.signupBtns}>
            <div className={styles.signupBtn} onClick={() => setShowEnroll(true)} style={{ cursor: "pointer" }}>
              <div className={styles.btnContent}>
                <span className={styles.signupBtnText}>Записать ребёнка</span>
              </div>
              <div className={styles.btnCorner}>
                <img alt="" className={styles.btnCornerImg} src={homeAssets.imgLine8} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollModal isOpen={showEnroll} onClose={() => setShowEnroll(false)} />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
