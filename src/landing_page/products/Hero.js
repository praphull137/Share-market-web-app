import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5 mt-5 border-bottom'>
        <div className='row text-center mb-5'>
            <h1 className='mb-3'>Zerodha Products</h1>
            <p className='fs-5 text-muted mb-3'>Sleek, modern, and intuitive trading platforms</p>
            <p className='fs-6 text-muted'>Check out our <a href='' className='text-decoration-none'> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
       </div>
     );
}

export default Hero;