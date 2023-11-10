import GetQuotebtn from "../components/GetQuotebtn"

const Contact = () => {
  return (
    <div>
      <div>
        <section className="section">
          <div className="container contactContainer">
            <div className="flex contactSection conatactMain">
              <div className="contactForm conatactPageCol-2">
                <div className="contactLable">contact us</div>
                <div className="sectionTitle">send a message</div>
                <p>
                  we always try to implement our creative ideas at very highest level. tell us about your project and we will
                  make it work.
                </p>
                <form className="form">
                <div className="flex inputs">
                    <input type="text" placeholder="Name" className="name" />
                    <input type="email" placeholder="Email" required className="email" />
                  </div>
                  <textarea name="massage" cols={50} rows={4} className="message" placeholder="Massage" required defaultValue={""} />
                  <button type="submit">
                    <div className="btn">
                    <GetQuotebtn text="Get A Quote" />
                    </div>
                  </button>
                </form>
              </div>
              <div className="contactillu contacctPageCol-1">
                <div className="contactInfoBox">
                  <div className="address">
                    <div className="addresImg">
                      <img src="/src/assets/Vector.svg" />
                    </div>
                    <div className="addressText">
                      <span className="addHead">address</span> <br />
                      <span className="addText">shiva niwas opposite of hell panet earth</span>
                    </div>
                  </div>
                </div>
                <div className="contactInfoBox">
                  <div className="address">
                    <div className="addresImg">
                      <img src="/src/assets/cil_chat-bubble.svg" />
                    </div>
                    <div className="addressText">
                      <span className="addHead">address</span> <br />
                      <span className="addText">shiva niwas opposite of hell panet earth</span>
                    </div>
                  </div>
                </div>
                <div className="contactInfoBox">
                  <div className="address">
                    <div className="addresImg">
                      <img src="/src/assets/Vector.svg"  />
                    </div>
                    <div className="addressText">
                      <span className="addHead">address</span> <br />
                      <span className="addText">shiva niwas opposite of hell panet earth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MAP */}
        <section className="section">
          <div className="container mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116078.31354811676!2d73.62246910648015!3d24.608263766099068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1687105033856!5m2!1sen!2sin" width="100%" height="300px" style={{ border: 0 }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
        {/* newsLetter */}
        <section className="section">
          <div className="container contactContainer">
            <div className="flex contactSection">
              <div className="contactForm">
                <div className="contactLable">newsLetter</div>
                <div className="sectionTitle">be always in touch</div>
                <p>
                  we are grateful to know that you are interested in our content and services, subscribe..!
                </p>
                <form className="newsLatterform">
                  <input type="email" placeholder="Email" required className="email" />
                  <button className="button" type="submit">
                    <div className="play2">
                      <div className="playBtn">
                        <i className="bx bx-send" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
              <div className="contactImg">
                <div className="newsletterText">
                  <div className="intro flex">
                    <img src="/src/assets/Ellipse 14.png" />
                    <div className="names">
                      <span>antonio rodriguez</span> <br />
                      <p>ceo, jio Digital life</p>
                    </div>
                  </div>
                  <div className="gratitude">
                    <p>we are grateful to lnow that you are <br />
                      intrested in our content and services <br />
                      Subscribe.!</p>
                  </div>
                  <img src="/src/assets/signature (3) 1.png" className="signatureImg" />
                </div>
              </div>
            </div>
          </div></section>
        <hr />
      </div>

    </div>
  )
}

export default Contact
