import { Navbar } from "../../components/news/Navbar/Navbar";
import { Footer } from "../../components/news/Footer/Footer";
import styles from "./ParentsPage.module.css";
import heroBg from "../../../figma-archive/assets/ffac021b-87f9-4cd7-834a-76963c54fc82.png";
import heroCenter from "../../../figma-archive/assets/e470cd11-2072-4b27-ba2a-bcdbc88cfbaa.png";
import decorLeft from "../../../figma-archive/assets/7e0ee38c-18bb-4d89-859d-c13142c55cf6.svg";
import decorRight from "../../../figma-archive/assets/3617fb77-0a83-4bde-a303-55a1db24983d.svg";
import arrowIcon from "../../../figma-archive/assets/b66a11a5-e9d3-4cb4-b6c2-870a036797fe.svg";

const quickAnswers = [
  { title: "Как записаться?", text: "Пошагово: от выбора направления до первого занятия.", action: "4 шага" },
  { title: "Объединения", text: "Выберите направление и посмотрите объединения и педагогов.", action: "Список" },
  { title: "Документы", text: "Какие нужны документы для записи и посещения.", action: "Список" },
  { title: "Стоимость и льготы", text: "Оплата, стоимость и социальный сертификат.", action: "Условия" },
  { title: "Что взять на занятие", text: "Подготовка ребенка, вещи и чек-лист.", action: "Чек лист" },
  { title: "Частые вопросы", text: "Пропуски, переносы, выступления, безопасность.", action: "Ответы" },
];

const steps = [
  { n: 1, title: "Выберите направления", text: "Уточним возраст ребенка, группу и удобное расписание." },
  { n: 2, title: "Оставьте заявку", text: "Заполните заявку на сайте и дождитесь обратного звонка." },
  { n: 3, title: "Подготовьте документы", text: "Дадим список документов и правила посещения." },
  { n: 4, title: "Первое занятие", text: "Приходите чуть раньше - поможем адаптироваться и все объясним." },
];

const faq = [
  {
    title: "Выберите направления",
    text: "Посмотрите направления, объединения и кто ведет занятия.",
  },
  {
    title: "Что делать, если ребенок пропустил занятие?",
    text: "Напишите педагогу или администратору: подскажем варианты отработки или переноса.",
  },
  {
    title: "Нужна ли специальная форма/обувь?",
    text: "Для ряда направлений есть рекомендации. Отправим список после записи.",
  },
  {
    title: "Как связаться с педагогом?",
    text: "Обычно через администратора и официальные контакты центра.",
  },
];

const additionalInfoLeft = [
  "Противодействие коррупции",
  "Профилактика экстремизма",
  "Социальный сертификат",
  "Независимая оценка качества",
  "Температурный режим",
];

const additionalInfoRight = ["Безопасность", "Умные каникулы", "Памятки"];

export default function ParentsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.navbarPos}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <div className={styles.breadcrumbs}>
          <a href="#main">Главная</a>
          <span>/</span>
          <span>Родителям</span>
        </div>

        <section className={styles.hero}>
          <img alt="" src={heroBg} className={styles.heroBg} />
          <img alt="" src={heroCenter} className={styles.heroCenter} />
          <img alt="" src={decorLeft} className={styles.heroDecorLeft} />
          <img alt="" src={decorRight} className={styles.heroDecorRight} />
          <h1>Родителям</h1>
          <p>Самая важная информация тут.</p>
          <div className={styles.tabs}>
            <button className={styles.tabActive}>Оставить заявку</button>
            <a href="#schedule">Расписание</a>
            <a href="#safety">Безопасность</a>
          </div>
          <button className={styles.enrollBtn}>Записаться</button>
        </section>

        <section className={styles.section}>
          <h2>Быстрые ответы</h2>
          <div className={styles.quickGrid}>
            {quickAnswers.map((item) => (
              <article key={item.title} className={styles.quickCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button>
                  {item.action}
                  <img alt="" src={arrowIcon} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Как проходит запись</h2>
          <div className={styles.steps}>
            {steps.map((step) => (
              <article key={step.n} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Документы для родителей</h2>
          <div className={styles.docsGrid}>
            {["Заявление на зачисление", "Правила посещения", "Согласие на фото/видео"].map((name) => (
              <article key={name} className={styles.docCard}>
                <h3>{name}</h3>
                <p>PDF / DOCX</p>
                <div>
                  <button>
                    Открыть
                    <img alt="" src={arrowIcon} />
                  </button>
                  <button>
                    Скачать
                    <img alt="" src={arrowIcon} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Ответы на вопросы</h2>
          <div className={styles.faqList}>
            {faq.map((item) => (
              <article key={item.title} className={styles.faqItem}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.costBlock}>
          <h2>Стоимость и льготы</h2>
          <h3>Социальный сертификат дополнительного образования</h3>
          <p>
            Это официальное подтверждение возможности ребенка обучаться в кружках и секциях за счет
            средств государства.
          </p>
          <button>Подробнее</button>
          <small>Платные образовательные услуги в МБУ ДО "ЦЭВ "Песнохорки" не оказываются.</small>
        </section>

        <section className={styles.section}>
          <h2>Дополнительная информация</h2>
          <div className={styles.infoColumns}>
            <div>
              {additionalInfoLeft.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
            <div>
              {additionalInfoRight.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
