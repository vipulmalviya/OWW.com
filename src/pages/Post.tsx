import { Fragment, useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { VscArrowCircleLeft } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";
// import { FcShare } from "react-icons/fc";
import Contactemail from "../components/Contactemail";
import { FacebookShareButton, TwitterShareButton , FacebookIcon, TwitterIcon ,LinkedinShareButton ,LinkedinIcon,WhatsappShareButton,WhatsappIcon} from "react-share";
import { MdDateRange } from "react-icons/md";

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
            "imgSrc": "/public/assets/image-square.svg",
            "catName": "Devlopment",
        },
        {
            "id": 2,
            "imgSrc": "/public/assets/image-square.svg",
            "catName": "Designing",
        },
        {
            "id": 3,
            "imgSrc": "/public/assets/image-square.svg",
            "catName": "Trends",
        },
        {
            "id": 4,
            "imgSrc": "/public/assets/image-square.svg",
            "catName": "Businesses",
        },
        {
            "id": 5,
            "imgSrc": "/public/assets/image-square.svg",
            "catName": "Security",
        }
    ]

    const [isopen, setOpen] = useState(false)
    const currentPageUrl = window.location.href;

    return (
        <Fragment>
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
                            <img src="/public/assets/qutetion.svg" className="qutaionImg" alt="" />
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

                        <div className="scBtns flex" style={{flexWrap:"wrap"}}>
                            <div className="flex" style={{ alignItems: "center", cursor: "pointer",gap:".5rem" }}>
                            <FacebookShareButton url={currentPageUrl} style={{margin:"0"}}>
                            <FacebookIcon style={{width:"30",margin:"0"}}/>
                            </FacebookShareButton>
                            <TwitterShareButton url={currentPageUrl} style={{margin:"0"}}>
                            <TwitterIcon style={{width:"30"}}/>
                            </TwitterShareButton>
                            <LinkedinShareButton url={currentPageUrl} style={{margin:"0"}}>
                            <LinkedinIcon style={{width:"30"}}/>
                            </LinkedinShareButton>
                            <WhatsappShareButton url={currentPageUrl} style={{margin:"0"}}>
                            <WhatsappIcon style={{width:"30"}}/>
                            </WhatsappShareButton>
                            </div>
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
                                <img src="/public/assets/ri_facebook-fill.svg" alt="ri_facebook" />
                                <img src="/public/assets/uil_instagram.svg" alt="uil_instagram" />
                            </div>
                        </div>
                    </div>
                    <div className={(isopen) ? "isopen" : "blogRight"}>
                        <div className="search">
                            <form action="" className="search flex">
                                <input type="text" placeholder="search..." />
                                <img src="/public/assets/search.svg" alt="" />
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
                                <Link to={`/blogs/${elem.id}`} className="card" key={elem.id}>
                                    <img src={elem.imageSrc} alt="" />
                                    <div className="date"><MdDateRange  style={{fontSize:"1.2  rem"}}/>{elem.Date}</div>
                                    <h3 className="postCardTitle">{elem.title}</h3>
                                </Link>
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
        </Fragment>
    )
}

export default Post
