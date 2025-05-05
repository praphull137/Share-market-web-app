import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid mt-5 p-5"
      style={{ backgroundColor: "#387ED1" }}
    >
      <div className="row px-5">
        <div className="col px-5 text-white">
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="fs-4">Support Portal</h2>
          </a>
        </div>
        <div className="col text-end text-white">
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            <p className="fs-5">Track tickets</p>
          </a>
        </div>
      </div>
      <div className="row p-5 text-white">
        <div className="col p-5">
          <h2 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            style={{ width: "100%", height: "30%", marginBottom: "10px" }}
            placeholder="Eg: How do i activate F&O"
          ></input>
          <ul
            className="list-unstyled"
            style={{
              display: "flex",
              flex: "flex-wrap",
              textDecoration: "underline",
            }}
          >
            <a style={{ color: "white", width: "100%" }} href="">
             
              <li>Track account opening</li>
            </a>
            <a style={{ color: "white", width: "100%" }} href="">
             
              <li> Track segment activation</li>
            </a>
            <a style={{ color: "white", width: "100%" }} href="">
         
              <li> Intraday margins</li>
            </a>
            <br />
            <a style={{ color: "white", width: "100%" }} href="">
            
              <li>Kite user manual</li>
            </a>
          </ul>
        </div>
        <div className="col mb-5">
          <h2 className="mt-5 ps-2">Featured</h2>

          <ol type="1">
            <a style={{ color: "white", textDecoration: "underline" }} href="">
              <li className="mb-4">
                Current Takeovers and Delisting – April 2025
              </li>
            </a>
            <a style={{ color: "white", textDecoration: "underline" }} href="">
         
              <li> Surveillance measure on scrips - April 2025</li>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
