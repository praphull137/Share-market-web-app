import React from 'react';
function Pricing() {
    return (  
       <div className='container p-5' style={{ marginTop: '-100px' }}>
            <div className='row p-5'>
                <div className='col-4 p-5' >
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price  transparency in India. Flat fees and no hidden charges.
                    </p>
                <a style={{textDecoration: "none"}} href='/'> See pricing &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-8 d-flex align-center p-4'>
                    <div className='col-2'></div>
                    <div className='col-2 align-center' style={{ marginRight: '40px' }}>
                    <img src='/media/images/pricing-eq.svg' alt='pricing-eq'  className='img-fluid me-3' 
                        style={{ maxWidth: '120px' }} 
                    />
                    <p className='mb-0' style={{fontSize: "60%"}}>Free account <br/>
                    opening</p>
                    </div>
                    <div className='col-2  align-center' style={{ marginRight: '40px' }}>
                    <img src='/media/images/pricing-eq.svg' alt='pricing-eq'  className='img-fluid me-3' 
                        style={{ maxWidth: '120px' }} 

                    />
                    <p className='mb-0' style={{fontSize: "60%"}}>Free equity delivery<br/>
                    and direct mutual funds 
                    opening</p>
                    </div>
                    <div className='col-2 align-center' style={{ marginRight: '40px' }}>
                    <img src='/media/images/other-trades.svg' alt='pricing-eq'  className='img-fluid me-3' 
                        style={{ maxWidth: '120px' }} 

                    />
                    <p className='mb-0' style={{fontSize: "60%"}}> Intraday and
                    <br/>F&O
                    </p>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Pricing;