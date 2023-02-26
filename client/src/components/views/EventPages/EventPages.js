import "./EventPages.css"
import "./slick.css"
import "./slick.min.js"

function EventPages() {
    return (
        <div id="wrap">
            <div className="header">
                <section className="title">이벤트</section>
                <section className="describe">
                이화이언은 온라인, 오프라인 두 분야에서 다채로운 이벤트를 진행하고 있습니다.
                <br/>  
                이화이언이 5월, 11월에 개최하는 오월드림과 배꽃정원 행사는
                <br />
                매년 이화인들에게 색다른 즐거움을 선사하고 있습니다.
                </section>
            </div>

            <div className="may">
                <section className="slider"> 
                    <figure>
                        <img src="" alt="may_img1" />
                    </figure>
                    <figure>
                        <img src="" alt="may_img2" />
                    </figure>
                    <figure>
                        <img src="" alt="may_img3" />
                    </figure>
                    <figure>
                        <img src="" alt="may_img4" />
                    </figure>
                </section>

                <section className="may_article">
                    <article className="may_title">오월드림</article>
                    <article className="may_site">행사 사이트 보러가기</article>
                    <article className="may_describe">
                    꽃이 만개하는 5월, 오월드림은 매년 색다른 테마의 
                    <br />
                    프로젝트로 이화인들을 찾아갑니다. 오월드림은 
                    <br />
                    운영진들과 함께 게임도 하고 선물도 받아가는 이벤트 
                    <br />
                    프로그램, 비밀의 화원에 접속하지 못한 이화인들을 위한 
                    <br />
                    인증부터 특별 이벤트, 마지막으로 봄의 활기를 가득 
                    <br />
                    돋아줄 공연과 토크쇼까지 아주 다채롭게 구상되어 있는 
                    <br />
                    이화이언의 오프라인 이벤트입니다.
                    </article>
                </section>
            </div>

            <div className="pearflower">
                <section className="pearflower_article">
                <article className="pearflower_title">배꽃정원</article>
                    <article className="pearflower_site">행사 사이트 보러가기</article>
                    <article className="pearflower_describe">
                    이화이언’을 대표하는 행사로, 이화이언 유저들을 
                    <br />
                    위한 여러 프로그램이 진행되는 이벤트입니다.
                    <br />
                    배꽃정원은 이화인들이 매년 주인공이 되어 꾸려가는
                    <br />
                    재능 나눔 꿀단지 부스와 공연 부스, 푸짐한 상품으로 
                    <br />
                    가득찬 참여형 프로그램과 게임 이벤트, 이화인들 간의 
                    <br />
                    따뜻하고 깊은 정을 나눌 수 있는 벗어롱과 같은 
                    <br />
                    친목 이벤트까지 모두 체험해 볼 수 있는 이벤트 입니다.
                    </article>
                </section>
                <section className="slider"> 
                    <figure>
                        <img src="" alt="pearflower_img1" />
                    </figure>
                    <figure>
                        <img src="" alt="pearflower_img2" />
                    </figure>
                    <figure>
                        <img src="" alt="pearflower_img3" />
                    </figure>
                    <figure>
                        <img src="" alt="pearflower_img4" />
                    </figure>
                </section>
            </div>

        </div>

    );
}

export default EventPages;