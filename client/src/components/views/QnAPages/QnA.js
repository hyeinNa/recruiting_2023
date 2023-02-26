import React, {useEffect} from "react";
import "./QnA.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function QnA() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    },[])
    return (
      <div className="qna_container">
        <div className="qna_inner_container">
          <div className="qna_title">자주 묻는 질문</div>
            <div className="qna_question_list">
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 운영진 모집에 있어 우대하는 학과가 있나요?</div>
                    <div className="qna_answer">아니요! 이화이언 운영진에는 다양한 전공의 벗들이 속해 있어, 이화이언을
                    사랑하는 마음과 열정으로 충분히 운영진 활동을 펼쳐나갈 수 있답니다!
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up" data-aos-delay= "1000">
                    <div className="qna_question">Q. 운영진 활동을 위한 필수 조건이 있나요?</div>
                    <div className="qna_answer">앞서 말씀드린 것처럼 이화이언에 대한 애정과 열정이 제일 중요하겠지만, 
                    학번에 상관 없이 2년 이상 활동이 가능해야 한답니다.
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up" data-aos-delay= "2000">
                    <div className="qna_question">Q. 운영진에게 주어지는 혜택이 있나요?</div>
                    <div className="qna_answer">이화이언 운영진에게는 매달 전체 운영진 회식비가 제공되고, 우수 운영진
                    대상으로는 기프티콘도 지급됩니다. 또한 인터넷 강의나 교육 도서, 유료
                    프로그램도 지원되며 매 학기 우수 운영진에게 장학금까지 지급되는
                    이화이언! 정말 다양한 혜택으로 가득하지 않나요! &#40;p.s. 이 밖에도 들어오면
                    많은 혜택과 좋은 점들이 가득하답니다!&#41;
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 시험 기간에도 운영진 활동이나 업무가 존재하나요?</div>
                    <div className="qna_answer">시험 기간에는 미리 운영진 내 투표를 통해 휴회 날짜를 정한 후, 1-2주 정도
                    전체 회의를 쉬어가게 됩니다. 
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 운영진 수료 후 관련하여 나아갈 수 있는 진로가 있나요?</div>
                    <div className="qna_answer">이화이언은 다방면의 경험을 깊게 쌓아갈 수 있는 최고의 포트폴리오와도
                    같다고 하죠! 이화이언의 활동이라면 어디든 유용하게 사용될 수 있는 소중한 경험과도 같답니다!
                    현재 이화이언을 수료하신 다수의 선배님들께서는 삼성전자, LG, 중앙일보, 
                    JTBC, 디즈니, 롯데, 신한은행 등 이화이언에서의 다양한 경험을 필두로 여러
                    분야에서 활발하게 활동하고 계시다는 점!
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 팀과 관련된 활동이나 경력이 없는데 지원이 가능한가요?</div>
                    <div className="qna_answer">네, 가능합니다! 수습 운영진으로 활동하는 기간 동안, 팀 수습 과제를 통해
                    팀 업무에 대한 이해도를 높일 수 있습니다.
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 팀 활동을 제외하고, 운영진으로서 어떤 활동을 하나요?</div>
                    <div className="qna_answer">팀 업무를 제외하고, 건전한 사이트 운영을 위한 모니터링 업무와 이화이언
                    행사 운영 등의 활동을 하게 됩니다.
                    </div>
                </li>
                <li className="qna_question_list_box" data-aos="fade-up">
                    <div className="qna_question">Q. 다른 팀과의 교류가 있나요?</div>
                    <div className="qna_answer">네, 있습니다! 전체 회의 시간과 업무에 대한 교류는 물론, 회식과 MT 등의
                    활동을 통해 다른 팀 운영진들과 교류할 수 있습니다.
                    </div>
                </li>
    
            </div>   

        </div>
        </div>
        

    );
}

export default QnA;