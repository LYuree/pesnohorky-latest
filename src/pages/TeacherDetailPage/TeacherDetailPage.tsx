import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { teacherDetailAssets } from "../../lib/teacherDetailAssets";
import styles from "./TeacherDetailPage.module.css";

export default function TeacherDetailPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <Navbar />

      <div className={styles.breadcrumbs}>
        <span>Главная</span>
        <span>/</span>
        <span>О центре</span>
        <span>/</span>
        <span>Бурдина Алена Максимовна</span>
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.columns}>
            <div className={styles.photoWrap}>
              <img alt="Бурдина Алена Максимовна" className={styles.photo} src={teacherDetailAssets.imgTeacher} />
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>Бурдина Алена Максимовна</h1>

              <div className={styles.infoBlock}>
                <p className={styles.label}>Должность:</p>
                <p className={styles.value}>
                  Педагог дополнительного образования, руководитель хореографической студии «Орбита»
                </p>
              </div>

              <div className={styles.infoBlock}>
                <p className={styles.label}>Квалификация:</p>
                <p className={styles.value}>Первая квалификационная категория</p>
              </div>

              <div className={styles.infoBlock}>
                <p className={styles.label}>Преподаваемые дисциплины:</p>
                <a
                  className={styles.disciplineLink}
                  href="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruCmJoGRxK_9fJCMIUTXX3J9cg7b74OcVsrA976d4vMTurfOLgFF5eHiFan1YFmmqJjnd7w_Fu9wpqfDiV9aa9Xkb9NaOQym5g0xKF_rR2Q89bf97jU7sg9Fbikl8VGq4_g%3D%3D%3Fsign%3DRoUuD0p596CGhKN3yKHpIL5or33oOSjPqh30F5wv-Kk%3D&name=Burdina_-__Pervie_shagi.docx&nosw=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Дополнительная общеобразовательная (общеразвивающая) программа «Первые шаги»
                </a>
              </div>
            </div>
          </div>

          <div className={styles.education}>
            <h2 className={styles.educationTitle}>Направление подготовки и (или) специальности</h2>
            <p className={styles.educationText}>
              КГБПОУ «Алтайский краевой колледж культуры и искусств», 2021 год, Среднее профессиональное образование по квалификации «Руководитель любительского творческого коллектива, преподаватель» по специальности «Народное художественное творчество (по виду Хореографическое творчество);
            </p>
            <p className={styles.educationText}>
              ФГБОУ высшего образования «Омский государственный университет им. Ф.М. Достоевского» по программе повышения квалификации «I Семинар-практикум „Программа профессионального обучения детей современному танцу. Теория и практика!" в объеме 72 часа, июнь 2021 года.
            </p>
            <p className={styles.educationText}>
              Краткосрочное повышение квалификации 20–23 февраля 2023 года, Культурный фонд «Алые паруса» в рамках закрытого проекта V национальной премии в области эстрадного и детского танца «Приз хореографии Елены Барткайтис» (г. Москва, ГК «Космос») по теме: «Современные принципы работы с творческими детьми и подростками с учётом возрастной специфики».
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
