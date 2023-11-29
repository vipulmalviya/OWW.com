import { Link, useLoaderData } from 'react-router-dom';
import CaseSlider from '../components/CaseSlider';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css'
import { Fragment } from 'react';

interface Case {
    id: number;
    clientName: string;
    category: string;
    startDate: string;
    finishDate: string;
    title: string;
    images: string[];
    imageSrc: string;
}


const CaseWork: React.FC = () => {
    const data = useLoaderData();
    const [firestCase] = data as Case[];
    const { clientName, category, startDate, finishDate, title , images } = firestCase;


    // slider btn
    const handlePrevClick = () => {
        $(".owl-carousel").trigger("prev.owl.carousel");
    };

    const handleNextClick = () => {
        $(".owl-carousel").trigger("next.owl.carousel");
    };

    return (
        <Fragment>
            <div className="section">
                <div className="container flex aling-left">
                    <Link to="/" className="lable2  flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        home
                    </Link>
                    <Link to="/Case" className="lable2  flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        cases
                    </Link>
                    <Link to="/CaseWork" className="lable2 higlight flex">
                        <span className="flexcenter textspan2"><span className="line" /></span>
                        cases works
                    </Link>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h4 className="lable  flex">
                        <span className="flexcenter textspan"><span className="line" /></span>
                        Cases Work
                    </h4>
                    <h2 className="sectionTitle">website Design and Development for {title} </h2>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="new-slider">
                        <OwlCarousel className="owl-carousel owl-carousel2"
                            items={1}
                            margin={1}
                        >
                            {images.map((img, index) => (
                                <div className="item" key={index}>
                                    <img src={img} alt={`Image ${index + 1}`} />
                                </div>
                            ))}

                        </OwlCarousel>
                    </div>
                    <div className="carousalBtn casebtns">
                        <span>
                            <div className="CpreBtn" id="CprevBtn" onClick={handlePrevClick}>prev</div>
                        </span>
                        <span>
                            <div className="CnextBtn" id="CnextBtn" onClick={handleNextClick}>next</div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container center">
                    <div className="pds">
                        <h3 className="sectionhadding">About project</h3>
                        <p className="sectiondesc">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                    </div>
                    <div className="dvaider" />
                    <div className="projectdetails grid">
                        <h4 className="ahadding">client : <span> {clientName}</span></h4>
                        <h4 className="ahadding">Start Date : <span>{startDate}</span></h4>
                        <h4 className="ahadding">Category : <span>{category}</span></h4>
                        <h4 className="ahadding">Finish Date : <span> {finishDate}</span></h4>
                    </div>
                    <div className="dvaider" />
                    <div className="btn cBtn">
                        <span className="btnVisible">Visit Website <i className="bx bx-chevron-right" /></span>
                        <span className="btnInVisible">Visit Website <i className="bx bx-chevron-right" /></span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="section">
                <div className="container  center">
                    <CaseSlider />
                </div>
            </div>
        </Fragment>

    )
}

export default CaseWork
