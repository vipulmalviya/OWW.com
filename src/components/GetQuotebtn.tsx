import React, { Fragment } from 'react';

interface GetQuoteBtnProps {
  text: string;
}

const GetQuoteBtn: React.FC<GetQuoteBtnProps> = (props) => {
  return (
    <Fragment>
      <div className="btn">
        <span className="btnVisible">{props.text}<i className="bx bx-chevron-right"></i></span>
        <span className="btnInVisible">{props.text}<i className="bx bx-chevron-right"></i></span>
      </div>
    </Fragment>
  );
}

export default GetQuoteBtn;
