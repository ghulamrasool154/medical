import React from 'react'
import redline from '../../assests/images/redline.png';
import Image_140 from '../../assests/images/Image_140.png'
import Image_141 from '../../assests/images/Image_141.png'
import Image_142 from '../../assests/images/Image_142.png'
const MedtechAdvisors = () => {
    return (
        <section id="medtech-advisors">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">Medical 21 Medtech/Business Advisors</h1>
                        <div className="redline">
                            <img
                                src={redline}
                                alt=" "
                                className="img-fluid"
                                width="250px "
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="medtech-advisors-main">
                                <img
                                    src={Image_140}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>John Babitt</h4>
                                <p>Partner, Life Sciences, Ernst & Young</p>
                                <ul>
                                    <li>
                                        30 years of leadership with a focus on medical technology
                                    </li>
                                    <li>
                                        President of a publicly traded medical technology company
                                        with Manny Villafaña.
                                    </li>
                                    <li>
                                        Frequent lecturer and guest speaker at The Medtech
                                        Conference (AdvaMed)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="medtech-advisors-main">
                                <img
                                    src={Image_141}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Robert Emery Jr., M.D.</h4>
                                <p>Cardiac Surgeon (Ret.)</p>
                                <ul>
                                    <li>Initial research work on St. Jude Heart Valve</li>
                                    <li>
                                        Co-Founder & First President of Int’l Society of Minimally
                                        Invasive Cardiac Surgery
                                    </li>
                                    <li>
                                        Medical Director, Cardiovascular Surgery, St. Joseph’s
                                        Hospital, St. Paul, MN
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="medtech-advisors-main">
                                <img
                                    src={Image_142}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>David Joyce, M.D.</h4>
                                <p>
                                    Director of Cardiac Transplantation, Medical College of
                                    Wisconsin
                                </p>
                                <ul>
                                    <li>
                                        Associate Professor, Cardiac Surgery, Medical College of
                                        Wisconsin, Milwaukee
                                    </li>
                                    <li>Former Professor, Mayo Clinic</li>
                                    <li>Harvard Medical School</li>
                                    <li>Fellowship, Stanford University</li>
                                    <li>Resident, Johns Hopkins</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MedtechAdvisors