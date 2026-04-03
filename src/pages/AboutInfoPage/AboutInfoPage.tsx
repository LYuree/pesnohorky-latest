import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { aboutInfoAssets } from "../../lib/aboutInfoAssets";
import styles from "./AboutInfoPage.module.css";

type DottedRowProps = {
  label: string;
  value: string | React.ReactNode;
  dotImg: string;
  multiline?: boolean;
};

function DottedRow({ label, value, dotImg, multiline }: DottedRowProps) {
  return (
    <div className={styles.dottedRow}>
      <p className={styles.dottedLabel}>{label}</p>
      <div className={styles.dottedSep}>
        <img alt="" className={styles.dottedSepImg} src={dotImg} />
      </div>
      <div className={multiline ? styles.dottedValueMulti : styles.dottedValue}>
        {value}
      </div>
    </div>
  );
}

type BranchDecoProps = {
  side: "left" | "right";
  img1: string;
  img2: string;
  img3: string;
};

function BranchDeco({ side, img1, img2, img3 }: BranchDecoProps) {
  return (
    <div className={side === "left" ? styles.branchLeft : styles.branchRight}>
      <div
        className={
          side === "left" ? styles.branchLeftInner : styles.branchRightInner
        }
      >
        <div className={styles.branchPart1}>
          <div className={styles.branchPart1Inner}>
            <img alt="" className={styles.branchImg} src={img1} />
          </div>
        </div>
        <div className={styles.branchPart2}>
          <img alt="" className={styles.branchImg} src={img2} />
        </div>
        <div className={styles.branchPart3}>
          <img alt="" className={styles.branchImg} src={img3} />
        </div>
      </div>
    </div>
  );
}

