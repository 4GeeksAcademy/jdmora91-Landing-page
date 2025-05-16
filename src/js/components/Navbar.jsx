import React from 'react';


function Navbar() {


    return (
        <div className='bg-dark text-white'>
        <div classNameName="border border-danger">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" aria-disabled="true">Contact</a>
                </li>
            </ul>
        </div></div>

    );
}
export default Navbar;
