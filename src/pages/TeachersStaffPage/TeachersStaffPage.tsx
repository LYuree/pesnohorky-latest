import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { fetchTeachers, type TeacherListItem } from "../../lib/api";
import styles from "./TeachersStaffPage.module.css";

export default function TeachersStaffPage() {
  const [teachers, setTeachers] = useState<TeacherListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeachers()
      .then(setTeachers)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Педагогический состав</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Педагогический состав</h1>

          <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/svedeniya_o_rukovodyashchih_i_pedagogichechskih_rabotnikah_1_.pdf" target="_blank" rel="noreferrer" className={styles.link}>
            Сведения о руководящем и педагогическом составе МБУ ДО "ЦЭВ "Песнохорки"
          </a>
          <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/perechen_programm(2).pdf" target="_blank" rel="noreferrer" className={styles.link}>
            Перечень дополнительных общеобразователных (общеразвивающих) программ
          </a>

          {loading && <p className={styles.text}>Загрузка...</p>}
          {error && <p className={styles.text}>Ошибка: {error}</p>}

          {teachers.length > 0 && (
            <div className={styles.grid}>
              {teachers.map((t) => (
                <Link key={t.id} to={`/teachers/${t.id}`} className={styles.card}>
                  <div className={styles.cardImgWrap}>
                    <img
                      className={styles.cardImg}
                      src={t.photo_url || "/images/teacher-detail/teacher-photo.svg"}
                      alt={t.name}
                    />
                  </div>
                  <p className={styles.cardName}>{t.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
