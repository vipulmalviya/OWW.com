import { Link } from "react-router-dom"
import GetQuoteBtn from "../components/GetQuotebtn"
import { SetStateAction, useEffect, useState } from "react"
import BlogCard from "../components/blogCard"
import CategorSelection from "../components/CategorSelection"

const Blog = () => {

  // Define the 'Blog' type
  interface Blog {
    id: number;
    imageSrc: string;
    category: string;
    Date: string;
    title: string;
    link: string;
    content: string;
    author: string;
    authorPic: string;
    tags: string[];
  }

  // Use 'Blog' as the type for the state
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);



  useEffect(() => {
    async function fetchBlogs() {
      try {
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check if the 'default' property exists and is an array
        if (Array.isArray(data.default)) {
          setBlogs(data.default);
        } else {
          console.error('Invalid data structure. Expected {default: Array}. Received:', data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);



  const handleCategoryChange = (category: SetStateAction<null>) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category)
  }




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
            blog
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h4 className="lable  flex">
            <span className="flexcenter textspan"><span className="line" /></span>
            blog
          </h4>
          <h2 className="sectionTitle">Atticles & News at old world web</h2>
        </div>
      </div>
      <div className="section">
        <div className="container centerl-f ">
          <CategorSelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
          <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
          <GetQuoteBtn text={"Load More"} />
        </div>
      </div>
    </div>
  )
}

export default Blog
