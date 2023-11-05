

const Footer = () => {
  return (
    <>
       <footer className="section">
      <div className="footercontainer flex footerflex">
        <div className="footerItems centerl-f">
          <img src="./assets/Profile png logo 1.svg" alt="" />
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
            <img src="assets/Component 19.svg" alt="" />
          </a>
          <div className="daynight2" id="modes2">
            <img id="day2" src="assets/Frame 24.svg" alt="" />
            <img id="night2" src="assets/Frame 23.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
