import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Container from "./components/common/Layouts/container";
import ResultPage from "./pages/ResultPage";
import QuestionPage from "./pages/QuestionPage";
import { LanguageProvider } from "./hooks/useLanguage";

function App() {
  return (
    <LanguageProvider>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Container>
    </LanguageProvider>
  );
}

export default App;
