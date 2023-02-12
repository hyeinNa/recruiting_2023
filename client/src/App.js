import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import LandingPage from "./components/views/main/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
