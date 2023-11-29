import React, { Fragment } from 'react'
interface CaseCategoryProps {
    onSelectCategory: (category: string | null) => void;
    activeCategory: string | null;
  }
const CaseCategory: React.FC<CaseCategoryProps> = ({ onSelectCategory, activeCategory }) => {
    const categories =["UI_UX_Design","E-Commerce","Security"]
  return (
    <Fragment>
      <button onClick={()=>onSelectCategory(null)} className={`categorybtn ${activeCategory  ? "" : "higlight"}`}>All</button>
      {
        categories.map((category) => (
            <button
            onClick={()=>onSelectCategory(category)}
            className={`categorybtn ${activeCategory === category ? "higlight" : ""}`}
            key={category}>
            {category}</button>
        ))
      }
    </Fragment>
  )
}

export default CaseCategory
