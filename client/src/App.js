import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
<<<<<<< HEAD
import LandingPage from "./components/views/main/main";
=======
//어떤 파일이든 색상 변수 사용할 수 있도록, color css파일 불러오기
import "./components/utilis/color.css";
>>>>>>> dadab69bd7750067d20281b55b068505331cd7f2

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
