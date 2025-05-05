import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription={
            <p style={{ lineHeight: "1.9" }}>
              Our ultra-fast flagship trading platform with<br />
              streaming market data, advanced charts, an<br />
              elegant UI, and more. Enjoy the Kite<br />
              experience seamlessly on your Android and<br />
              iOS devices.
            </p>
          }
          tryDemo={<span>Try demo <i className="fa fa-long-arrow-right" aria-hidden="true" style={{ marginLeft: "8px", color: "#007bff" }}></i></span>}
          learnMore={<span>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true" style={{ marginLeft: "8px", color: "#007bff" }}></i></span>}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription={
            <p style={{ lineHeight: "1.9" }}>
              The central dashboard for your Zerodha<br /> account.
              Gain insights into your trades and<br /> investments with
              in-depth reports and<br/> visualisations.
            </p>
          }
        learnMore="Learn more "
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription={
            <p style={{ lineHeight: "1.9" }}>
              Buy direct mutual funds online, commission-<br />free,
              delivered directly to your Demat<br /> account.
              Enjoy the investment experience<br /> on your Android and iOS devices.
            </p>
          }
          tryDemo={<span>Coin <i className="fa fa-long-arrow-right" aria-hidden="true" style={{ marginLeft: "8px", color: "#007bff" }}></i></span>}
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription={
            <p style={{ lineHeight: "1.9" }}>
              Build powerful trading platforms and<br /> experiences with our
              super simple<br /> HTTP/JSON APIs.
              If you are a startup, build<br /> your investment app and
              showcase it to our<br /> clientbase.
            </p>
          }
        learnMore="Kite Connect"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription={
            <p style={{ lineHeight: "1.9" }}>
              An easy to grasp, collection of stock market<br /> lessons
              with in-depth coverage and<br /> illustrations.
              Content is broken down into<br /> bite-size cards to help
              you learn on the go.
            </p>
          }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5 fs-5 text-muted">
        Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" className="text-decoration-none"> Zerodha.tech </a>
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;