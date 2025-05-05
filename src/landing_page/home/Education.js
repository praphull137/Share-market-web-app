import React from 'react';
function Education() {
    return (
        <div className='container px-5'>
        <div className='row px-5'>
        <div className='col-6 ps-5 px-5' style={{ marginLeft: '-50px' }}>
                <img src='media/images/education.svg' alt='ecosystem' style={{width: "90%", marginTop: '-30px'}}/>
                <div className='row'>
                    <div className='text-center'>
                    </div>
                </div>
            </div>
            <div className='col-6 ps-5'>
                <h1 className='mb-5 fs-2'>Free and open market education</h1>
            <p className='text-muted mb-3'>Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
            <a href='/' style={{textDecoration: "none"}}>Varsity &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <p className='text-muted mb-4 mt-4'>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
            <a href='/' style={{textDecoration: "none"}}>TradingQ&A  &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>            
            </div>
            
        </div>
    </div>
 );
}

export default Education;