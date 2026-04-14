import { useState } from "react";
import { submitApplication } from "../../../lib/api";
import styles from "./EnrollForm.module.css";

type EnrollFormProps = {
  collectiveName?: string;
};

export function EnrollForm({ collectiveName }: EnrollFormProps) {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [collective, setCollective] = useState(collectiveName ?? "");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);

    try {
      await submitApplication({
        parent_name: parentName.trim(),
        phone: phone.trim(),
        child_name: childName.trim() || undefined,
        child_age: childAge.trim() || undefined,
        collective_name: collective.trim() || undefined,
        message: message.trim() || undefined,
      });
      setSuccess(true);
      setParentName("");
      setPhone("");
      setChildName("");
      setChildAge("");
      setCollective(collectiveName ?? "");
      setMessage("");
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Записаться</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {success && (
          <div className={styles.success}>Заявка отправлена!</div>
        )}
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="enroll-parent">
            Имя родителя *
          </label>
          <input
            id="enroll-parent"
            className={styles.input}
            type="text"
            required
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            placeholder="Иванова Мария Петровна"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="enroll-phone">
            Телефон *
          </label>
          <input
            id="enroll-phone"
            className={styles.input}
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="enroll-child">
            Имя ребёнка
          </label>
          <input
            id="enroll-child"
            className={styles.input}
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Иванов Петя"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="enroll-age">
            Возраст ребёнка
          </label>
          <input
            id="enroll-age"
            className={styles.input}
            type="text"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            placeholder="7 лет"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="enroll-collective">
            Коллектив
          </label>
          <input
            id="enroll-collective"
            className={styles.input}
            type="text"
            value={collective}
            onChange={(e) => setCollective(e.target.value)}
            placeholder="Название коллектива"
          />
        </div>

        <div className={styles.fieldFull}>
          <label className={styles.label} htmlFor="enroll-message">
            Сообщение
          </label>
          <textarea
            id="enroll-message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Дополнительная информация..."
          />
        </div>

        <button className={styles.submit} type="submit" disabled={submitting}>
          {submitting ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>
    </section>
  );
}
