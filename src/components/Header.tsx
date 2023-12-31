import { Fragment, useState } from "react";
import "../style.css";
import { Link, NavLink } from "react-router-dom";
import GetQuotebtn from "./GetQuotebtn";


const Header = () => {
  // sectionbtn scripting
  const [isOpen, setOpen] = useState(true);

  function sectonbtn() {
    setOpen(() => !isOpen); 
  
    const serviceToggleElement = document.querySelector(".serviceToggle");
  
    if (serviceToggleElement !== null && isOpen) {
      serviceToggleElement.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      serviceToggleElement?.classList.remove("open");
      document.body.style.overflow = "auto";
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



  // for toggle navebar

  function menubtn() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      document.body.style.overflow = (sidebar.classList.toggle("active")) ? 'hidden' : 'auto';
    }
  }

  function closebtn() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      document.body.style.overflow = (sidebar.classList.toggle("active")) ? 'hidden' : 'auto';
    }
  }
  function menuitem() {
    const menuItems = document.querySelectorAll(".a");
    const sidebar = document.querySelector(".sidebar");

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        if (sidebar) {
          sidebar.classList.remove("active");
          document.body.style.overflow = sidebar.classList.contains("active") ? 'hidden' : 'auto';
        }
      });
    });
  }


  return (
    <Fragment>
      <header id="header">
        <div className="flex sidebarcol">
          <div className="sidebar">
            <ul className="text-container">
              <li >
                <Link
                  onClick={menuitem}
                  to="/About"
                  className="effect hover-text about a"
                  id="page1"
                ></Link>
              </li>
              <li >
                <Link
                  onClick={menuitem}
                  to="#serv"
                  className="effect hover-text serviceBtn2 a"
                ></Link>
              </li>
              <li>
                <Link
                  onClick={menuitem}
                  to="/Case" className="effect hover-text case a">

                </Link>
              </li>
              <li>
                <Link
                  onClick={menuitem}
                  to="/Contact"
                  className="effect hover-text contact a"
                  id="page2"
                ></Link>
              </li>
            </ul>
            <div className="btn navBtn">
              <GetQuotebtn text="Get A Quote" />
            </div>
            <button className="closebtn" onClick={closebtn}>
              <span className="lines2"></span>
              <span className="lines2"></span>
            </button>
          </div>
        </div>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/Profile_png_logo_1.svg"
                  alt="logo of the old world web"
                />
              </Link>
            </div>
            <div className="menu">
              <ul className="text-container">
                <li>
                  <Link
                    to="#about"
                    className="effect hover-text about a"
                  ></Link>
                </li>
                <li>
                  <span
                    onClick={sectonbtn}
                    className="effect hover-text serviceBtn a"
                  >
                  </span>
                </li>
                <li>
                  <NavLink
                    to="/Case"
                    className="effect hover-text case a"
                  ></NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact"
                    className="effect hover-text contact a"
                  ></NavLink>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="flex" onClick={toggleTheme}>
                <div
                  className="daynight"
                  onClick={handleToggle}
                  onMouseEnter={handleToggle}
                  onMouseLeave={handleToggle}
                >
                  <img
                    id="day"
                    style={{
                      transform: isDay ? "translateY(-150%)" : "translateY(55%)",
                    }}
                    alt="Day"
                    src="/assets/Frame 24.svg"
                  />
                  <img
                    id="night"
                    style={{
                      transform: isDay ? "translateY(-55%)" : "translateY(150%)",
                    }}
                    alt="Night"
                    src="/assets/Frame 23.svg"
                  />
                </div>
              </div>
              <div className="btn navBtn">
                <GetQuotebtn text="Get A Quote" />
              </div>
            </div>
            <div className="menuBtn" onClick={menubtn}>
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
                <Link to="/" className="serviceLinks">
                  <img src="/assets/Group (2).svg" alt="" />
                  <h3>UI & UX Designing</h3>
                </Link>
              </div>
              <div className="gridItem gridFlex">
                <Link to="/" className="serviceLinks">
                  <img src="/assets/Wrench_1_.svg" alt="" />
                  <h3>web maintenance</h3>
                </Link>
              </div>
              <div className="gridItem gaqdiv">
                <div className="btn">
                  <span className="btnVisible">
                    get a quote <i className="bx bx-chevron-right"></i>
                  </span>
                  <span className="btnInVisible">
                    get a quote <i className="bx bx-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="gridItem gridFlex">
                <Link to="/" className="serviceLinks">
                  <img src="/assets/code-svgrepo-com 1.svg" alt="" />
                  <h3>web development</h3>
                </Link>
              </div>
              <div className="gridItem gridFlex">
                <Link to="/" className="serviceLinks">
                  <img
                    src="/assets/fingerprint-svgrepo-com 1 (1).svg"
                    alt=""
                  />
                  <h3>web security</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
