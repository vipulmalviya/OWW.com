
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css'
import { Fragment } from "react";

const caseSlider = () => {


  const handlePrevClick = () => {
    $(".owl-carousel").trigger("prev.owl.carousel");
  };

  const handleNextClick = () => {
    $(".owl-carousel").trigger("next.owl.carousel");
  };





  const items = [
    {
      image: "/assets/big-paint-brush-svgrepo-com 1.svg",
      title: "ui & ux designing",
      description: "Crafting immersive interfaces that delight users. Elevate engagement with seamless design, intuitive navigation, and captivating visuals.",
    },
    {
      image: "/assets/code-svgrepo-comwhite 1.svg",
      title: "web development",
      description: "Turning ideas into digital reality. Expert coding, responsive design, and scalable solutions that empower your online vision.",
    },
    {
      image: "/assets/maintenance-mechanic-repair-svgrepo-com 1.svg",
      title: "web maintenance",
      description: "Sustain digital excellence effortlessly. Timely updates, bug fixes, and optimizations to keep your website running flawlessly.",
    },
    {
      image: "/assets/fingerprint-svgrepo-com 1.svg",
      title: "web security",
      description: "Shielding your digital fortress. Robust security protocols, encryption, and vigilant monitoring to safeguard your data and user trust.",
    },
  ];
  

  return (
    <Fragment>
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
                    <div className="preBtn" id="prevBtn"  onClick={handlePrevClick}>prev</div>
                    <div className="nextBtn" id="nextBtn" onClick={handleNextClick}>next</div>
                  </div>
                </div>
              </div>
              <div className="slider">
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
                  }}
                >
                  {items.map((item, index) => (
                    <div className="slide" key={index}>
                      <div className="iconImg">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="cent flex">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="effect hover-text readMore">
                        <a href=""></a>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
    </Fragment>
  )
}

export default caseSlider
