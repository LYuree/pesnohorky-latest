import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewsLandingPage from "./pages/NewsLandingPage/NewsLandingPage";
import AboutInfoPage from "./pages/AboutInfoPage/AboutInfoPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage/DepartmentsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage/DepartmentDetailPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import TeacherDetailPage from "./pages/TeacherDetailPage/TeacherDetailPage";
import ParentsPage from "./pages/ParentsPage/ParentsPage";
import SafetyPage from "./pages/SafetyPage/SafetyPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import SocialCertPage from "./pages/SocialCertPage/SocialCertPage";
import PaidServicesPage from "./pages/PaidServicesPage/PaidServicesPage";
import SmartHolidaysPage from "./pages/SmartHolidaysPage/SmartHolidaysPage";
import AntiCorruptionPage from "./pages/AntiCorruptionPage/AntiCorruptionPage";
import QualityAssessmentPage from "./pages/QualityAssessmentPage/QualityAssessmentPage";
import AntiExtremismPage from "./pages/AntiExtremismPage/AntiExtremismPage";
import TemperaturePage from "./pages/TemperaturePage/TemperaturePage";
import StructurePage from "./pages/StructurePage/StructurePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import LeadershipPage from "./pages/LeadershipPage/LeadershipPage";
import TeachersStaffPage from "./pages/TeachersStaffPage/TeachersStaffPage";
import FacilitiesPage from "./pages/FacilitiesPage/FacilitiesPage";
import PaidEducationPage from "./pages/PaidEducationPage/PaidEducationPage";
import FinancesPage from "./pages/FinancesPage/FinancesPage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import ScholarshipsPage from "./pages/ScholarshipsPage/ScholarshipsPage";
import InternationalPage from "./pages/InternationalPage/InternationalPage";
import NutritionPage from "./pages/NutritionPage/NutritionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsLandingPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/teachers/:id" element={<TeacherDetailPage />} />

        {/* Родителям */}
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/parents/safety" element={<SafetyPage />} />
        <Route path="/parents/privacy" element={<PrivacyPage />} />
        <Route path="/parents/social-cert" element={<SocialCertPage />} />
        <Route path="/parents/paid-services" element={<PaidServicesPage />} />
        <Route path="/parents/smart-holidays" element={<SmartHolidaysPage />} />
        <Route path="/parents/anti-corruption" element={<AntiCorruptionPage />} />
        <Route path="/parents/quality-assessment" element={<QualityAssessmentPage />} />
        <Route path="/parents/anti-extremism" element={<AntiExtremismPage />} />
        <Route path="/parents/temperature" element={<TemperaturePage />} />

        {/* Сведения об образовательной организации */}
        <Route path="/about-info" element={<AboutInfoPage />} />
        <Route path="/about-info/structure" element={<StructurePage />} />
        <Route path="/about-info/documents" element={<DocumentsPage />} />
        <Route path="/about-info/education" element={<EducationPage />} />
        <Route path="/about-info/leadership" element={<LeadershipPage />} />
        <Route path="/about-info/teachers-staff" element={<TeachersStaffPage />} />
        <Route path="/about-info/facilities" element={<FacilitiesPage />} />
        <Route path="/about-info/paid-education" element={<PaidEducationPage />} />
        <Route path="/about-info/finances" element={<FinancesPage />} />
        <Route path="/about-info/vacancies" element={<VacanciesPage />} />
        <Route path="/about-info/scholarships" element={<ScholarshipsPage />} />
        <Route path="/about-info/international" element={<InternationalPage />} />
        <Route path="/about-info/nutrition" element={<NutritionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
