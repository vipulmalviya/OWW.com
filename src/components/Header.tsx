import { useState } from 'react';
import '../style.css'



const Header = () => {

  // sectionbtn scripting

  function sectonbtn() {
    const serviceToggle = document.querySelector('.serviceToggle');
    if (serviceToggle) {
      serviceToggle.classList.toggle('open');
    }
  }

  // theme changing scripting

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
    <>
      <header id="header">
        <div className="flex sidebarcol">
          <div className="sidebar">
            <ul className="text-container">
              <li><a href="#about" className="effect hover-text about a" id="page1"></a></li>
              <li><a href="#serv" className="effect hover-text serviceBtn2 a"></a></li>
              <li><a href="case.html" className="effect hover-text case a"></a></li>
              <li><a href="contact.html" className="effect hover-text contact a" id="page2"></a></li>
            </ul>
            <div className="btn navBtn">
              <span className="btnVisible">get a quote <i className="bx bx-chevron-right"></i></span>
              <span className="btnInVisible">get a quote <i className="bx bx-chevron-right"></i></span>
            </div>
            <button className="closebtn">
              close
            </button>
          </div>
        </div>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="index.html">
                <img src="src/assets/Profile png logo 1.svg" alt="logo of the old world web" />
              </a>
            </div>
            <div className="menu">
              <ul className="text-container">
                <li><a href="#about" className="effect hover-text about a"></a></li>
                <li><a onClick={sectonbtn} className="effect hover-text serviceBtn a"></a></li>
                <li><a href="case.html" className="effect hover-text case a" ></a></li>
                <li><a href="/Contact" className="effect hover-text contact a"></a></li>
              </ul>
            </div>
            <div className="flex" onClick={toggleTheme}>
              <div className="daynight" onClick={handleToggle} onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
                <img id="day" style={{ transform: isDay ? 'translateY(-100%)' : 'translateY(50%)' }} alt="Day" src="src/assets/day-image-url" />
                <img id="night" style={{ transform: isDay ? 'translateY(-50%)' : 'translateY(100%)' }} alt="Night" src="src/assets/night-image-url" />
              </div>
              <div className="btn navBtn">
                <span className="btnVisible">get a quote <i className="bx bx-chevron-right"></i></span>
                <span className="btnInVisible">get a quote <i className="bx bx-chevron-right"></i></span>
              </div>
            </div>
            <div className="menuBtn">
              <span className="lines"></span>
              <span className="lines"></span>
              <span className="lines"></span>
            </div>
          </nav>
          <hr />
          <div className="serviceToggle">
            <div className="grid serviceMenu">
              <div className="gridItem">
                <h3>Secure your business - reach out to us now!</h3>
              </div>
              <div className="gridItem gridFlex">
                <a href="" className="serviceLinks">
                  <img src="src/assets/Group (2).svg" alt="" />
                  <h3>UI & UX Designing</h3>
                </a>
              </div>
              <div className="gridItem gridFlex">
                <a href="#" className="serviceLinks">
                  <img src="src/assets/Wrench_1_.svg" alt="" />
                  <h3>web maintenance</h3>
                </a>
              </div>
              <div className="gridItem gaqdiv">
                <div className="btn">
                  <span className="btnVisible">get a quote <i className="bx bx-chevron-right"></i></span>
                  <span className="btnInVisible">get a quote <i className="bx bx-chevron-right"></i></span>
                </div>
              </div>
              <div className="gridItem gridFlex">
                <a href="#" className="serviceLinks">
                  <img src="src/assets/code-svgrepo-com 1.svg" alt="" />
                  <h3>web development</h3>
                </a>
              </div>
              <div className="gridItem gridFlex">
                <a href="#" className="serviceLinks">
                  <img src="src/assets/fingerprint-svgrepo-com 1 (1).svg" alt="" />
                  <h3>web security</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header



