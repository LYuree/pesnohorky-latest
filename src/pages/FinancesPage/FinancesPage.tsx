import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./FinancesPage.module.css";

export default function FinancesPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Финансово-хозяйственная деятельность</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Финансово-хозяйственная деятельность</h1>

          <p className={styles.text}>
            МБУ ДО &quot;ЦЭВ &quot;Песнохорки&quot; ведёт финансово-хозяйственную деятельность в соответствие с требованиями, утвержденными приказом Министерства финансов РФ от 28 июля 2010 г. № 81-н (в ред. Приказа Минфина России от 2 октября 2012 г. № 132н)
          </p>

          <a
            href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/090119011.pdf"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ПОЛОЖЕНИЕ ОБ УЧЕТНОЙ ПОЛИТИКЕ УЧРЕЖДЕНИЯ
          </a>
          <a
            href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_uchetn_politiki___1_.pdf"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ПРИКАЗ ОБ УТВЕРЖДЕНИИ УЧЕТНОЙ ПОЛИТИКИ ДЛЯ ЦЕЛЕЙ БУХГАЛТЕРСКОГО УЧЕТА
          </a>
          <a
            href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/rekvizitiNovie__1_.docx"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            РЕКВИЗИТЫ
          </a>

          <p className={styles.text}>
            Муниципальное бюджетное учреждение дополнительного образования «Центр эстетического воспитания
            <br />
            «Песнохорки»
            <br />
            (МБУ ДО «ЦЭВ «Песнохорки»)
            <br />
            Адрес: 656057, Барнаул, ул. Павловский тракт, 134, тел. 56-94-63
            <br />
            ИНН 2222025779/КПП 222201001, ОГРН 1022201140048, ОКТМО 01701000, ОКПО 49689970
            <br />
            КБК 00000000000000000150
            <br />
            Наименование получателя:
            <br />
            ГОРФИНКОМИТЕТ (МБУ ДО «ЦЭВ «Песнохорки» л/с 20176U45980)
            <br />
            ОКЦ № 2 Сибирского ГУ Банка России
            <br />
            БИК 040173001, к/с № 40102810045370000009, р/с № 03234643017010001700
            <br />
            Назначение платежа: добровольные пожертвования.
          </p>

          <p className={styles.sectionTitle}>Государственное (муниципальное) задание:</p>
          <a
            href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/MZ_na_2025_god.pdf"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Муниципальное задание
          </a>

          <p className={styles.sectionTitle}>Планирование финансово-хозяйственной деятельности:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_na_2023_g_.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                План финансово-хозяйственной деятельности на 2023 год и плановый период 2024 и 2025 годов
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan__FHD_na_2024_g_.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                План финансово-хозяйственной деятельности на 2024 год и плановый период 2025 и 2026 годов
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_16_12_2025.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                План финансово-хозяйственной деятельности на 2025 год и плановый период 2026 и 2027 годов
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/FHD_30_12_2025.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                План финансово-хозяйственной деятельности на 2025 и плановый период 2026 и 2027 годов на 30.12.2025
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Plan_FHD_2026_god.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                План финансово-хозяйственной деятельности на 2026 год и плановый период 2027 и 2028 годов
              </a>
            </li>
          </ul>

          <p className={styles.sectionTitle}>Информация о поступлении и расходовании финансовых средств:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_po_vnebyudzhetu_2024__1_.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отчет о расходовании внебюджетных средств МБУ ДО &quot;ЦЭВ &quot;Песнохорки&quot; за 2024 год
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02461520240125043258.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отчет о расходовании внебюджетных средств МБУ ДО &quot;ЦЭВ &quot;Песнохорки&quot; за 2023 год
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rashodah_vnebyudzhet.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отчет о расходовании внебюджетных средств за 2025 год
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyatel_2025g__1_.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отчет о результатах деятельности государственного (муниципального) учреждения и об использовании за ним государственного (муниципального) имущества на 01 января 2026 года
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/otchet_o_ruzultatah_deyat_2024g___1_.pdf"
                className={styles.link}
                style={{ display: "inline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отчет о результатах деятельности государственного (муниципального) учреждения и об использовании закрепленного за ним государственного (муниципального) имущества на 01 января 2025 года
              </a>
            </li>
          </ul>

          <p className={styles.text}>
            ПРОГРАММЫ, финансируемые по договорам об образовании за счет средств физических и (или) юридических лиц, финансируемые за счет бюджетных ассигнований федерального бюджета, бюджетов субъектов Российской Федерации в 2025/2026 учебном году не реализуются.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
