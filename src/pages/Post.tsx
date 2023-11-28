import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { VscArrowCircleLeft } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";
import { FcShare } from "react-icons/fc";
import Contactemail from "../components/Contactemail";

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


const Post: React.FC = () => {

    const data = useLoaderData();

    const [firstBlog] = data as Blog[];
    const { imageSrc, author, authorPic, content, title, tags } = firstBlog;
    console.log(firstBlog);


    const [popularBlogs, setPopularBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data.default)) {
                    setPopularBlogs(data.default.slice(0, 5));
                } else {
                    console.error('Invalid data structure. Expected {default: Array}. Received:', data);
                }
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);


    const firstFive = content.slice(0, 5);
    const rest = content.slice(5);

    const cat = [
        {
            "id": 1,
            "imgSrc": "/src/assets/image-square.svg",
            "catName": "Devlopment",
        },
        {
            "id": 2,
            "imgSrc": "/src/assets/image-square.svg",
            "catName": "Designing",
        },
        {
            "id": 3,
            "imgSrc": "/src/assets/image-square.svg",
            "catName": "Trends",
        },
        {
            "id": 4,
            "imgSrc": "/src/assets/image-square.svg",
            "catName": "Businesses",
        },
        {
            "id": 5,
            "imgSrc": "/src/assets/image-square.svg",
            "catName": "Security",
        }
    ]

    const [isopen, setOpen] = useState(false)


    return (
        <div>
            <div className="section">
                <div className="blogContainer flex aling-left">
                    <Link to="/" className="lable2  flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        home
                    </Link>
                    <Link to="/blog" className="lable2 flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        blog
                    </Link>
                    <Link to="/" className="lable2 higlight flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        post
                    </Link>
                </div>
            </div>
            <div className="section">
                <div className="blogContainer">
                    <h4 className="lable flex">
                        <span className="flexcenter textspan"><span className="line" /></span>
                        blog
                    </h4>
                    <h2 className="sectionTitle">{title}</h2>
                </div>
            </div>
            <div className="section">
                <div className="flex blogPage">
                    <div className="blogLeft">
                        <img src={imageSrc} alt="thumbmailImg" />
                        {(Array.isArray(firstFive) ? firstFive : []).map((elem: any, i: any) => (
                            <div key={i} className="blogContent">
                                {typeof elem === 'object' && elem !== null && (
                                    <>
                                        <h3>{elem.section}</h3>
                                        <h4>{elem.text}</h4>
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="quteCard ">
                            <img src="/src/assets/qutetion.svg" className="qutaionImg" alt="" />
                            <h4 className="quteContent">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero architecto amet consequatur consectetur velit autem molestiae reprehenderit, accusamus minus ad repellendus optio a, eius incidunt rerum dolorem debitis sit porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo corporis tempora dignissimos unde earum cum odit! Illo eligendi delectus a sed doloremque, quod quae exercitationem quidem recusandae ullam earum?
                            </h4>
                            <h3>Name of the Quoter</h3>
                            <h4>Bame of the Quoter</h4>
                        </div>
                        {(Array.isArray(rest) ? rest : []).map((elem: any, i: any) => (
                            <div key={i} className="blogContent">
                                {typeof elem === 'object' && elem !== null && (
                                    <>
                                        <h3>{elem.section}</h3>
                                        <h4>{elem.text}</h4>
                                    </>
                                )}
                            </div>
                        ))}

                        <div className="scBtns flex">
                            <div className="flex" style={{ alignItems: "center", cursor: "pointer" }}><FcShare className="shareIcone" />Share</div>
                            <div className="catagoryBtn">
                                <button>Trends</button>
                                <button>Businesses</button>
                                <button>portfolio</button>
                            </div>
                        </div>
                        <div className="authorCard flex">
                            <div className="flex ac">
                                <img src={authorPic} alt="authorImg" className="authorImg" />
                                <div className="authordetail ">
                                    <h3>{author}</h3>
                                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia ea voluptatum ut maiores, nemo necessitatibus nisi nesciunt eaque doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque eaque quos sunt et, facilis inventore tempore quo laborum saepe vitae sequi nostrum eveniet corrupti temporibus molestias omnis itaque. Cum?
                                    </h4>
                                </div>
                            </div>
                            <div className="socialIcon flex">
                                <img src="/src/assets/ri_facebook-fill.svg" alt="ri_facebook" />
                                <img src="/src/assets/uil_instagram.svg" alt="uil_instagram" />
                            </div>
                        </div>
                    </div>
                    <div className={(isopen) ? "isopen" : "blogRight"}>
                        <div className="search">
                            <form action="" className="search flex">
                                <input type="text" placeholder="search..." />
                                <img src="/src/assets/search.svg" alt="" />
                            </form>
                        </div>
                        <h1>Categories</h1>
                        <div className="blogCategories flex">
                            {cat.map((elem) => (<div className="blogCategorie flex" key={elem.id}>
                                <img src={elem.imgSrc} alt="image" />
                                <h3>{elem.catName}</h3>
                            </div>))}
                        </div>
                        <h1>Recent Posts</h1>
                        <div className="RecentPostCard">
                            {Array.isArray(popularBlogs) && popularBlogs.slice(0, 2).map((elem) => (
                                <div className="card" key={elem.id}>
                                    <img src={elem.imageSrc} alt="" />
                                    <div className="date">{elem.Date}</div>
                                    <h3 className="postCardTitle">{elem.title}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="newsletter">
                            <h2>NewsLetter</h2>
                            <Contactemail />
                        </div>
                        <div className="tags">
                            <h2>Tags</h2>
                            <div className="catagoryBtn">
                                {tags.map((elem) => (<button>{elem}</button>))}
                            </div>
                        </div>
                    </div>
                    <div className="sideBarBtn" onClick={() => setOpen(!isopen)}>
                        <span>{isopen ? <VscArrowCircleRight /> : <VscArrowCircleLeft />}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
