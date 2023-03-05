import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import EwhaianInfo from "./components/views/EwhaianInfoPages/EwhaianInfo";
import Event from "./components/views/EventPages/EventPages";
import TeamInfo from "./components/views/TeamInfoPages/TeamInfo";
import Update from "./components/views/UpdatePages/UpdatePage";
import RegisterLanding from "./components/views/RegisterPages/RegisterLanding";
import ExistingApplicantCheckInfo from "./components/views/RegisterPages/ExistingApplicantCheckInfo";
import CheckResult from "./components/views/ResultPages/CheckResult";
import QnA from "./components/views/QnAPages/QnA";
//어떤 파일이든 색상 변수 사용할 수 있도록, color css파일 불러오기
import "./components/utilis/color.css";
//모든 파일에서 폰트 통일
import "./components/utilis/font.css";
import NotPeriod from "./components/views/ResultPages/NotPeriod";
import NewApplicantEnroll from "./components/views/RegisterPages/NewApplicantEnroll";
import ApplySuccess from "./components/views/RegisterPages/ApplySuccess";
import UpdateSuccess from "./components/views/UpdatePages/UpdateSuccess";
import AdminLogin from "./components/views/AdminPages/AdminLogin";

import Activities from "./components/views/Activities/Activities";
//import ModifyInfo from "./components/views/ManagerPages/ModifyInfo";
import Modify from "./components/views/AdminPages/ModifyInfo";
import GenerateDB from "./components/views/AdminPages/GenerateDB";
import ApplicantList from "./components/views/AdminPages/ApplicantList";

import NotPeriodCheck from "./components/views/ResultPages/checkUI";
import DesignDetailActivity from "./components/views/TeamInfoPages/DetailActivities/DesignDetailActivity";
import WebDevDetailActivity from "./components/views/TeamInfoPages/DetailActivities/WebDevDetailActivity";
import MarketingDetailActivity from "./components/views/TeamInfoPages/DetailActivities/MarketingDetailActivity";
import PopupBackground from "./components/views/TeamInfoPages/DetailActivities/popup/PopupBackground";
import MarketingStudyProject from "./components/views/TeamInfoPages/DetailActivities/MarketingStudyProject";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/ewhaianInfo" element={<EwhaianInfo />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/teamInfo" element={<TeamInfo />} />
        <Route
          exact
          path="/teamInfo/detail/design"
          element={<DesignDetailActivity />}
        />
        <Route
          exact
          path="/teamInfo/detail/web"
          element={<WebDevDetailActivity />}
        />
        <Route
          exact
          path="/teamInfo/detail/marketing"
          element={<MarketingDetailActivity />}
        />
        <Route
          exact
          path="/teamInfo/detail/marketing/studyproject"
          element={<MarketingStudyProject />}
        />
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
        <Route exact path="/register/success" element={<ApplySuccess />} />
        <Route exact path="/update/:id" element={<Update />} />
        <Route exact path="/update/success" element={<UpdateSuccess />} />
        <Route exact path="/result/checkinfo" element={<CheckResult />} />
        <Route exact path="/result/notperiod/:id" element={<NotPeriod />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/admin/modifyInfo/:id" element={<Modify />} />
        {/*}
        <Route
          exact
          path="/result/notperiod/check"
          element={<NotPeriodCheck />}
        />
        */}
        <Route exact path="/admin/applicantList" element={<ApplicantList />} />

        <Route exact path="/admin/landing" element={<GenerateDB />} />
        <Route exact path="/QnA" element={<QnA />} />
        <Route exact path="/activities" element={<Activities />}></Route>
        <Route exact path="/popup" element={<PopupBackground />} />
      </Routes>
    </div>
  );
}

export default App;
