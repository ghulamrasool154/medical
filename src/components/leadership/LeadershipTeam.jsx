import React from 'react'

import redline from '../../assests/images/redline.png'
import Image_135 from '../../assests/images/Image_135.png'
import Image_134 from '../../assests/images/Image_134.png'
import Image_133 from '../../assests/images/Image_133.png'
const LeadershipTeam = () => {
    return (
        <section id="leadership-team">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">Medical 21 Leadership Team</h1>
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
                            <div className="leadership-main">
                                <img
                                    src={Image_133}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Eric Solien, B.S.</h4>
                                <p>Senior Research Scientist</p>
                                <ul>
                                    <li>20 years working with Founder/CEO Manny Villafana</li>
                                    <li>
                                        Accomplished pre-clinical surgeon. expert in the
                                        pre-clinical development of bypass grafts
                                    </li>
                                    <li>
                                        Previously Associate Director of the Cardiovascular Research
                                        Laboratory (ESS) at University of Minnesota and Senior
                                        Surgeon at American Preclinical Services
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="leadership-main">
                                <img
                                    src={Image_134}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Chaid Schwarz, Ph.D.</h4>
                                <p>Head of Research and Development</p>
                                <ul>
                                    <li>
                                        Ph.D. in Biomedical Engineering from University of Iowa,
                                        where he designed, developed, and tested
                                    </li>
                                    <li>
                                        materials for transcatheter deliverable heart valves,
                                        stents, and computationally modeled endovascular grafts for
                                        the treatment of abdominal aortic aneurysms
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="leadership-main">
                                <img
                                    src={Image_135}
                                    alt=""
                                    className="img-fluid"
                                />
                                <h4>Jeff Vreeman, B.S.</h4>
                                <p>Head of Manufacturing</p>
                                <ul>
                                    <li>10 years working with Founder/CEO Manny Villafaña</li>
                                    <li>
                                        ·Broad medical device experience includes roles in
                                        manufacturing, operations, process development, research and
                                        development, and quality, along with extensive expertise in
                                        nitinol support systems
                                    </li>
                                    <li>
                                        Previous Senior Engineer/ Operations Manager and Senior R&D
                                        Engineer at MIVI Neuroscience, Inc.
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

export default LeadershipTeam