import React from 'react'

import logo from '../../assests/images/medicle-logo.png'
const Header = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <div className="container-fluid p-0">
                                    <a className="navbar-brand" href="#">
                                        <img src={logo} alt="logo" className="img-fluid" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#home">Home</a                                                >
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#founder">founder</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#challenge">challenge</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#solution">solution</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#offering">offering</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#leadership">leadership </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">invest </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};
export default Header