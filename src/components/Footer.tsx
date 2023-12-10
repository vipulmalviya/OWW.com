import { Fragment, useState } from "react";
import "../style.css";

const Footer = () => {

  const [isDay, setIsDay] = useState(true);

  const handleToggle = () => {
    setIsDay(!isDay);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    const body = document.body;

    if (isDarkMode) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  };

  return (
    <Fragment>
    <hr />
      <footer className="section">
        <div className="footercontainer flex footerflex">
          <div className="footerItems centerl-f">
            <img src="/assets/Profile_png_logo_1.svg" alt="" />
            <p>Copyright &copy; old world web 2023</p>
          </div>
          <div className="footerItems flexdiraction">
            <div className="footerTitle">Quick links</div>
            <a href="/">Blogs</a>
            <a href="/">About us</a>
            <a href="/">Contact us</a>
            <a href="/">FAQ’s</a>
          </div>
          <div className="footerItems flexdiraction">
            <div className="footerTitle">Our expertise</div>
            <p>Web design and development</p>
            <p>Ecommerce development</p>
            <p>Wordpress development</p>
            <p>UI UX design</p>
            <p>Web security</p>
            <p>Web maintenance</p>
          </div>
          <div className="footerItems flexdiraction">
            <div className="footerTitle">Other links</div>
            <a href="/">Terms and conditions</a>
            <a href="/">Privacy policy</a>
            <a href="/">Social media links</a>
          </div>
          <div className="footerItems flexdiraction">
            <div className="footerTitle">Contact us</div>
            <p>+91 8955535787</p>
            <p>info@oldworldweb.com</p>
          </div>
          <div className="footerbtn">
            <a href="#header">
              <img src="/assets/Component 19.svg" alt="" />
            </a>
            <div className="flex" onClick={toggleTheme}>
              <div
                className="daynight dnfooter"
                onClick={handleToggle}
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
              >
                <img
                  id="day"
                  style={{
                    transform: isDay ? "translateY(-100%)" : "translateY(50%)",
                  }}
                  alt="Day"
                  src="/assets/Frame 24.svg"
                />
                <img
                  id="night"
                  style={{
                    transform: isDay ? "translateY(-50%)" : "translateY(100%)",
                  }}
                  alt="Night"
                  src="/assets/Frame 23.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
