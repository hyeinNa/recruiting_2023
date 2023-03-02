import React, { useEffect } from "react";
import "../QnAContent.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Etc() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
            
        <div className="qna_question_list">
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 다른 팀과의 교류가 있나요?</div>
                <div className="qna_answer">네, 있습니다! 전체 회의 시간과 업무에 대한
                    교류는 물론, 회식과 MT 등의 활동을 통해 다른 팀 운영진들과 교류할 수 있습니다.
                </div>
            </li>
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 운영진 수료 후 관련하여 나아갈 수 있는 진로가 있나요?</div>
                <div className="qna_answer">이화이언은 다방면의 경험을 깊게 쌓아갈 수 있는 최고의 포트폴리오와도 같다고 하죠!
                    이화이언에서의 활동은 어디든 유용하게 사용될 수 있는 소중한 경험과도 같답니다.
                </div>
                <div className="qna_answer">현재 이화이언을 수료하신 다수의 선배님들께서는 삼성전자, LG, 중앙일보, JTBC,
                    디즈니, 롯데, 신한은행 등 이화이언에서의 다양한 경험을 필두로 여러 분야에서 활발하게 활동하고 계십니다.
                </div>
            </li>            
        </div>
    )

}


export default Etc;