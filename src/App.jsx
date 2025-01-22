import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Container from "./components/common/Layouts/container";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
