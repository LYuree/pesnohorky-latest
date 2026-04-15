import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { fetchCollectives, type CollectiveListItem } from "../../lib/api";
import styles from "./DepartmentsPage.module.css";

export default function DepartmentsPage() {
  const [collectives, setCollectives] = useState<CollectiveListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCollectives()
      .then(setCollectives)
      .catch(() => setCollectives([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <MobileHeader />

      <PageHeader crumbs={[
        { label: "Главная", to: "/" },
        { label: "Объединения" },
      ]} />

      {/* Red hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Объединения и Коллективы</h1>
        </div>
      </section>

      {/* White content */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {loading && <p className={styles.emptyMsg}>Загрузка...</p>}

          {!loading && collectives.length === 0 && (
            <p className={styles.emptyMsg}>Коллективов пока нет</p>
          )}

          {!loading && collectives.length > 0 && (
            <div className={styles.collectivesGrid}>
              {collectives.map((c) => (
                <Link className={styles.collectiveCard} key={c.id} to={`/departments/${c.id}`}>
                  <div className={styles.collectiveImgWrap}>
                    {c.photo_url ? (
                      <img alt={c.name} className={styles.collectiveImg} src={c.photo_url} />
                    ) : (
                      <div className={styles.collectiveImgPlaceholder} />
                    )}
                  </div>
                  <div className={styles.collectiveInfo}>
                    <h2 className={styles.collectiveName}>{c.name}</h2>
                    {c.teacher_name && (
                      <p className={styles.collectiveMeta}>Руководитель: {c.teacher_name}</p>
                    )}
                    {c.age_range && (
                      <p className={styles.collectiveMeta}>Возраст: {c.age_range}</p>
                    )}
                  </div>
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
