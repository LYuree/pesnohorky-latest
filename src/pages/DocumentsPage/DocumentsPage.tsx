import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./DocumentsPage.module.css";

type DocLink = { text: string; href: string };
type Section = { title: string; links: DocLink[] };

const sections: Section[] = [
  {
    title: "ДОКУМЕНТЫ ФЕДЕРАЛЬНОГО УРОВНЯ",
    links: [
      {
        text: 'Федеральный закон от 29.12.2012 N 273-ФЗ "Об образовании в Российской Федерации"',
        href: "https://docs.cntd.ru/document/902389617",
      },
      {
        text: 'Федеральный закон Российской Федерации от 30.12.2020 N 519-ФЗ г. Москва "О внесении изменений в Федеральный закон "О персональных данных"',
        href: "http://www.kremlin.ru/acts/bank/46284",
      },
      {
        text: "Декларация прав ребенка",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Deklaratsiya_prav_rebenka.docx",
      },
      {
        text: 'ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ ПОСТАНОВЛЕНИЕ ОТ 20 ОКТЯБРЯ 2021 ГОДА N 1802 ОБ УТВЕРЖДЕНИИ ПРАВИЛ РАЗМЕЩЕНИЯ НА ОФИЦИАЛЬНОМ САЙТЕ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ В ИНФОРМАЦИОННО-ТЕЛЕКОММУНИКАЦИОННОЙ СЕТИ "ИНТЕРНЕТ" И ОБНОВЛЕНИЯ ИНФОРМАЦИИ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ',
        href: "https://docs.cntd.ru/document/726524671",
      },
      {
        text: 'Приказ Министерства просвещения Российской Федерации от 27.07.2022 № 629 "Об утверждении Порядка организации и осуществления образовательной деятельности по дополнительным общеобразовательным программам"',
        href: "http://publication.pravo.gov.ru/Document/View/0001202209270013",
      },
      {
        text: 'Приказ Министерства просвещения Российской Федерации от 31.03.2025 № 253 "Об утверждении Порядка обеспечения условий доступности для инвалидов объектов и предоставляемых услуг в сфере общего, среднего профессионального образования..." (Зарегистрирован 15.05.2025 № 82197)',
        href: "http://publication.pravo.gov.ru/document/0001202505160008",
      },
      {
        text: "Приказ Министерства Просвещения Российской Федерации от 16.09.2020 №500 «Об утверждении примерной формы договора об образовании на обучение по дополнительным образовательным программам»",
        href: "https://docs.cntd.ru/document/566289534",
      },
      {
        text: "Приказ Федеральной службы по надзору в сфере образования и науки от 04.08.2023 №1493 «Об утверждении требований к структуре официального сайта образовательной организации»",
        href: "https://docs.cntd.ru/document/1302664691",
      },
      {
        text: "Постановление Главного государственного санитарного врача РФ от 28.09.2020 №28 «Об утверждении санитарных правил 2.4.3648-20 «Санитарно-эпидемиологические требования к организациям воспитания и обучения, отдыха и оздоровления детей и молодежи»",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/9__Postanovlenie_28.pdf",
      },
      {
        text: "Приказ Министерства труда и социальной защиты населения Российской Федерации от 05.05.2018 №298н «Об утверждении профессионального стандарта «Педагог дополнительного образования детей и взрослых»",
        href: "https://docs.cntd.ru/document/542623974",
      },
    ],
  },
  {
    title: "НОРМАТИВНЫЕ ПРАВОВЫЕ АКТЫ, СВЯЗАННЫЕ С РАБОТОЙ УЧРЕЖДЕНИЯ",
    links: [
      {
        text: 'Приказ Комитета по образованию города Барнаула от 14.08.2023 N 1239-осн "Об утверждении Порядка предоставления путевок в организации отдыха детей и их оздоровления, входящие в состав МАУ "ЦОО "Каникулы", в период летних каникул',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prikaz_Komiteta_po_obrazovaniyu_goroda_Barnaula_ot_14_08_2023.rtf",
      },
    ],
  },
  {
    title: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ",
    links: [
      {
        text: "Устав",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/UchDokum_a16f778f4fc14aa88a2cfd242e172293.pdf",
      },
    ],
  },
  {
    title: "ЛОКАЛЬНЫЕ НОРМАТИВНЫЕ АКТЫ ПО ВОПРОСАМ ОРГАНИЗАЦИИ И ОСУЩЕСТВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ",
    links: [
      {
        text: "Коллективный договор",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/kollektivniy_dogovor_2024_-_2027_pdf1.pdf",
      },
      {
        text: "ПОЛОЖЕНИЕ о правилах доступа педагогических работников к информационно-коммуникационным сетям и базам данных...",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_pravilah_dostupa_IKS.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о рабочей программе МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_rabochey_programme.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о сайте МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_sayte.pdf",
      },
      {
        text: "ИНСТРУКЦИЯ по организации охраны жизни и здоровья обучающихся для педагогов",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Instruktsiya_po_organizatsii_ohrani_zhizni_i_zdorovya.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о количестве обучающихся в объединениях, их возрастных категориях МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_kol_ve_obuch_.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о режиме занятий обучающихся МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_rezh_zanyatiy.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о нормах профессиональной этики педагогических работников МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_normah_professionalnoy_etiki.pdf",
      },
      {
        text: "ПОЛОЖЕНИЕ о порядке выдачи справки об обучении или периоде обучения",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_vidachi_spravki_ob_obuchenii.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о порядке посещения обучающимися мероприятий, не предусмотренных учебным планом МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_poseshcheniya_meropriyatiy.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ об обработке и защите персональных данных работников МБУ ДО "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Porlozhenie_ob_obraPD.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ об организации образовательного процесса с использованием электронного обучения и дистанционных образовательных технологий МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Ob_organizatsii_obrazovatelnogo_protsessa_udalenka.pdf",
      },
      {
        text: 'ПОЛОЖЕНИЕ о проведении промежуточной аттестации обучающихся МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_provedenie_promezhutochnoy_attestatsii.pdf",
      },
      {
        text: "Порядок обучения по индивидуальному плану, в том числе по ускоренному обучению, в пределах осваиваемой дополнительной образовательной программы",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Poryadok_obucheniya_po_individualnomu_planu.pdf",
      },
      {
        text: 'Правила внутреннего распорядка для обучающихся МБУ ДО"ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/PVR_dlya_uch-sya.pdf",
      },
      {
        text: 'Политика информационной безопасности МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/persdannie.pdf",
      },
      {
        text: 'Правила внутреннего трудового распорядка работников МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pravila_VTR.docx",
      },
      {
        text: 'Положение о порядке оформления, возникновения, приостановления и прекращения отношений между МБУ ДО "ЦЭВ "Песнохорки", обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/O_poryadke_prekrashcheniya_otnosheniy.pdf",
      },
      {
        text: 'Положение о правилах приема, порядке и основаниях перевода, отчисления и восстановления обучающихся МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie(1).pdf",
      },
    ],
  },
  {
    title: "ГОСУДАРСТВЕННЫЙ КОНТРОЛЬ И НАДЗОР В СФЕРЕ ОБРАЗОВАНИЯ",
    links: [
      {
        text: "Решение о проведении плановой выездной проверки",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/reshenie_pesnohorki(1).pdf",
      },
      {
        text: "Заключение эксперта",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc01696120220221023409.pdf",
      },
      {
        text: "Предписание об устранении выявленных нарушений санитарно-эпидемиологических требований",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc01696520220221024647.pdf",
      },
      {
        text: "Отчет об исполнении предписания об устранении выявленных нарушений санитарно-эпидемиологических требований",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/OTCHET_ob_ispolnenii_predpisaniya.pdf",
      },
      {
        text: "Приказ о проведении ведомственного контроля за соблюдением трудового законодательства и иных нормативных правовых актов, содержащих нормы трудового права",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Uchreditelniy_kontrol_sentyabr_2023.pdf",
      },
      {
        text: "Акт о результатах проверки состояния ведения кадрового делопроизводства",
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Pesnohorki_spravka.pdf",
      },
    ],
  },
  {
    title: "ОТЧЕТЫ О САМООБСЛЕДОВАНИИ",
    links: [
      {
        text: 'Положение о самообследовании МБУ ДО "ЦЭВ "Песнохорки"',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Polozhenie_o_samoobsledovanii.pdf",
      },
      {
        text: 'Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2021 год',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/samoobsledovanie_2021.pdf",
      },
      {
        text: 'Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2022 год',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/SAMOOBSLEDOVANIE(1).pdf",
      },
      {
        text: 'Отчет о результатах самообследования МБУ ДО "ЦЭВ "Песнохорки" за 2023 год',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/2023_SAMOOBSLEDOVANIE.pdf.pdf",
      },
      {
        text: 'Отчет о результатах самообследования МБУ ДО "Песнохорки" за 2024 год',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/SAMOOBSLEDOVANIE_2024.pdf",
      },
    ],
  },
  {
    title: "ОТЧЕТЫ О РЕЗУЛЬТАТАХ ДЕЯТЕЛЬНОСТИ",
    links: [
      {
        text: 'Отчет о результатах деятельности МБУ ДО "ЦЭВ "Песнохорки" и об использовании закрепленного за ним имущества на 01.01.2024',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyatelnosti_2023.pdf",
      },
      {
        text: 'Отчет о результатах деятельности МБУ ДО "ЦЭВ "Песнохорки" и об использовании закрепленного за ним муниципального имущества на 01.01.2023',
        href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Otchet_o_rez_deyat__za_2022.pdf",
      },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Документы</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Документы</h1>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
