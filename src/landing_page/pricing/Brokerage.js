import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row'>
            <h2>Charges for account opening</h2>
                <div className='col'>
                <ul>
                        <li>Online account</li>
                        <li className='mt-3'>Offline account</li>
                        <li className='mt-3'>NRI account (offline only)</li>
                        <li className='mt-3'>Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
                    </ul>
                </div>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='bg-success text-white px-2 py-1 rounded' style={{width: "10%",marginBottom: "3px"}}>Free</li>
                            <li className='mt-2 bg-success text-white px-2 py-1 rounded' style={{width: "10%"}}>Free</li>
                            <li className='mt-3'> ₹500</li>
                            <li className='mt-2'>₹500</li>
                        </ul>
                    </div>
            </div>
        </div>
     );
}

export default Brokerage;