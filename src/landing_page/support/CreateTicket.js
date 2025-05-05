import React from 'react';
import "./CreateTicket.css";
function CreateTicket() {
    return ( 
        <div className='container mt-5 p-5'>
            <p className='text-muted px-5 fs-5' style={{marginBottom: "-20px"}}>To create a ticket, select a relevant topic</p>
            <div className='row p-5'>
                <div className='col-4'>
                    <h3 className='mb-4'>Account Opening</h3>
                    <span className='d-block mb-2'>
                        <a href='' >Resident individual</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Minor</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Non Resident Indian (NRI)</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Company, Partnership, HUF and LLP</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Glossary</a>
                    </span>
                    
                </div>
                <div className='col-4'>
                    <h3 className='mb-4'> Your Zerodha Account</h3>
                    <span className='d-block mb-2'>
                        <a href='' >Your Profile</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Account modification</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Client Master Report (CMR) and Depository<br/> Participant (DP)</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Nomination</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Transfer and conversion of securities</a>
                    </span>
                   
                </div>
                <div className='col-4'>
                    <h3 className='mb-4'> Kite</h3>
                    <span className='d-block' style={{marginBottom: "-20px"}}>
                        <a href='' >IPO</a>
                    </span><br/>
                    <span className='d-block mb-2'>
                        <a href='' >Trading FAQs</a>
                    </span >
                    <span className='d-block mb-2'>
                        <a href='' >Margin Trading Facility (MTF) and Margins</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Charts and orders</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Alerts and Nudges</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >General</a>
                    </span>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-4'>
                    <h3 className='mb-4'> Funds</h3>
                    
                    <span className='d-block mb-2'>
                        <a href='' >Add money</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Withdraw money</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Add bank accounts</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >eMandates</a>
                    </span>
                </div>
                <div className='col-4'>
                    <h3 className='mb-4'> Console</h3>
                    <span className='d-block mb-2'>
                        <a href='' >Portfolio</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Corporate actions</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Funds statement</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Reports</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Profile</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Segments</a>
                    </span>
                   
                </div>
                <div className='col-4'>
                    <h3 className='mb-4'> Coin</h3>
                    <span className='d-block' style={{marginBottom: "-20px"}}>
                        <a href='' >Understanding mutual funds and Coin</a>
                    </span><br/>
                    <span className='d-block mb-2'>
                        <a href='' >Coin app</a>
                    </span >
                    <span className='d-block mb-2'>
                        <a href='' >Coin web</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >Transactions and reports</a>
                    </span>
                    <span className='d-block mb-2'>
                        <a href='' >National Pension Scheme (NPS)</a>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;