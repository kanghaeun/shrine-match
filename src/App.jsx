import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Container from "./components/common/Layouts/container";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </Container>
  );
}

export default App;
