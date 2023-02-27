import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplicantList() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/admin/applicantlist")
      .then((response) => {
        //로그인 안 했으면 login 창으로
        if (response.data.loggedIn !== true)
          navigate(`/admin/login`, { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred: ", error.response);
      });
  }, []);

  return <div>ApplicantList</div>;
}

export default ApplicantList;
