import "./EventPages.css"


function EventPages() {
    return (
        <div id="wrap">
            <div className="event_inner_container">
                <div className="event_inner_inner_container">
                    <section className="event_title">이벤트</section>
                    <section className="event_description">
                    이화이언은 온라인, 오프라인 두 분야에서 다채로운 이벤트를 진행하고 있습니다.
                    <br />  
                    이화이언이 5월, 11월에 개최하는 오월드림과 배꽃정원 행사는 매년 이화인들에게 색다른 즐거움을 선사하고 있습니다.
                    </section>
            

                    <div className="events_pic">
                        <div className="event_pic_inner">
                        <div className="classopeningbooth">
                            <div className="classopeningbooth_content">
                                <div className="classopeningbooth_title">개강부스
                                                    <br /><div className="classopeningbooth_plus">&nbsp;+ </div></div>
                                <div className="classopeningbooth_description">
                                    매 해 3월과 9월, 개강을 맞이한 벗들을 위한 소소한 이벤트!
                                    <br />
                                    벗들의 새로운 시작을 응원하는 소중한 경험으로 당신을 초대합니다!
                                </div>
                            </div>
                        </div>

                        <div className="may">
                            <div className="may_content">
                                <div className="may_title">오월드림
                                                    <br /><div className="may_plus">&nbsp;+ </div></div>
                                <div className="may_description">
                                    꽃이 만개하는 5월,
                                    <br />
                                    오월드림은 매년 색다른 테마의 프로젝트로 이화인들을 찾아갑니다.
                                    <br />
                                    싱그러운 봄, 이화인들에게 특별하고 따뜻한 기억을 선사하는 오월드림.
                                    <br />
                                    다음 5월의 프로젝트를 꾸려나갈 주인공이 되어보는 건 어떨까요?
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="event_pic_inner">
                        <div className="pearflowergarden">
                            <div className="pearflowergarden_content">
                                <div className="pearflowergarden_title">배꽃정원
                                                    <br /><div className="pearflowergarden_plus">&nbsp;+ </div></div>
                                <div className="pearflowergarden_description">
                                가을볕이 따스한 11월,
                                    <br />
                                    배꽃정원에는 매년 색다른 재능 나눔 부스와 협찬 기업 부스 그리고 푸짐한 상품이 준비되어 있습니다.
                                    <br />
                                    이화인들 간의 따뜻하고 깊은 정을 나눌 수 있는 다양한 이벤트를 직접 기획해보세요!
                                </div>
                            </div>
                        </div>

                        <div className="offlineevent">
                            <div className="offlineevent_content">
                                <div className="offlineevent_title">오프라인 이벤트
                                                    <br /><div className="offlineevent_plus">&nbsp;+ </div></div>
                                <div className="offlineevent_description">
                                이화이언은 유저들에게 유익한 경험을 제공하기 위해 최선을 다합니다.
                                    <br />
                                    네트워킹부터 강연까지, 온라인 커뮤니티의 한계를 넘어 오프라인에서도 이화 안의 더 큰 만남을 도모합니다.
                                    <br />
                                    우리의 꿈이 숨 쉬는 곳, 이화이언~~
                                </div>
                            </div>
                        </div>
                        </div>
                        
                
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EventPages;