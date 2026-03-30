import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsLandingPage from "./pages/NewsLandingPage/NewsLandingPage";
import AboutInfoPage from "./pages/AboutInfoPage/AboutInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsLandingPage />} />
        <Route path="/about-info" element={<AboutInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
