import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { departmentsPageAssets } from "../../lib/departmentsPageAssets";
import styles from "./DepartmentsPage.module.css";

type SmallCard = {
  name: string;
  leader: string;
  age: string;
  group: string;
};

type DeptGroup = {
  category: string;
  featuredPhoto: string;
  featuredName: string;
  featuredType: string;
  cards: SmallCard[];
};

const groups: DeptGroup[] = [
  {
    category: "Современные танцы",
    featuredPhoto: departmentsPageAssets.imgPhotoStreet,
    featuredName: "Современные танцы «STREET»",
    featuredType: "Танцы",
    cards: [
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
    ],
  },
  {
    category: "Вокал",
    featuredPhoto: departmentsPageAssets.imgPhotoPesnohorki,
    featuredName: "Песнохорки",
    featuredType: "Вокал",
    cards: [
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
    ],
  },
  {
    category: "Театр",
    featuredPhoto: departmentsPageAssets.imgPhotoTheatre,
    featuredName: "Маска",
    featuredType: "Театр",
    cards: [
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
    ],
  },
  {
    category: "Театр",
    featuredPhoto: departmentsPageAssets.imgPhotoTheatre,
    featuredName: "Маска",
    featuredType: "Театр",
    cards: [
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
    ],
  },
  {
    category: "Театр",
    featuredPhoto: departmentsPageAssets.imgPhotoTheatre,
    featuredName: "Маска",
    featuredType: "Театр",
    cards: [
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
      { name: "Современные танцы «STREET»", leader: "Петрова А.С.", age: "7 - 18", group: "25/30" },
    ],
  },
];

const filterTabs = ["все", "Вокал", "Танцы", "Театр", "Роботостроение", "Этно", "Современные танцы"];

export default function DepartmentsPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      {/* Red hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Объединения</span>
            <span>/</span>
            <span>Все коллективы</span>
          </div>
          <div className={styles.heroTitleRow}>
            <div className={styles.heroLine}>
              <img alt="" className={styles.heroLineImg} src={departmentsPageAssets.imgLineSection} />
            </div>
            <h1 className={styles.heroTitle}>Объединения и Коллективы</h1>
            <div className={styles.heroLine}>
              <img alt="" className={styles.heroLineImg} src={departmentsPageAssets.imgLineDivider} />
            </div>
          </div>
        </div>
      </section>

      {/* White content */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Filter tabs */}
          <div className={styles.filters}>
            {filterTabs.map((tab) => (
              <button className={styles.filterTab} key={tab} type="button">
                {tab}
              </button>
            ))}
          </div>

          {/* Department groups */}
          {groups.map((group, gi) => (
            <div className={styles.group} key={gi}>
              <h2 className={styles.groupTitle}>{group.category}</h2>
              <div className={styles.groupRow}>
                {/* Featured photo card */}
                <Link className={styles.featuredCard} to="/departments/1">
                  <div className={styles.featuredImgWrap}>
                    <img alt="" className={styles.featuredImg} src={group.featuredPhoto} />
                    <div className={styles.featuredOverlay} />
                  </div>
                  <div className={styles.featuredText}>
                    <span className={styles.featuredType}>{group.featuredType}</span>
                    <div className={styles.featuredCardLine}>
                      <img alt="" className={styles.featuredLineImg} src={departmentsPageAssets.imgLineCard} />
                    </div>
                    <span className={styles.featuredName}>{group.featuredName}</span>
                  </div>
                </Link>

                {/* Small info cards */}
                <div className={styles.smallCards}>
                  {group.cards.map((card, ci) => (
                    <Link className={styles.smallCard} key={ci} to="/departments/1">
                      <div className={styles.smallCardImg} />
                      <div className={styles.smallCardInfo}>
                        <p className={styles.smallCardName}>{card.name}</p>
                        <div className={styles.smallCardLine}>
                          <img alt="" className={styles.smallCardLineImg} src={departmentsPageAssets.imgLineCard} />
                        </div>
                        <p className={styles.smallCardMeta}>
                          <span className={styles.metaLabel}>Руководитель:</span>{" "}
                          <span>{card.leader}</span>
                        </p>
                        <p className={styles.smallCardMeta}>
                          <span className={styles.metaLabel}>Возраст:</span>{" "}
                          <span>{card.age}</span>
                          {"  "}
                          <span className={styles.metaLabel}>Группа:</span>{" "}
                          <span>{card.group}</span>
                        </p>
                      </div>
                      <div className={styles.enrollBtn}>
                        <span className={styles.enrollBtnText}>Записать ребёнка</span>
                        <img alt="" className={styles.enrollBtnLine} src={departmentsPageAssets.imgLineBtn} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={styles.sectionDivider}>
                <img alt="" className={styles.sectionDividerImg} src={departmentsPageAssets.imgLineDivider} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
