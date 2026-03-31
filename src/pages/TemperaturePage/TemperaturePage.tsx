import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./TemperaturePage.module.css";

type TableRow = {
  label: string;
  classrooms: string;
  corridors: string;
  recreation: string;
  office: string;
  other: string;
};

type TemperatureTable = {
  caption: string;
  rows: TableRow[];
};

const tables: TemperatureTable[] = [
  {
    caption:
      "Температура помещений МБУ ДО ЦЭВ «Песнохорки» по ул. Энтузиастов, 5",
    rows: [
      {
        label: "СанПин 2.4.3648-20",
        classrooms: "21-23",
        corridors: "20-23",
        recreation: "19-23",
        office: "18-23",
        other: "19-23",
      },
      {
        label: "06.03.2026 г.",
        classrooms: "23",
        corridors: "22",
        recreation: "22",
        office: "23",
        other: "22",
      },
    ],
  },
  {
    caption:
      "Температура помещений МБУ ДО ЦЭВ «Песнохорки» по ул. Павловский тракт, 134",
    rows: [
      {
        label: "СанПин 2.4.3648-20",
        classrooms: "21-23",
        corridors: "19-23",
        recreation: "19-23",
        office: "18-23",
        other: "19-23",
      },
      {
        label: "06.03.2026 г.",
        classrooms: "23",
        corridors: "22",
        recreation: "22",
        office: "23",
        other: "22",
      },
    ],
  },
];

export default function TemperaturePage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Родителям</span>
            <span>/</span>
            <span>Температурный режим</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Температурный режим</h1>

          {tables.map((table, i) => (
            <div key={i}>
              <p className={styles.tableCaption}>{table.caption}</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Температура</th>
                    <th>Классные комнаты</th>
                    <th>Коридоры</th>
                    <th>Рекреации</th>
                    <th>Кабинет</th>
                    <th>Другие помещения</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, j) => (
                    <tr key={j}>
                      <td>{row.label}</td>
                      <td>{row.classrooms}</td>
                      <td>{row.corridors}</td>
                      <td>{row.recreation}</td>
                      <td>{row.office}</td>
                      <td>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
