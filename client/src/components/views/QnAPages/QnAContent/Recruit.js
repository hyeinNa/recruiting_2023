import React, { useEffect } from "react";
import "../QnAContent.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Recruit() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
            
        <div className="qna_question_list">
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 운영진 모집에 있어 우대하는 학과가 있나요?</div>
                <div className="qna_answer">아니요! 이화이언 운영진에는 다양한 전공의 벗들이 속해 있어, 이화이언을
                    사랑하는 마음과 열정으로 충분히 운영진 활동을 펼쳐나갈 수 있답니다!
                </div>
            </li>
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 지원서를 잘 못 제출했는데, 수정이 가능한가요?</div>
                <div className="qna_answer">네, 지원서 제출 기한 전까지는 지원하기 페이지에서 기존 지원자를 선택하시면
                    해당 페이지에서 수정이 가능합니다.
                </div>
            </li>            
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 운영진 활동을 위한 필수 조건이 있나요?</div>
                <div className="qna_answer">이화이언에 대한 애정과 열정이 제일 중요하겠지만,
                    학번에 상관 없이 최소 2년 활동이 가능해야 합니다.
                </div>
            </li>
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 팀과 관련된 활동이나 경력이 없는데 지원이 가능한가요?</div>
                <div className="qna_answer">네, 가능합니다! 수습 운영진으로 활동하는 기간 동안, 팀 수습 과제를 통해
                    팀 업무에 대한 이해도를 높일 수 있습니다.
                </div>
            </li>
        </div>
    )

}


export default Recruit;