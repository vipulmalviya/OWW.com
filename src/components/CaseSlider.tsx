import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css'
import  { useEffect } from "react";
import { Link } from "react-router-dom";

const CaseSlider = () => {

  const handlePrevClick = () => {
    $(".owl-carousel").trigger("prev.owl.carousel");
  };

  const handleNextClick = () => {
    $(".owl-carousel").trigger("next.owl.carousel");
  };



  const caseSlides = [
    {
      videoSrc: "/src/assets/SB.mp4",
      title: "Satyam Bhuyaan",
      description: "Web development",
      websiteUrl: "https://satyambhuyan.com/",
    },
    {
      videoSrc: "/src/assets/OWW.mp4",
      title: "OldWorldWeb",
      description: "Web development",
      websiteUrl: "https://www.oldworldweb.com/",
    },
    {
      videoSrc: "/src/assets/Refine.mp4",
      title: "Refine Creations",
      description: "Web development",
      websiteUrl: "https://refinecreations.com/",
    },
    {
      videoSrc: "/src/assets/stepanie.png",
      title: "Stephanie Coudray",
      description: "Web development",
      websiteUrl: "https://stephaniecoudray.oldworldweb.com/",
    },

  ];
  useEffect(() => {
    const caseSlides = document.querySelectorAll(".caseSlide");
  
    caseSlides.forEach((caseSlide) => {
      const video = caseSlide.querySelector(".vid") as HTMLVideoElement;
  
      caseSlide.addEventListener("mouseenter", () => {
        if (video && typeof video.play === 'function') {
          video.muted = false;
          video.play();
          video.currentTime = 0;
          video.style.opacity = "1";
        }
      });
  
      caseSlide.addEventListener("mouseleave", () => {
        if (video && typeof video.pause === 'function') {
          video.muted = true;
          video.pause();
          video.style.opacity = "0";
        }
      });
    });
  }, []);
  


  return (
    <>
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
                    <div className="sectionBtn caseBtn"><Link to="/Case">see all cases</Link></div>
                    <div className="carousalBtn">
                      <div className="preBtn" id="cprevBtn" onClick={handlePrevClick} >prev</div>
                      <div className="nextBtn" id="cnextBtn" onClick={handleNextClick}>next</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="caseSlider">
                <OwlCarousel className="owl-carousel" 
                  items={3}
                  margin={10}
                  responsiveClass={true}
                  responsive={{
                    0: {
                      items: 1,
                      nav: false,
                    },
                    768: {
                      items: 2,
                      nav: false,
                    },
                    1000: {
                      items: 3,
                      nav: false,
                    },
                  }}>
                  {caseSlides.map((slide, index) => (
                    <div className={`caseSlide${index + 1} caseSlide`} key={index} >
                      <video className="vid" src={slide.videoSrc}></video>
                      <div className="caseInfo">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        <a href={slide.websiteUrl}>
                          <span className="effect hover-text arrowIcon"><span></span></span>
                        </a>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div> 
    </>
  )
}

export default CaseSlider
