import React from 'react'

interface CategorSelectionProps {
    onSelectCategory: (category: string | null) => void;
    activeCategory: string | null;
  }
  
  const CategorSelection: React.FC<CategorSelectionProps> = ({ onSelectCategory, activeCategory }) => {
    const categories =["Devlopment","Designing","Trends","Businesses","Security"]
  return (
    <div>
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
    </div>
  )
}

export default CategorSelection
