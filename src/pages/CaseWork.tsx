import { useParams, Link } from 'react-router-dom';
import CaseSlider from '../components/CaseSlider';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../style.css'

import data from './data.json'
const CaseWork = () => {
    const { category, id } = useParams();

    if (!category) {
        return <div>Category not found</div>;
    }

    if ((!data.Categories as any)[category]) {
        return <div>Category not found</div>;
    }

    const project = (data.Categories as any)[category]?.find((project: { id: string }) => project.id === id);



    if (!project) {
        return <div>Card not found</div>;
    }

    // slider btn
    const handlePrevClick = () => {
        $(".owl-carousel").trigger("prev.owl.carousel");
    };

    const handleNextClick = () => {
        $(".owl-carousel").trigger("next.owl.carousel");
    };


    return (
        <div>
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
                    <h2 className="sectionTitle">website Design and Development for {project.title} </h2>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="new-slider">
                        <OwlCarousel className="owl-carousel owl-carousel2"
                            items={1}
                            margin={1}
                        >
                            <div className="item">
                                <img src={project.images[0]} alt='' />
                            </div>
                            <div className="item">
                                <img src={project.images[1]} alt='' />
                            </div>
                            <div className="item">
                                <img src={project.images[2]} alt='' />
                            </div>
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
                        <h4 className="ahadding">client : <span> {project.clientName}</span></h4>
                        <h4 className="ahadding">Start Date : <span>{project.startDate}</span></h4>
                        <h4 className="ahadding">Category : <span>{project.category}</span></h4>
                        <h4 className="ahadding">Finish Date : <span> {project.finishDate}</span></h4>
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
        </div>

    )
}

export default CaseWork
