import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewsLandingPage from "./pages/NewsLandingPage/NewsLandingPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import DepartmentsPage from "./pages/DepartmentsPage/DepartmentsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage/DepartmentDetailPage";
import TeacherDetailPage from "./pages/TeacherDetailPage/TeacherDetailPage";
import TeachersStaffPage from "./pages/TeachersStaffPage/TeachersStaffPage";
import ParentsPage from "./pages/ParentsPage/ParentsPage";
import LeadershipPage from "./pages/LeadershipPage/LeadershipPage";
import StaticPage from "./pages/StaticPage/StaticPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Страницы с уникальной логикой */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsLandingPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailPage />} />
        <Route path="/teachers" element={<TeachersStaffPage />} />
        <Route path="/teachers/:id" element={<TeacherDetailPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/about-info/leadership" element={<LeadershipPage />} />
        <Route path="/about-info/teachers-staff" element={<Navigate to="/teachers" replace />} />

        {/* Всё остальное — CMS-страницы из админки */}
        <Route path="*" element={<StaticPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
