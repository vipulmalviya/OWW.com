
import { Link } from 'react-router-dom'
import '../style.css'
import { Fragment, SetStateAction, useEffect, useState } from 'react';
import GetQuotebtn from '../components/GetQuotebtn';
import CaseCard from '../components/CaseCard';
import CaseCategory from '../components/CaseCategory';


interface Case {
  id: number;
  clientName: string;
  category: string;
  startDate: string;
  finishDate: string;
  title: string;
  images: string[];
}


const Case = () => {


  const [cards, setCards] = useState<Case[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);



  useEffect(() => {
    async function fetchBlogs() {
      try {
        let url = `http://localhost:5000/Case?page=${currentPage}&limit=${pageSize}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (Array.isArray(data.default)) {
          setCards(data.default);
        } else {
          console.error('Invalid data structure. Expected {default: Array}. Received:', data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);



  const handleCategoryChange = (category: SetStateAction<string | null>) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <Fragment>
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
            <CaseCategory onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="protfolio">
            <CaseCard cards={cards} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
          </div>
          <div className='flex' style={{ width: "100%", justifyContent: "center" }}>
            <div className="btn aBtn">
              <GetQuotebtn text="Get more" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Case