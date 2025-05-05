import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center ">
        <div className="col-6">
          <h1>{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration: "none"}}>{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;