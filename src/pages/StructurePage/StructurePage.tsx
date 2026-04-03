import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { structurePageAssets } from "../../lib/structurePageAssets";
import styles from "./StructurePage.module.css";

export default function StructurePage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <nav className={styles.breadcrumbs}>
            <Link to="/">Главная</Link>
            <span>/</span>
            <Link to="/about-info">Cведения об образовательной организации</Link>
            <span>/</span>
            <span>Структура и органы управления образовательной организацией</span>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>
            Структура и органы управления образовательной организацией
          </h1>
          <div className={styles.body}>
            <p>
              Муниципальное бюджетное учреждение дополнительного образования
              «Центр эстетического воспитания «Песнохорки» (&ldquo;МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo;)
            </p>
            <p>Директор учреждения: Камалова Ольга Николаевна</p>
            <p>
              Адрес фактический и юридический:<br />
              656057, Алтайский край, г. Барнаул, Павловский тракт, 134
            </p>
            <p>Контактные телефоны: (3852) 569-463, (3852) 569-462</p>
            <p>
              Адрес электронной почты:{" "}
              <a href="mailto:pesnohorki@yandex.ru" target="_blank" rel="noreferrer">
                pesnohorki@yandex.ru
              </a>
            </p>
            <p>
              Адрес сайта:{" "}
              <a href="https://песнохорки.рф" target="_blank" rel="noreferrer">
                https://песнохорки.рф
              </a>
            </p>
            <p>Структурных подразделений у организации нет</p>
          </div>

          <img
            src={structurePageAssets.imgOrgChart}
            alt=""
            style={{ width: "100%", maxWidth: "1252px", display: "block", margin: "32px 0" }}
          />

          <div className={styles.body}>
            <p>Органами управления образовательной организации являются:</p>

            <ul>
              <li>
                <p>
                  Собрание трудового коллектива — коллегиальный орган самоуправления
                  учреждения, представляющий интересы работников. В состав собрания
                  трудового коллектива входят все работники МБУ ДО «ЦЭВ «Песнохорки».
                </p>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_ob_obshche_sobranii_rabotnikov(1).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.docLink}
                >
                  ПОЛОЖЕНИЕ об общем собрании работников МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo;
                </a>
              </li>
              <li>
                <p>
                  Педагогический совет учреждения — коллегиальный орган для решения
                  вопросов образовательной деятельности. В состав педагогического совета
                  учреждения входят все педагоги МБУ ДО «ЦЭВ «Песнохорки».
                </p>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02277720251201030824_pdf23.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.docLink}
                >
                  Положение о Педагогическом совете МБУ ДО «ЦЭВ «Песнохорки»
                </a>
              </li>
              <li>
                <p>
                  Управляющий совет — осуществляет общее руководство учреждением. В состав
                  управляющего совета входят Директор учреждения, 4 работника учреждения,
                  3 родителя (законных представителя), 1 представитель учредителя
                  (назначается учредителем)
                </p>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Upravlyayushchiy_sovet.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.docLink}
                >
                  ПОЛОЖЕНИЕ об органе государственно-общественного управления (Управляющий Совет Учреждения)
                </a>
              </li>
              <li>
                <p>
                  Общее собрание родителей Учреждения является коллегиальным органом
                  управления, ставит своей целью учет мнения родителей (законных
                  представителей) обучающихся по вопросам управления учреждением и принятия
                  локальных нормативно-правовых актов, затрагивающих их права и законные
                  интересы.
                </p>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02274620251126074432.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.docLink}
                >
                  Положение об общем собрании родителей МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
