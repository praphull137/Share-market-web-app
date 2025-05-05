import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row p-3">
          <h1 className="text-center mb-5">
           People
          </h1>
        </div>
        <div className="row p-3 text-muted">
          <div className="col-6 text-center">
           <img src='/media/images/praphull.png' alt='Praphull Kumar Pandey' style={{borderRadius: "100%", width: "50%", height:"60%"}}/>
           <h3 className='mt-4'>Praphull Kumar Pandey</h3>
           <p className='mt-3'>Founder, CEO</p>
          </div>
          <div className="col-6 p-3">
            <p className='fs-6' style={{lineHeight: "1.9"}}>
            Praphull bootstrapped and founded Stocker in 2025 to overcome the<br/> hurdles he faced during his decade long stint as a trader. Today,<br/> Stocker has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing chess is his zen.
            </p>
            <p>Connect on &nbsp;  &nbsp; &nbsp; <a href='https://www.linkedin.com/in/praphullkumarpandey/'>   <i class="fa fa-linkedin me-5" aria-hidden="true"></i></a>
            <a> <i class="fa fa-instagram me-5" aria-hidden="true"></i> </a>
             <i class="fa fa-telegram me-5" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
     );
}

export default Team;