export default function AboutInfoPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <Navbar className={styles.navbar} />

      {/* ── Block 1: Title + org description ── */}
      <section className={styles.block1}>
        <h1 className={styles.block1Title}>Основные сведения</h1>

        <div className={styles.logoAndText}>
          <img
            alt="Здание Песнохорки"
            className={styles.orgPhoto}
            src={aboutInfoAssets.orgPhoto}
          />

          <div className={styles.orgText}>
            <p>
              <a
                href="https://xn--e1agflfadmf6b.xn--p1ai/"
                target="_blank"
                rel="noreferrer"
              >
                «Песнохорки»
              </a>{" "}
              — многопрофильное образовательное учреждение.
            </p>

            <p>&nbsp;</p>

            <p>
              <span className={styles.bold}>
                Полное наименование образовательного учреждения в соответствии с
                Уставом:{" "}
              </span>
              Муниципальное бюджетное учреждение дополнительного образования
            </p>
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/"
              target="_blank"
              rel="noreferrer"
            >
              «Центр эстетического воспитания «Песнохорки»
            </a>

            <p>&nbsp;</p>

            <p className={styles.bold}>
              Сокращенное наименование (по Уставу):
            </p>
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/"
              target="_blank"
              rel="noreferrer"
            >
              МБУ ДО «ЦЭВ «Песнохорки»
            </a>

            <p>&nbsp;</p>

            <p>
              <span className={styles.bold}>Дата создания организации:</span>{" "}
              10 апреля 1995 г.
            </p>

            <p>&nbsp;</p>

            <ul className={styles.docList}>
              <li>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/litsenziya.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  ЛИЦЕНЗИЯ
                </a>
              </li>
              <li>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Vipiska_iz_reestra_litsenziy_no__L035-01260-222F00372540.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Выписка из реестра лицензий
                </a>
              </li>
              <li>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/OGRN.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  ОГРН
                </a>
              </li>
              <li>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/list_zapisi.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Лист записи единого государственного реестра юридических лиц
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Block 2: Founder info (red) ── */}
      <section className={styles.redBlock}>
        <div className={styles.infoRows}>
          <DottedRow
            label="Наименование учредителя"
            value="Комитет по образованию города Барнаула"
            dotImg={aboutInfoAssets.dotLine1}
          />
          <DottedRow
            label="Председатель комитета"
            value="Муль Андрей Генрихович  — 8(3852) 56-90-45"
            dotImg={aboutInfoAssets.dotLine2}
          />
          <DottedRow
            label="Заместитель председателя комитета по экономике"
            dotImg={aboutInfoAssets.dotLine3}
            multiline
            value={
              <>
                <p>Паршуткина Лариса Николаевна</p>
                <p> 8(3852) 56-90-03</p>
              </>
            }
          />
          <DottedRow
            label="Адрес учредителя"
            value="Комитет по образованию города Барнаула"
            dotImg={aboutInfoAssets.dotLine1}
          />
          <DottedRow
            label="График работы учредителя"
            dotImg={aboutInfoAssets.dotLine4}
            multiline
            value={
              <>
                <p>понедельник – четверг 8.00-17.00,</p>
                <p>
                  обед 12.00-13.00;
                  <br />
                  пятница 8.00-16.00, обед 12.00-13.00
                </p>
              </>
            }
          />
          <DottedRow
            label="Контактные телефоны учредителя"
            value="(8-3852) 66-75-53"
            dotImg={aboutInfoAssets.dotLine5}
          />
          <DottedRow
            label="Адрес электронной почты учредителя"
            dotImg={aboutInfoAssets.dotLine6}
            value={
              <a href="mailto:kobra@obr.barnaul-adm.ru">
                kobra@obr.barnaul-adm.ru
              </a>
            }
          />
          <DottedRow
            label="Сайт учредителя"
            dotImg={aboutInfoAssets.dotLine7}
            value={
              <a
                href="http://www.barnaul-obr.ru/"
                target="_blank"
                rel="noreferrer"
              >
                www.barnaul-obr.ru
              </a>
            }
          />
        </div>

        <BranchDeco
          side="left"
          img1={aboutInfoAssets.branchLeftA1}
          img2={aboutInfoAssets.branchLeftA2}
          img3={aboutInfoAssets.branchLeftA3}
        />
      </section>

      {/* ── Block 3: Location info (white) ── */}
      <section className={styles.whiteBlock}>
        <div className={styles.whiteBlockInner}>
          <div className={styles.whiteBlockContent}>
            <h2 className={styles.whiteBlockTitle}>
              Место нахождения образовательной организации:
            </h2>

            <div className={styles.whiteBlockText}>
              <p>
                <span className={styles.bold}>Адрес фактический: </span>
                656057, Алтайский край, г. Барнаул, ул. Энтузиастов, 5
              </p>
              <p>
                <span className={styles.bold}>График работы: </span>
                понедельник – суббота 8.00- 20.00
              </p>
              <p>
                <span className={styles.bold}>
                  Адрес электронной почты:{" "}
                </span>
                pesnohorki@yandex.ru
              </p>
            </div>

            <div className={styles.whiteBlockText}>
              <p>
                <span className={styles.bold}>Адрес юридический: </span>
                656057, Алтайский край, г. Барнаул, Павловский тракт, 134
              </p>
              <p className={styles.bold}>График работы:</p>
              <ul>
                <li>
                  понедельник – четверг 8.00- 17.00, обед 12.00-12.48;
                </li>
                <li>пятница 8.00-16.00, обед 12.00-12.48.</li>
              </ul>
              <p>
                <span className={styles.bold}>
                  Адрес электронной почты:{" "}
                </span>
                pesnohorki@yandex.ru
              </p>
            </div>
          </div>

          <BranchDeco
            side="right"
            img1={aboutInfoAssets.branchRightA1}
            img2={aboutInfoAssets.branchRightA2}
            img3={aboutInfoAssets.branchRightA3}
          />
        </div>
      </section>

      {/* ── Block 4: Education details (red) ── */}
      <section className={styles.redBlock}>
        <div className={styles.infoRows}>
          <DottedRow
            label="Вид"
            value="дополнительное образование"
            dotImg={aboutInfoAssets.dotLine8}
          />
          <DottedRow
            label="Подвид"
            value="дополнительное образование детей и взрослых"
            dotImg={aboutInfoAssets.dotLine9}
          />
          <DottedRow
            label="Язык обучения"
            value="русский"
            dotImg={aboutInfoAssets.dotLine10}
          />
          <DottedRow
            label="Нормативный срок обучения"
            value="1-7 лет"
            dotImg={aboutInfoAssets.dotLine11}
          />
          <DottedRow
            label="Место осуществления обр. деятельности"
            value="ул. Энтузиастов 5"
            dotImg={aboutInfoAssets.dotLine12}
          />
          <DottedRow
            label="Адреса электронной почты обр. организации"
            value="pesnohorki@yandex.ru"
            dotImg={aboutInfoAssets.dotLine13}
          />
          <DottedRow
            label="Форма обучения"
            value="Очная"
            dotImg={aboutInfoAssets.dotLine14}
          />
        </div>

        <BranchDeco
          side="left"
          img1={aboutInfoAssets.branchLeftB1}
          img2={aboutInfoAssets.branchLeftB2}
          img3={aboutInfoAssets.branchLeftB3}
        />
      </section>

      {/* ── Block 5: Education addresses (white) ── */}
      <section className={styles.whiteBlock}>
        <div className={styles.whiteBlockInner}>
          <div className={styles.whiteBlockContent}>
            <h2 className={styles.whiteBlockTitle}>
              Место нахождения образовательной организации:
            </h2>

            <div className={styles.whiteBlockText}>
              <p>
                <a
                  href="https://xn--e1agflfadmf6b.xn--p1ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  МБУ ДО &quot;ЦЭВ «Песнохорки»
                </a>{" "}
                осуществляет образовательную деятельность по дополнительным
                общеобразовательным (общеразвивающим) программам по следующим
                адресам:
              </p>
              <ul>
                <li>
                  656057, Алтайский край, г. Барнаул, ул. Энтузиастов, 5;
                </li>
                <li>
                  656039, Алтайский край, г. Барнаул, ул. 42 Краснознаменной
                  бригады, 8;
                </li>
                <li>
                  656065, Алтайский край, г. Барнаул, ул. Энтузиастов, 26;
                </li>
                <li>
                  656057, Алтайский край, г. Барнаул, ул. Панфиловцев, 13;
                </li>
                <li>
                  656057, Алтайский край, г. Барнаул, ул. 50 лет СССР, 10;
                </li>
                <li>
                  656054, Алтайский край, г. Барнаул, ул. Антона Петрова, 218;
                </li>
                <li>
                  656057, Алтайский край, г. Барнаул, ул. 50 лет СССР, 53;
                </li>
                <li>
                  656066, Алтайский край, г. Барнаул, ул. Новгородская, 24;
                </li>
                <li>
                  656057, Алтайский край, г. Барнаул, ул. Георгиева, 46;
                </li>
                <li>
                  656065, Алтайский край, г. Барнаул, ул. Солнечная Поляна, 51;
                </li>
                <li>
                  656066, Алтайский край, г. Барнаул, ул. Павловский тракт, 100
                </li>
              </ul>
            </div>
          </div>

          <BranchDeco
            side="right"
            img1={aboutInfoAssets.branchRightB1}
            img2={aboutInfoAssets.branchRightB2}
            img3={aboutInfoAssets.branchRightB3}
          />
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className={styles.disclaimer}>
        <div className={styles.disclaimerDivider}>
          <div className={styles.disclaimerDividerLine} />
        </div>
        <p className={styles.disclaimerText}>
          Места осуществления образовательной деятельности, сведения о которых в
          соответствии с Федеральным законом от 29.12.2012 N 273-ФЗ &quot;Об
          образовании в Российской Федерации&quot;, не включаются в
          соответсвующую запись в реестре лицензий на осуществление
          образовательной деятельности - отсутствуют.
        </p>
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
