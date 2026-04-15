import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { EnrollModal } from "../../components/shared/EnrollModal/EnrollModal";
import styles from "./ParentsPage.module.css";

// ─── Quick-answers card data ────────────────────────────────────────────────

type QuickCard = {
  title: string;
  subtitle: string;
  btnLabel: string;
  to?: string;
};

const quickCardsLeft: QuickCard[] = [
  {
    title: "Документы",
    subtitle: "Пропуски, переносы, выступления, безопасность.",
    btnLabel: "Список",
    to: "/parents/safety",
  },
];

const quickCardsRight: QuickCard[] = [
  {
    title: "Объединения",
    subtitle: "Выберите направление и посмотрите объединения и педагогов.",
    btnLabel: "Список",
    to: "/departments",
  },
  {
    title: "Стоимость и льготы",
    subtitle: "Оплата, стоимость и социальный сертификат",
    btnLabel: "Условия",
    to: "/parents/social-cert",
  },
];

// ─── Enrollment steps ────────────────────────────────────────────────────────

type EnrollStep = { num: number; title: string; description: string };

const enrollSteps: EnrollStep[] = [
  {
    num: 1,
    title: "Выберете направления",
    description: "Уточним возраст ребёнка, группу и удобное расписание.",
  },
  {
    num: 2,
    title: "Оставьте заявку",
    description: "Уточним возраст ребёнка, группу и удобное расписание.",
  },
  {
    num: 3,
    title: "Подготовьте документы",
    description: "Дадим список документов и правила посещения.",
  },
  {
    num: 4,
    title: "Первое занятие",
    description:
      "Приходите чуть раньше — поможем адаптироваться и всё объясним.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

type FaqItem = { question: string; answer: string };

const faqItems: FaqItem[] = [
  {
    question: "Выберите направления",
    answer:
      "Посмотрите направления, объединения и кто ведёт занятия.",
  },
  {
    question: "Что делать, если ребёнок пропустил занятие?",
    answer:
      "Напишите педагогу или администратору: подскажем варианты отработки/переноса (если предусмотрено).",
  },
  {
    question: "Нужна ли специальная форма/обувь?",
    answer:
      "Для танцев и сценических занятий обычно есть рекомендации. Мы отправим список после записи.",
  },
  {
    question: "Как связаться с педагогом?",
    answer:
      "Обычно через администратора/официальные контакты центра. Укажите удобный способ связи в заявке.",
  },
];

// ─── Additional info accordion links ────────────────────────────────────────

type AdditionalLink = { label: string; to: string };

const additionalLeft: AdditionalLink[] = [
  { label: "Противодействие коррупции", to: "/parents/anti-corruption" },
  { label: "Профилактика экстремизма", to: "/parents/anti-extremism" },
  { label: "Социальный сертификат", to: "/parents/social-cert" },
  { label: "Независимая оценка качества", to: "/parents/quality-assessment" },
  { label: "Температурный режим", to: "/parents/temperature" },
];

const additionalRight: AdditionalLink[] = [
  { label: "Безопасность", to: "/parents/safety" },
  { label: "Безопасность", to: "/parents/safety" },
  { label: "Умные каникулы", to: "/parents/smart-holidays" },
  { label: "Памятки", to: "/parents/safety" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function QuickCard({ title, subtitle, btnLabel, to }: QuickCard) {
  return (
    <div className={styles.quickCard}>
      <h3 className={styles.quickCardTitle}>{title}</h3>
      <p className={styles.quickCardSubtitle}>{subtitle}</p>
      {to ? (
        <Link to={to} className={styles.quickCardBtn}>
          {btnLabel}
        </Link>
      ) : (
        <button className={styles.quickCardBtn}>{btnLabel}</button>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ParentsPage() {
  const [showEnroll, setShowEnroll] = useState(false);
  return (
    <div className={styles.page}>
      <MobileHeader />

      <PageHeader crumbs={[
        { label: "Главная", to: "/" },
        { label: "Родителям" },
      ]} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Родителям</h1>
          <p className={styles.heroSubtitle}>Самая важная информация тут.</p>
          <div className={styles.quickLinks}>
            <button className={styles.quickLinkRed} onClick={() => setShowEnroll(true)}>
              Оставить заявку
            </button>
            <Link to="/departments" className={styles.quickLinkUnderline}>
              Расписание
            </Link>
            <Link to="/parents/safety" className={styles.quickLinkUnderline}>
              Безопасность
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <main className={styles.main}>
        {/* 4a. Быстрые ответы */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Быстрые ответы</h2>
          <div className={styles.quickCardsGrid}>
            <div className={styles.quickCardsCol}>
              {quickCardsLeft.map((card) => (
                <QuickCard key={card.title} {...card} />
              ))}
            </div>
            <div className={styles.quickCardsCol}>
              {quickCardsRight.map((card) => (
                <QuickCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* 4b. Как проходит запись */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Как проходит запись</h2>
          <div className={styles.stepsGrid}>
            {enrollSteps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepCircle}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4c. Документы для родителей
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Документы для родителей</h2>
          <div className={styles.docsRow}>
            {docCards.map((doc) => (
              <div key={doc.title} className={styles.docCard}>
                <h3 className={styles.docCardTitle}>{doc.title}</h3>
                <p className={styles.docCardSubtitle}>{doc.subtitle}</p>
                <div className={styles.docCardBtns}>
                  <button className={styles.docPillBtn}>Открыть</button>
                  <button className={styles.docPillBtn}>Скачать</button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* 4d. Ответы на вопросы */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ответы на вопросы</h2>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Стоимость и льготы (red) ──────────────────────────── */}
      <section className={styles.certSection}>
        <div className={styles.certInner}>
          <h2 className={styles.certTitle}>Стоимость и льготы</h2>
          <p className={styles.certLead}>
            Социальный сертификат дополнительного образования
          </p>
          <p className={styles.certBody}>
            Это официальное подтверждение возможности ребёнка обучаться в
            кружках и секциях за счёт средств государства. Сертификат выдаётся
            в рамках регионального проекта «Все для детей» нацпроекта «Молодежь
            и дети».
          </p>
          <Link to="/parents/social-cert" className={styles.certBtn}>
            Подробнее
          </Link>
          <p className={styles.certNote}>
            Платные образовательные услуги в МБУ ДО «ЦЭВ «Песнохорки» не
            оказываются.
          </p>
        </div>
      </section>

      {/* ── Дополнительная информация ─────────────────────────── */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalInner}>
          <h2 className={styles.sectionTitle}>Дополнительная информация</h2>
          <div className={styles.additionalGrid}>
            <div className={styles.additionalCol}>
              {additionalLeft.map((item) => (
                <Link key={item.label + item.to} to={item.to} className={styles.additionalBtn}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className={styles.additionalCol}>
              {additionalRight.map((item, idx) => (
                <Link key={item.label + idx} to={item.to} className={styles.additionalBtn}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnrollModal isOpen={showEnroll} onClose={() => setShowEnroll(false)} />
      <Footer />
    </div>
  );
}
