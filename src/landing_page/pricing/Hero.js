import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5'>
                <h1>Charges</h1>
                <h3 className='text-muted fs-5 mt-3'>List of all charges and taxes</h3>
            </div>
            <div className='row p-5'>
                <div className='col-4'>
                    <img src='/media/images/pricing0.svg' alt='pricing0' style={{width: "60%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className=' text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/other-trades.svg' alt='other-trades'  style={{width: "60%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className=' text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/pricing0.svg' alt='pricing0'  style={{width: "60%"}}/>
                    <h2>Free direct MF</h2>
                    <p className=' text-muted'>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;