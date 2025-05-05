import React from "react";
function Universe() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <h1 className="text-center mt-5 mb-5 fs-2">The Zerodha Universe</h1>
        <p className="text-center mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <a
            href="https://www.zerodhafundhouse.com/"
            className="text-decoration-none text-muted fs-6"
          >
            <img
              src="/media/images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{width:"50%"}}
            />
            <br />
            <p className="mt-3">
              Our asset management venture <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a
            href="https://sensibull.com/"
            className="text-decoration-none text-muted fs-6"
          >
            <img
              src="/media/images/sensibullLogo.svg"
              alt="ensibullLogo"
              style={{width:"50%"}}
            />
            <br />
            <p className="mt-3">
            Options trading platform that lets you<br/>
create strategies, analyze positions, and<br/> examine
data points like open interest, FII/DII, and more.

            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a
            href="https://www.tijorifinance.com/ideas-dashboard/"
            className="text-decoration-none text-muted fs-6"
          >
            <img
              src="/media/images/tijori.svg"
              alt="tijori"
              style={{width:"40%"}}
            />
            <br />
            <p className="mt-3">
            Investment research platform<br/>
that offers detailed insights on stocks,<br/>
sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-4 p-3">
          <a
            href="https://www.streak.tech/home"
            className="text-decoration-none text-muted fs-6"
          >
            <img style={{width:"50%"}}
              src="/media/images/streakLogo.png"
              alt="streakLogo"
            />
            <br />
            <p className="mt-3">
            Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a
            href="https://smallcase.zerodha.com/"
            className="text-decoration-none text-muted fs-6"
          >
            <img
              src="/media/images/smallcaseLogo.png"
              alt="smallcaseLogo"
            />
            <br />
            <p className="mt-3">
            Thematic investing platform<br/>
that helps you invest in diversified<br/>
baskets of stocks on ETFs.

            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a
            href="https://joinditto.in/"
            className="text-decoration-none text-muted fs-6"
          >
            <img
              src="/media/images/dittoLogo.png"
              alt="dittoLogo"
              style={{width:"40%"}}
            />
            <br />
            <p className="mt-3">
            Personalized advice on life<br/>
and health insurance. No spam<br/>
and no mis-selling.

            </p>
          </a>
        </div>
      </div>
      <div className="row text-center">
        <button className="btn btn-primary mx-auto" style={{width: "15%"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
