import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./EducationPage.module.css";

export default function EducationPage() {
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
            <span>Образование</span>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Образование</h1>

          <p className={styles.sectionTitle}>
            ЧИСЛЕННОСТЬ ОБУЧАЮЩИХСЯ ПО РЕАЛИЗУЕМЫМ ОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ
          </p>

          <p className={styles.text}>
            на 27 августа 2025 года в МБУ ДО «ЦЭВ «Песнохорки» обучаются:
          </p>
          <p className={styles.text}>1) Муниципальное задание — 1561 ребенок;</p>
          <p className={styles.text}>2) Социальный заказ — 30 детей;</p>
          <p className={styles.text}>
            3){" "}
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Inostrannie_grazhdane.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Сведения об обучающихся, являющихся иностранными гражданами
            </a>
          </p>
          <p className={styles.text}>
            4){" "}
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Inostrannie_grazhdane(1).pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Язык обучения: русский.
            </a>
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/OSNOVNAYa_PROGRAMMA_2025-2026_docx2.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Основная образовательная программа МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo; на 2025-2026 учебный год
              </a>
            </li>
          </ul>

          <p className={styles.text}>
            Дополнительные общеобразовательные (общеразвивающие) программы, реализуемые за счет муниципального задания
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Yasevich_-_Samotsveti_bazoviy_ur.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Самоцветы&rdquo; Базовый уровень</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Yasevich_-_Samotsveti_prodvinutiy_ur.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Самоцветы&rdquo; Продвинутый уровень</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Shtrebel_-_Uspeh.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Успех&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Shleyher_-_Teatralniy_praktikum.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Театральный практикум&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-Traditsii_Sibiri.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Традиции Сибири&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_programma_Obichay_obryad_Traditsiya_detskiy_sad.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Обычай.Обряд.Традиция&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_programma_Narodniy_vokal.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Народный вокал&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_Programma__Narodnoe_tvorchestvo.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Народное творчество&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Terenteva_-_Igrovoy_folklor.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Игровой фольклор&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Skorobogatora_-_Razvitie_golosa.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Развитие голоса&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Skorobogatova_-_Solist_2025-2026.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Солист&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pyatibratova_-_2025DOOP__Volshebniy_mir_bisera_2goda_288ch.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Волшебный бисер&rdquo; 2 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pyatibratova_-_2025_Volshebniy_biser_4goda.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Волшебный бисер&rdquo; 4 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Nagovitsina_-_Raduga_remesel_novaya_.doc" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Радуга ремесел&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Miller_-_Vyazanaya_igrushka_Amigurumi.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Вязанная игрушка Амигуруми&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Miller_-_Vesyolaya_businka.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Веселая бусинка&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kutsenko_-_programma_SOZVUCHIE_2_goda_2025__2026_uluch.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Созвучие&rdquo; 2 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kutsenko_-_programma_GITARA_2_goda_prodvinutaya_2025__2026_uluch.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Гитара&rdquo; 2 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_chudesa_iz_shersti_na_2025_-26_god.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Чудеса из шерсти&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_magiya_tvorchestva_na_2025-26_god.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Магия творчества&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kosilova_-_azbuka_shitya_na_2025-26_uchebniy_god.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Азбука шитья&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Klyushina_-_Podsolnuhi_7_let.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Подсолнухи&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Skorochtenie.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Скорочтение&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Programma_Perspektiva_2_goda.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Перспектива&rdquo; 2 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kem_-_Perspektiva_plyus_4_goda.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Перспектива&rdquo; 4 года</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kaplunova_-_RoboTerra.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;РобоТерра&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Goropah_-_Programma_teatralnoy_studii__MASKA__1_.doc" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Театральная студия &ldquo;Маска&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Goropah_-_Programma_po_plastilinografii_TEREMOK.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Волшебная пластилинография&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_Lovi_moment_programma.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Лови момент&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_V_momente_programma.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;В моменте&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina__-_Art_Planeta_programma.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;АртПланета&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vologodskaya_-Tantsevalnoe_detstvo.doc" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Танцевальное детство&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Buyankina_-_Yuniy_modeler__216_.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Юный модельер&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Buyankina_-_Moya_igrushka_uluch_144.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Мастерская мягкой игрушки&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Burdina_-_Step-aerobika_programma.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Степ-аэробика&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Burdina_-__Pervie_shagi.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Первые шаги&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Kaplunova_-_RobotoTehno.docx" target="_blank" rel="noreferrer" className={styles.link}>РобоТехно</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Rachinskaya_-_muz_teatr_Raduga_8-14.docx" target="_blank" rel="noreferrer" className={styles.link}>Музыкальный театр &ldquo;Радуга&rdquo;</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Makarenko_-_Narodnaya.docx" target="_blank" rel="noreferrer" className={styles.link}>&ldquo;Народная&rdquo;</a>
            </li>
          </ul>

          <p className={styles.sectionTitle}>Социальный заказ:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vyugina_-_Evrika.docx" target="_blank" rel="noreferrer" className={styles.link}>Эврика</a>
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_no__112_-_osn_ot_27_08_2025_Ob_utverzhdenii_i_vvode_v_deystvie_programm_na_2025-2026_uchebniy_god__3_.docx" target="_blank" rel="noreferrer" className={styles.link}>Приказ об утверждении и вводе в действие локальных нормативных актов от 27 августа 2025 № 112-осн</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03008920250908032010.pdf" target="_blank" rel="noreferrer" className={styles.link}>Годовой календарный учебный график МБУ ДО ЦЭВ &ldquo;Песнохорки&rdquo; на 2025-2026 учебный год</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03008720250908031846.pdf" target="_blank" rel="noreferrer" className={styles.link}>План внутриучрежденческого контроля МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo; на 2025-2026 учебный год</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc03009020250908032102.pdf" target="_blank" rel="noreferrer" className={styles.link}>План работы педагогических советов на 2025-2026 учебный год</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Programma_razvitiya_2026_-_2030_.pdf" target="_blank" rel="noreferrer" className={styles.link}>Программа развития на 2026-2030 г</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/raspisanie.docx" target="_blank" rel="noreferrer" className={styles.link}>Расписание на 2025/2026 учебный год</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/perechen_programm_docx1.pdf" target="_blank" rel="noreferrer" className={styles.link}>Перечень дополнительных общеобразовательных (общеразвивающих) программ МБУ ДО &ldquo;ЦЭВ &ldquo;Песнохорки&rdquo; на 2025-2026 учебный год</a>
            </li>
          </ul>

          <p className={styles.sectionTitle}>ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ</p>
          <p className={styles.text}>
            В соответствии с Федеральным Законом от 29.12.2012 №273-ФЗ «Об образовании в Российской Федерации» — образовательные стандарты для дополнительных общеобразовательных (общеразвивающих) программ отсутствуют.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
