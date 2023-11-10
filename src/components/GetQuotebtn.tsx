import React from 'react';

interface GetQuoteBtnProps {
  text: string;
}

const GetQuoteBtn: React.FC<GetQuoteBtnProps> = (props) => {
  return (
    <div>
      <div className="btn">
        <span className="btnVisible">{props.text}<i className="bx bx-chevron-right"></i></span>
        <span className="btnInVisible">{props.text}<i className="bx bx-chevron-right"></i></span>
      </div>
    </div>
  );
}

export default GetQuoteBtn;
