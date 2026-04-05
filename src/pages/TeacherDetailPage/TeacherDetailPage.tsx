import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { fetchTeacher, type Teacher } from "../../lib/api";
import styles from "./TeacherDetailPage.module.css";

export default function TeacherDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    fetchTeacher(id)
      .then(setTeacher)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className={styles.page}>
      <MobileHeader />
      <Navbar />

      <div className={styles.breadcrumbs}>
        <Link to="/">Главная</Link>
        <span>/</span>
        <Link to="/about-info/teachers-staff">Педагоги</Link>
        <span>/</span>
        <span>{teacher?.name ?? "..."}</span>
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
          {loading && <p className={styles.name}>Загрузка...</p>}
          {error && <p className={styles.name}>Ошибка: {error}</p>}

          {teacher && (
            <>
              <div className={styles.columns}>
                <div className={styles.photoWrap}>
                  <img
                    alt={teacher.name}
                    className={styles.photo}
                    src={teacher.photo_url || "/images/teacher-detail/teacher-photo.svg"}
                  />
                </div>
                <div className={styles.info}>
                  <h1 className={styles.name}>{teacher.name}</h1>

                  <div className={styles.education}>
                    <h2 className={styles.educationTitle}>О педагоге</h2>
                    <div
                      className={styles.educationText}
                      dangerouslySetInnerHTML={{ __html: teacher.bio }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
