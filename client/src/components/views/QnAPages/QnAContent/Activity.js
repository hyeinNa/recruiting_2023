import React, { useEffect } from "react";
import "../QnAContent.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Activity() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
            
        <div className="qna_question_list">
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 운영진에게 주어지는 혜택이 있나요?</div>
                <div className="qna_answer">이화이언 운영진에게는 매달 전체 운영진 회식비가 제공되고,
                    우수 운영진 대상으로는 기프티콘도 지급됩니다. 또한 인터넷 강의나 교육 도서, 유료 프로그램도
                    지원되며 매 학기 우수 운영진에게 소정의 장학금을 지급합니다. 정말 다양한 혜택으로 가득하지 않나요?

                    &#40;p.s. 이 밖에도 들어오면 많은 혜택과 좋은 점들이 가득하답니다!&#41;
                </div>
            </li>
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 시험 기간에도 운영진 활동이나 업무가 존재하나요?</div>
                <div className="qna_answer">시험 기간에는 운영진 내 투표를 통해 휴회 날짜를 정한 후, 1-2주
                    정도 전체 회의를 쉬어가게 됩니다.
                </div>
            </li>            
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 팀 활동을 제외하고, 운영진으로서 어떤 활동을 하나요?</div>
                <div className="qna_answer">팀 업무를 제외하고, 건전한 사이트 운영을 위한 모니터링 업무와
                    이화이언 행사 운영 등의 활동을 하게 됩니다.
                </div>
            </li>
            <li className="qna_question_list_box" data-aos="fade-up">
                <div className="qna_question">Q. 이화이언의 활동 요일은 언제인가요?</div>
                <div className="qna_answer">이화이언은 시험기간과 공휴일을 제외하고, 매주 월요일
                    저녁에 전체 회의를 진행합니다. 전체 회의 시간은 매 학기 운영진의 투표를 통해 결정됩니다.
                </div>
            </li>
        </div>
    )

}


export default Activity;