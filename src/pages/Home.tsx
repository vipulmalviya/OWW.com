import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../style.css'

const Home = () => {


  return (
    <div>
      <main id="main">
        {/* <!-- heroSection --> */}
        <section className="section">
          <div className="demo flex">
            <div className="vid">
              <video className="vids" src="src/assets/OWW Post.mp4" loop={true}></video>
            </div>
          </div>
          <div className="container hero">
            <div className="flex heroFlex">
              <div className="heroText">
                <div className="heroka">
                  <span className="top sectionTitleT"> top </span>
                  <div className="animationText">
                    <span className="notch sectionTitleN"> notch</span>
                    <div className="words">
                      <span>development</span>
                      <span>security</span>
                      <span>design</span>
                    </div>
                  </div>
                  <span className="solution sectionTitleT">solution</span>
                  <p className="p">
                    Are you struggling to make your mark on the digital landscape? Our comprehensive web solutions will
                    catapult your business to new heights.
                  </p>
                </div>
                <div className="mainbutton flexcenter">
                  <div className="heroBtn playb">
                    <div className="play">
                      <div className="playBtn">
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                    <div className="effect hover-text btnText"></div>
                  </div>
                </div>
              </div>
              <div className="heroImg flex">
                <img className="img1 img" src="src/assets/Group 3.svg" alt="" />
                <img className="img2 img" src="src/assets/Group 2.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <hr />
        {/* <!-- aboutSection --> */}
        <section className="section" id="about">
          <div className="container aboutContainer">
            <div className="flex aboutSection">
              <div className="aboutImg">
                <img className="abimg" src="src/assets/aboutus.svg" alt="" />
              </div>
              <div className="aboutText">
                <h4 className="lable lable2 flex">
                  <span className="flexcenter textspan"><span className="line"></span></span>
                  about us
                </h4>
                <div className="sectionTitle">Your Partner in Digital Excellence</div>
                <p className="p">
                  At Old World Web, we craft captivating online experiences through expert web development, design,
                  security, and maintenance services. Elevate your digital presence today.
                </p>
                <div className="sectionBtn">
                  <a href="">about us</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />
        {/* service section */}

        <section className="section" id="serv">
          <div className="container service">
            <div className="flex col serviceGrid">
              <div className="flex topcase">
                <div className="serviceGridBox">
                  <h4 className="lable lable2 flex">
                    <span className="flexcenter textspan"><span className="line"></span></span>
                    service
                  </h4>
                  <div className="sectionTitle">Crafting, Securing, and Elevating your Online Presence</div>
                  <p className="p">
                    Empowering web solutions: development, design, security, maintenance. Elevate your online presence with us.
                  </p>
                </div>
                <div className="serviceGridBox carousalBoxBtn">
                  <div className="carousalBtn">
                    <div className="preBtn" id="prevBtn">prev</div>
                    <div className="nextBtn" id="nextBtn">next</div>
                  </div>
                </div>
              </div>
              <div className="slider">
                <div className="owl-carousel carousel-one">
                  <div className="slide">
                    <div className="iconImg">
                      <img src="src/assets/big-paint-brush-svgrepo-com 1.svg" alt="" />
                    </div>
                    <div className="cent flex">
                      <h2>ui & ux designing</h2>
                      <p>
                        Crafting immersive interfaces that delight users. Elevate engagement with seamless design, intuitive
                        navigation, and captivating visuals.
                      </p>
                    </div>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>

                  <div className="slide">
                    <div className="iconImg">
                      <img src="src/assets/code-svgrepo-comwhite 1.svg" alt="" />
                    </div>
                    <div className="cent flex">
                      <h2>web development</h2>
                      <p>
                        Turning ideas into digital reality. Expert coding, responsive design, and scalable solutions that
                        empower your online vision.
                      </p>
                    </div>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>

                  <div className="slide">
                    <div className="iconImg">
                      <img src="src/assets/maintenance-mechanic-repair-svgrepo-com 1.svg" alt="" />
                    </div>
                    <div className="cent flex">
                      <h2>web maintenance</h2>
                      <p>
                        Sustain digital excellence effortlessly. Timely updates, bug fixes, and optimizations to keep your
                        website running flawlessly.
                      </p>
                    </div>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="iconImg">
                      <img src="src/assets/fingerprint-svgrepo-com 1.svg" alt="" />
                    </div>
                    <div className="cent flex">
                      <h2>web security</h2>
                      <p>
                        Shielding your digital fortress. Robust security protocols, encryption, and vigilant monitoring to
                        safeguard your data and user trust.
                      </p>
                    </div>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* <!-- serviceSection --> */}
        <section className="section">
          <div className="container contactContainer">
            <div className="flex heroFlex contactSection">
              <div className="contactForm">
                <h4 className="lable  flex">
                  <span className="flexcenter textspan"><span className="line"></span></span>
                  lets get started
                </h4>
                <div className="sectionTitle">Get a Free Consultation</div>
                <p className="p">
                  We always try to implement our creative ideas at the highest level. Talk to us about your project, and we'll make it work.
                </p>
                <form action="" className="form" method="post">
                  <div className="flex inputs">
                    <input type="text" placeholder="Name" className="name" />
                    <input type="email" placeholder="Email" required className="email" />
                  </div>
                  <textarea name="message" id="" className="message" placeholder="Message" required></textarea>
                  <button type="submit" className="submit">
                    <div className="btn">
                      <span className="btnVisible">get a quote <i className="bx bx-chevron-right"></i></span>
                      <span className="btnInVisible">get a quote <i className="bx bx-chevron-right"></i></span>
                    </div>
                  </button>
                </form>
              </div>
              <div className="contactillu">
                <img className="sentm" src="src/assets/sentm.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <hr />

        {/* whychoose us section */}
        <section className="section">
          <div className="container wallFram">
            <div className="flex heroFlex choose">
              <div className="chooseBox">
                <div className="grid chooseGrid">
                  <div className="chooseitem">
                    <div className="number">235<sup>+</sup></div>
                    <p>satisfied clients</p>
                  </div>

                  <div className="chooseitems">
                    <div className="number">15<sup>+</sup></div>
                    <p>awards winning</p>
                  </div>

                  <div className="chooseitems">
                    <div className="number">35<sup>+</sup></div>
                    <p>team members</p>
                  </div>

                  <div className="chooseitems">
                    <div className="number">354<sup>+</sup></div>
                    <p>successful projects</p>
                  </div>
                </div>
              </div>
              <div className="chooseText">
                <h4 className="lable  flex">
                  <span className="flexcenter textspan"><span className="line"></span></span>
                  a few words
                </h4>
                <div className="sectionTitle">why choose us</div>
                <p className="p">
                  Recognized with prestigious awards, our solutions have achieved international renown.
                </p>
                <div className="chooseTick">
                  <i className="bx bxs-check-circle" style={{ color: '#9747ff' }}></i>
                  <h3>Innovative Solutions</h3>
                </div>
                <p className="p">
                  Crafting unique digital experiences that resonate with your audience.
                </p>
                <div className="chooseTick">
                  <i className="bx bxs-check-circle" style={{ color: '#9747ff' }}></i>
                  <h3>Advanced Protections</h3>
                </div>
                <p className="p">
                  Utilizing cutting-edge technology to safeguard your digital assets.
                </p>
                <div className="chooseTick">
                  <i className="bx bxs-check-circle" style={{ color: '#9747ff' }}></i>
                  <h3>User-Centric Approach</h3>
                </div>
                <p className="p">
                  Prioritizing user engagement and seamless navigation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* case section */}

        <section className="section" id="case">
          <div className="container containerCase">
            <div className="flex col caseSection">
              <div className="flex topcase">
                <div className="caseItems">
                  <h4 className="lable lable2 flex">
                    <span className="flexcenter textspan"><span className="line"></span></span>
                    let's get started
                  </h4>
                  <div className="sectionTitle">our latest cases</div>
                  <p className="casep p">we always try to improve our creative ideas at the highest level. you can see it by looking at the portfolio.</p>
                </div>
                <div className="caseItems carousalBoxBtn">
                  <div className="col2 flex">
                    <div className="sectionBtn caseBtn"><a href="case.html">see all cases</a></div>
                    <div className="carousalBtn">
                      <div className="preBtn" id="cprevBtn">prev</div>
                      <div className="nextBtn" id="cnextBtn">next</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="caseSlider">
                <div className="owl-carousel">
                  <div className="caseSlide1 caseSlide">
                    <video className="vid" src="src/assets/SB.mp4"></video>
                    <div className="caseInfo">
                      <h3>Satyam Bhuyaan</h3>
                      <p style={{ color: 'white !important' }}>Web development</p>
                      <a href="https://satyambhuyan.com/">
                        <span className="effect hover-text arrowIcon"><span></span></span>
                      </a>
                    </div>
                  </div>
                  <div className="caseSlide2 caseSlide">
                    <video className="vid" src="src/assets/OWW.mp4"></video>
                    <div className="caseInfo">
                      <h3>OldWorldWeb</h3>
                      <p style={{ color: 'white !important' }}>Web development</p>
                      <a href="https://www.oldworldweb.com/">
                        <span className="effect hover-text arrowIcon"><span></span></span>
                      </a>
                    </div>
                  </div>
                  <div className="caseSlide3 caseSlide">
                    <video className="vid" src="src/assets/Refine.mp4"></video>
                    <div className="caseInfo">
                      <h3>Refine Creations</h3>
                      <p style={{ color: 'white !important' }}>Web development</p>
                      <a href="https://refinecreations.com/">
                        <span className="effect hover-text arrowIcon"><span></span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />

        {/*  */}
        <section className="section">
          <div className="container blogPost">
            <div className="recentPost">
              {/* <div className="serviceLable">recent post</div> */}
              <h4 className="label flex">
                <span className="flexcenter textspan"><span className="line"></span></span>
                Recent Posts
              </h4>
              <div className="sectionTitle">Latest in Tech</div>
              <p className="blogPostp p">You may be interested in our technologies. We want to share more helpful information with you about our digital life and methods.</p>
              <div className="blog">
                <div className="postContainer">
                  <div className="postImg">
                    <img src="src/assets/Rectangle 27.png" alt="" />
                  </div>
                  <div className="postText">
                    <div className="category">
                      <div className="categoryLabel">Digital</div>
                      <div className="date">April 06, 2020</div>
                    </div>
                    <h3 className="postCardTitle">Where to Find Clients and How to Develop Cool.</h3>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>
                </div>
                <div className="postContainer">
                  <div className="postImg">
                    <img src="src/assets/Rectangle 28.png" alt="" />
                  </div>
                  <div className="postText">
                    <div className="category">
                      <div className="categoryLabel">Web</div>
                      <div className="date">April 06, 2020</div>
                    </div>
                    <h3 className="postCardTitle">If You Want to Learn More About Design, Look at This.</h3>
                    <div className="effect hover-text readMore">
                      <a href=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recentPostImg">
              <div className="recenttt">
                <div className="category category2">
                  <div className="categoryLabel">Web</div>
                  <div className="date">April 06, 2020</div>
                </div>
                <h3 className="postCardTitle">If You Want to Learn More About Design, Look at This.</h3>
                <div className="effect hover-text readMore featureBtn">
                  <a href=""></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />

        {/* newsletter */}

        <section className="section">
          <div className="container contactContainer">
            <div className="flex contactSection">
              <div className="contactForm">
                {/* <div className="contactLable">newsLetter</div> */}
                <h4 className="label flex">
                  <span className="flexcenter textspan"><span className="line"></span></span>
                  newsLetter
                </h4>
                <div className="sectionTitle">be always in touch</div>
                <p className="p">
                  We are grateful to know that you are interested in our content and services. Subscribe..!
                </p>
                <form action="" className="newsLatterform">
                  <input type="email" placeholder="Email" required className="email" />
                  <div className="play">
                    <div className="playBtn thertyfive">
                      <i className="bx bx-send submit"></i>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contactImg">
                <div className="newsletterText">
                  <div className="intro flex">
                    <img src="src/assets/Ellipse 14.png" alt="" />
                    <div className="names">
                      <span>Antonio Rodriguez</span> <br />
                      <p>CEO, Jio Digital Life</p>
                    </div>
                  </div>
                  <div className="gratitude">
                    <p>We are grateful to know that you are <br />
                      interested in our content and services. Subscribe.!</p>
                  </div>
                  <img src="src/assets/signature (3) 1.png" alt="" className="signatureImg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />

      </ main>
    </div>
  )
}

export default Home
