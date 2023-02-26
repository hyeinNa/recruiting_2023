import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import EwhaianInfo from "./components/views/EwhaianInfo";
import TeamInfo from "./components/views/TeamInfoPages/TeamInfo";
import Update from "./components/views/UpdatePages/UpdatePage";
import RegisterLanding from "./components/views/RegisterPages/RegisterLanding";
import ExistingApplicantCheckInfo from "./components/views/RegisterPages/ExistingApplicantCheckInfo";
import CheckResult from "./components/views/ResultPages/CheckResult";
import ShowResult from "./components/views/ResultPages/ShowResult";
//어떤 파일이든 색상 변수 사용할 수 있도록, color css파일 불러오기
import "./components/utilis/color.css";
//모든 파일에서 폰트 통일
import "./components/utilis/font.css";
import NotPeriod from "./components/views/ResultPages/NotPeriod";
import NewApplicantEnroll from "./components/views/RegisterPages/NewApplicantEnroll";
import AdminLogin from "./components/views/AdminPages/AdminLogin";
import ModifyInfo from "./components/views/ManagerPages/ModifyInfo";
import GenerateDB from "./components/views/ManagerPages/GenerateDB";
import Activities from "./components/views/Activities/Activities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/ewhaianInfo" element={<EwhaianInfo />} />
          <Route exact path="/teamInfo" element={<TeamInfo />} />
          <Route exact path="/register" element={<RegisterLanding />} />
          <Route
            exact
            path="/register/checkinfo"
            element={<ExistingApplicantCheckInfo />}
          />
          <Route
            exact
            path="/register/newEnroll"
            element={<NewApplicantEnroll />}
          />
          <Route exact path="/update/:id" element={<Update />} />
          <Route exact path="/result/checkinfo" element={<CheckResult />} />
          <Route exact path="/result/:id" element={<ShowResult />} />
          <Route exact path="/result/notperiod/:id" element={<NotPeriod />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route
            exact
            path="/manager/modifyInfo/:id"
            element={<ModifyInfo />}
          />
          <Route exact path="/manager/generate" element={<GenerateDB />} />
          <Route exact path="/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
