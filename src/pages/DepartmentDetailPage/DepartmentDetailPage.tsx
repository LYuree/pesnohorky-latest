import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { EnrollModal } from "../../components/shared/EnrollModal/EnrollModal";
import { fetchCollective, fetchTeachersByIds, type Collective, type Teacher } from "../../lib/api";
import styles from "./DepartmentDetailPage.module.css";

export default function DepartmentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [collective, setCollective] = useState<Collective | null>(null);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showEnroll, setShowEnroll] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchCollective(id)
      .then((c) => {
        setCollective(c);
        const ids = (c.teacher_ids || "").split(",").filter(Boolean).map(Number);
        return fetchTeachersByIds(ids);
      })
      .then(setTeachers)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const directions = collective?.directions
    ? collective.directions.split(",").map(d => d.trim()).filter(Boolean)
    : [];

  if (loading) {
    return (
      <div className={styles.page}>
        <MobileHeader />
        <PageHeader />
        <p className={styles.loadingMsg}>Загрузка...</p>
        <Footer />
      </div>
    );
  }

  if (error || !collective) {
    return (
      <div className={styles.page}>
        <MobileHeader />
        <PageHeader />
        <p className={styles.loadingMsg}>{error || "Коллектив не найден"}</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <MobileHeader />

      <PageHeader crumbs={[
        { label: "Главная", to: "/" },
        { label: "Объединения", to: "/departments" },
        { label: collective.name },
      ]} />

      {/* Hero: red section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{collective.name}</h1>
          <div className={styles.heroMeta}>
            {collective.teacher_name && <span>Руководитель: {collective.teacher_name}</span>}
            {collective.age_range && (
              <>
                <span className={styles.heroDivider}>|</span>
                <span>Возраст: {collective.age_range}</span>
              </>
            )}
            {collective.schedule && (
              <>
                <span className={styles.heroDivider}>|</span>
                <span>Расписание: {collective.schedule}</span>
              </>
            )}
          </div>
          <button className={styles.enrollBtn} type="button" onClick={() => setShowEnroll(true)}>
            Записать ребёнка
          </button>
        </div>
      </section>

      {/* Description */}
      {collective.description && (
        <section className={styles.descSection}>
          <div className={styles.sectionInner}>
            <div
              className={styles.descText}
              dangerouslySetInnerHTML={{ __html: collective.description }}
            />
          </div>
        </section>
      )}

      {/* Photo */}
      {collective.photo_url && (
        <section className={styles.photoSection}>
          <div className={styles.sectionInner}>
            <img alt={collective.name} className={styles.collectivePhoto} src={collective.photo_url} />
          </div>
        </section>
      )}

      {/* Directions */}
      {directions.length > 0 && (
        <section className={styles.directionsSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Направления</h2>
            <div className={styles.directionsList}>
              {directions.map((d) => (
                <span key={d} className={styles.directionTag}>{d}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Teachers */}
      {teachers.length > 0 && (
        <section className={styles.teachersSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Педагоги</h2>
            <div className={styles.teachersGrid}>
              {teachers.map((t) => (
                <Link key={t.id} to={`/teachers/${t.id}`} className={styles.teacherCard}>
                  <div className={styles.teacherPhotoWrap}>
                    {t.photo_url ? (
                      <img src={t.photo_url} alt={t.name} className={styles.teacherPhoto} />
                    ) : (
                      <div className={styles.teacherPhotoPlaceholder} />
                    )}
                  </div>
                  <p className={styles.teacherName}>{t.name}</p>
                  {t.bio && (
                    <p className={styles.teacherBio}>
                      {t.bio.replace(/<[^>]*>/g, "").slice(0, 100)}
                      {t.bio.length > 100 ? "..." : ""}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnrollModal
        isOpen={showEnroll}
        onClose={() => setShowEnroll(false)}
        collectiveName={collective.name}
      />

      <Footer />
    </div>
  );
}
