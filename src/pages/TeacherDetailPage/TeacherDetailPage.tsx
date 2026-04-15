import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
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
      <PageHeader crumbs={[
        { label: "Главная", to: "/" },
        { label: "Педагоги", to: "/teachers" },
        { label: teacher?.name ?? "..." },
      ]} />

      <main className={styles.main}>
        <div className={styles.content}>
          {loading && <p className={styles.name}>Загрузка...</p>}
          {error && <p className={styles.name}>Ошибка: {error}</p>}

          {teacher && (
            <div className={styles.article}>
              <img
                alt={teacher.name}
                className={styles.photo}
                src={teacher.photo_url || "/images/teacher-detail/teacher-photo.svg"}
              />
              <h1 className={styles.name}>{teacher.name}</h1>
              <div
                className={styles.bio}
                dangerouslySetInnerHTML={{ __html: teacher.bio }}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
