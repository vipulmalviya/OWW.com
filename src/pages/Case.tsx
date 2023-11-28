
import { Link } from 'react-router-dom'
import '../style.css'
import { useState } from 'react';
import GetQuotebtn from '../components/GetQuotebtn';


const Case = () => {

  const allcards = [
    {
      "id": 1,
      "imageSrc": "/src/assets/sb.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    },
    {
      "id": 2,
      "imageSrc": "/src/assets/oww.png",
      "title": "Old World Web",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    },
    {
      "id": 3,
      "imageSrc": "/src/assets/refine.png",
      "title": "Refine Creations",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    },
    {
      "id": 4,
      "imageSrc": "/src/assets/astro.png",
      "title": "Astro Ashtangini ",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    },
    {
      "id": 5,
      "imageSrc": "/src/assets/stepanie.png",
      "title": "Stephanie Coudray",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    },
    {
      "id": 6,
      "imageSrc": "/src/assets/astro.png",
      "title": "Astro Ashtangini ",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "allcards"
    }
  ]
  const ui_ux = [
    {
      "id": 1,
      "imageSrc": "/src/assets/sb.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    },
    {
      "id": 2,
      "imageSrc": "/src/assets/oww.png",
      "title": "Old World Web",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    },
    {
      "id": 3,
      "imageSrc": "/src/assets/refine.png",
      "title": "Refine Creations",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    },
    {
      "id": 4,
      "imageSrc": "/src/assets/astro.png",
      "title": "Astro Ashtangini ",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    },
    {
      "id": 5,
      "imageSrc": "/src/assets/astro.png",
      "title": "Astro Ashtangini ",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    },
    {
      "id": 6,
      "imageSrc": "/src/assets/astro.png",
      "title": "Astro Ashtangini ",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "UI_UX_Design"
    }
  ]
  const Ecommerce = [
    {
      "id": 1,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
    {
      "id": 2,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
    {
      "id": 3,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
    {
      "id": 4,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
    {
      "id": 5,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
    {
      "id": 6,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "E-commerce"
    },
  ]
  const securitycards = [
    {
      "id": 1,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
    {
      "id": 2,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
    {
      "id": 3,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
    {
      "id": 4,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
    {
      "id": 5,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
    {
      "id": 6,
      "imageSrc": "/src/assets/astro.png",
      "title": "Satyam Bhuyan",
      "description": "design & Web development",
      "link": "/CaseWork",
      "category": "securitycards"
    },
  ]

  const [activeTab, setActiveTab] = useState<string>('All');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="section">
        <div className="container flex aling-left">
          <Link to="/" className="lable2  flex">
            <span className="flexcenter textspan2"><span className="line" /></span>
            home
          </Link>
          <Link to="/Case" className="lable2 higlight flex">
            <span className="flexcenter textspan2"><span className="line" /></span>
            cases
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h4 className="lable  flex">
            <span className="flexcenter textspan"><span className="line" /></span>
            PORTFOLIO
          </h4>
          <h2 className="sectionTitle">Our Amazing Cases</h2>
          <p className="sectiondesc">You maybe interested in what we can offer you. More services you can find below. <br />
            We do everything at high level. </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="abtns">
            <div className="effect hover-text All" onClick={() => handleTabClick('All')} >
              <div className="underline" />
            </div>
            <div className="effect hover-text UI_UX_Design" onClick={() => handleTabClick('UI_UX_Design')} >
            </div>
            <div className="effect hover-text E-commerce" onClick={() => handleTabClick('E-commerce')} >
            </div>
            <div className="effect hover-text Security" onClick={() => handleTabClick('Security')} >
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container center">
          <div className="protfolio">
            <div className={`allcards ${activeTab === 'All' ? 'active' : ''}`} id='cardContainer'>
              {allcards.map((item, index) => (
                <div className="center_card center_card1" key={index}>
                  <div className="foruntside">
                    <Link to={`/CaseWork/${item.category}/${item.id}`} key={item.id}>
                      <img src={item.imageSrc} alt="" />

                    </Link>
                  </div>
                  <div className="cardinfo">
                    <h3 className="hedding">{item.title}</h3>
                    <p className="subhedding" style={{ color: 'white !important' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`ui_ux ${activeTab === 'UI_UX_Design' ? 'active' : ''}`} id='cardContainer'>
              {ui_ux.map((item, index) => (
                <div className="center_card center_card1" key={index}>
                  <div className="foruntside">
                    <Link to={`/CaseWork/${item.category}/${item.id}`} key={item.id}>
                      <img src={item.imageSrc} alt="" />

                    </Link>
                  </div>
                  <div className="cardinfo">
                    <h3 className="hedding">{item.title}</h3>
                    <p className="subhedding" style={{ color: 'white !important' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`Ecommerce ${activeTab === 'E-commerce' ? 'active' : ''}`} id='cardContainer'>
              {Ecommerce.map((item, index) => (
                <div className="center_card center_card1" key={index}>
                  <div className="foruntside">
                    <Link to={`/CaseWork/${item.category}/${item.id}`} key={item.id}>
                      <img src={item.imageSrc} alt="" />

                    </Link>
                  </div>
                  <div className="cardinfo">
                    <h3 className="hedding">{item.title}</h3>
                    <p className="subhedding" style={{ color: 'white !important' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`securitycards ${activeTab === 'Security' ? 'active' : ''}`} id='cardContainer'>
              {securitycards.map((item, index) => (
                <div className="center_card center_card1" key={index}>
                  <div className="foruntside">
                    <Link to={`/CaseWork/${item.category}/${item.id}`} key={item.id}>
                      <img src={item.imageSrc} alt="" />

                    </Link>
                  </div>
                  <div className="cardinfo">
                    <h3 className="hedding">{item.title}</h3>
                    <p className="subhedding" style={{ color: 'white !important' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn aBtn">
            <GetQuotebtn text="Get more" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Case