import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

interface Case {
    description: string;
    id: number;
    category: string;
    title: string;
    imageSrc: string;
  }
  
  interface CaseCardProps {
    cards: Case[];
    currentPage: number;
    selectedCategory: string | null;
    pageSize: number;
  }
  
  

const CaseCard: React.FC<CaseCardProps> = ({cards, currentPage, selectedCategory, pageSize}) => {
    const filteredCase = cards
        .filter((cards) => !selectedCategory || cards.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(filteredCase);

    return (
        <Fragment>
            {Array.isArray(filteredCase) ? (
                filteredCase.map((elem) => (
                    <Link to={`/CaseWork/${elem.id}`} className="Case_card" key={elem.id}>
                        <img src={elem.imageSrc} alt="" />
                        <div className="cardinfo">
                            <h3 className="hedding">{elem.title}</h3>
                            <p className="subhedding" style={{ color: 'white !important' }}>{elem.description}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Error: Unable to fetch blogs</p>
            )}
        </Fragment>
    )
}

export default CaseCard
