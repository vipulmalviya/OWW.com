import ServiceSlider from "../components/ServiceSlider";
import CaseSlider from "../components/CaseSlider";
import { useState, useRef, useEffect } from "react";
import Contactform from "../components/Contactform";
import Contactemail from "../components/Contactemail";


const Home = () => {

  useEffect(() => {
    const img1 = document.querySelector(".img1") as HTMLImageElement | null;
    const img2 = document.querySelector(".img2") as HTMLImageElement | null;
    const img3 = document.querySelector(".abimg") as HTMLImageElement | null;
    const img4 = document.querySelector(".sentm") as HTMLImageElement | null;

    const updateImageSources = () => {
      const isDarkMode = document.body.classList.contains("dark-theme");

      if (img1 && img2 && img3 && img4) {
        if (isDarkMode) {
          img1.src = "/src/assets/Hero-img.png";
          img2.src = "/src/assets/Hero-img.png";
          img3.src = "/src/assets/aboutus=img.png";
          img4.src = "/src/assets/Sent Message-cuate 1.svg";
        } else {
          img1.src = "/src/assets/Group 2.svg";
          img2.src = "/src/assets/Group 3.svg";
          img3.src = "/src/assets/Application programming interface-pana.png";
          img4.src = "/src/assets/sentm.svg";
        }
      }
    };
    updateImageSources();
    const bodyObserver = new MutationObserver(updateImageSources);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => bodyObserver.disconnect();
  }, []);


  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current as HTMLVideoElement | null;

    if (video) {
      if (isPlaying) {
        video.muted = true;
        video.autoplay = false;
        video.currentTime = 0;
      } else {
        video.muted = false;
        video.autoplay = true;
        video.currentTime = 0;
      }

      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div>
      <main id="main">
        {/* <!-- heroSection --> */}
        <section className="section">
          <div className={isPlaying ? "demo on" : "demo"} onClick={toggleVideo}>
            <div className="vid">
              <video className="vids" ref={videoRef} src="/src/assets/OWW Post.mp4"></video>
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
                  <div className="heroBtn playb" onClick={toggleVideo}>
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
                <img className="img2 img" src="/src/assets/Group 2.svg" alt="" />
                <img className="img1 img" src="/src/assets/Group 3.svg" alt="" />
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
                <img className="abimg" src="/src/assets/aboutus=img.png" alt="" />
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
            <ServiceSlider />
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
                <Contactform />
              </div>
              <div className="contactillu">
                <img className="sentm" src="/src/assets/sentm.svg" alt="" />
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
            <CaseSlider />
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
               


                <Contactemail />
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
