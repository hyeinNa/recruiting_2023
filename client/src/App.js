import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import EwhaianInfo from "./components/views/EwhaianInfo";
//어떤 파일이든 색상 변수 사용할 수 있도록, color css파일 불러오기
import "./components/utilis/color.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/ewhaianInfo" element={<EwhaianInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
