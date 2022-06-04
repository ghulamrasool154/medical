import React from 'react'
import redline from '../../assests/images/redline.png'
import Image_147 from '../../assests/images/Image_147.png'
import Image_148 from '../../assests/images/Image_148.png'
import Image_149 from '../../assests/images/Image_149.png'
const BusinessAdvisors = () => {
    return (
        <section id="business-advisors">
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
                            <div className="business-advisors-main">
                                <img
                                    src={Image_147}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Lyle Joyce, M.D., Ph.D.</h4>
                                <p>Professor of Surgery, Medical College of Wisconsin</p>
                                <ul>
                                    <li>
                                        Section Chief, Adult Cardiac Surgery, Medical College of
                                        Wisconsin
                                    </li>
                                    <li>
                                        Co-surgeon on first permanent implant of the Jarvik 7 total
                                        artificial heart
                                    </li>
                                    <li>
                                        First to implant a total artificial heart in a woman and a
                                        child traded medical technology company with Manny
                                        Villafaña.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="business-advisors-main">
                                <img
                                    src={Image_148}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Gene Myers, M.D.</h4>
                                <p>Interventional Cardiologist</p>
                                <ul>
                                    <li>
                                        Principal at Florida Inst. for Angiography & Gene E. Myers
                                        Cardiac/Vascular Consultants
                                    </li>
                                    <li>Completed 20,000+ coronary/ peripheral procedures</li>
                                    <li>Discovered cervical precordial angina disease</li>
                                    <li>Medical device & EMR patents</li>
                                    <li>US Navy, Lieutenant Commander</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="business-advisors-main">
                                <img
                                    src={Image_149}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>M.L. Suresh Raghavan, Ph.D.</h4>
                                <p>Professor of Biomedical Engineering, Univ. of Iowa</p>
                                <ul>
                                    <li>Fulbright Distinguished Chair</li>
                                    <li>
                                        25 years experience in cardiopulmonary biomechanics and
                                        device design, critical care therapies, soft tissue
                                        mechanics, and computational modeling
                                    </li>
                                    <li>Ph.D. in Bioengineering, University of Pittsburgh</li>
                                    <li>
                                        Fellow, American Institute of Medical & Biological
                                        Engineering
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessAdvisors