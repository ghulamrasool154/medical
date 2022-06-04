import React from 'react'
import redline from '../../assests/images/Image_073.png'
import Image_014 from '../../assests/images/Image_014.png'
import Image_015 from '../../assests/images/Image_015.png'
import Image_016 from '../../assests/images/Image_016.png'
import Image_044 from '../../assests/images/Image_044.png'
import guident from '../../assests/images/guident.png'
import Image_020 from '../../assests/images/Image_020.png'
import stmedical from '../../assests/images/st-medical.png'
import abot from '../../assests/images/abot.png'
import Image_028 from '../../assests/images/Image_028.png'
import ats from '../../assests/images/ats.png'
import Image_038 from '../../assests/images/Image_038.png'
import Image_039 from '../../assests/images/Image_039.png'
import Image_040 from '../../assests/images/Image_040.png'
import whitelogo from '../../assests/images/white-logo.png'
const Founder = () => {
    return (
        <section id="founder">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 leftsidess position-relative">
                        <div className="aboutauthor">
                            <p>
                                Over the last 50 years, Manny Villafaña has revolutionized the coronary device industry. His contributions led to the most significant advances in coronary health and have impacted the lives of millions of people.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 rightside">
                        <b className="subtitle">The Living Legend of Medicin</b>
                        <h1 className="manyvillafna">Manny Villafaña, Ph.D.Sc.</h1>
                        <p className="founder">Founder, Chairman, CEO | Medical 21, INC</p>
                        <div className="libbar">
                            <img src={redline} alt="redline" className="img-fluid" />
                        </div>

                        <div className="yearupdate">
                            <div className="lefside">
                                <div className="img">
                                    <img src={Image_014} alt="img" className="img-fluid  width100 " />
                                </div>
                                <div className="contnet">
                                    <h1 className="sameStyle">1972:</h1>
                                    <p>
                                        founded CPI/Guidant; co-inventor of the first lithium-powered pacemakers and defibrillators
                                    </p>
                                </div>
                            </div>
                            <div className="center">
                                <img src={Image_015} alt="img" className="img-fluid customWidth" />
                                <img src={Image_016} alt="img" className="img-fluid customWidth" />
                                <img src={guident} alt="img" className="img-fluid customWidth" />
                                <img src={Image_044} alt="img" className="img-fluid customWidth" />
                            </div>
                            <div className="right">
                                <h1 className="price sameStyle">$27B</h1>
                            </div>
                        </div>
                        <div className="yearupdate">
                            <div className="lefside">
                                <div className="img">
                                    <img src={Image_020} alt="img" className="img-fluid width100" />
                                </div>
                                <div className="contnet">
                                    <h1 className="sameStyle">1976:</h1>
                                    <p>
                                        founded St. Jude Medical, Inc.; co-developer of the St. Jude heart valve
                                    </p>
                                </div>
                            </div>
                            <div className="center">
                                <img style={{
                                    width: '150px'
                                }} src={stmedical} alt="img" className="img-fluid customWidth" />
                                <img src={abot} alt="img" className="img-fluid customWidth" />
                            </div>
                            <div className="right">
                                <h1 className="price sameStyle">$30B</h1>
                            </div>
                        </div>
                        <div className="yearupdate">
                            <div className="lefside">
                                <div className="img">
                                    <img src={Image_028} alt="img" className="img-fluid width100" />
                                </div>
                                <div className="contnet">
                                    <h1 className="sameStyle">1987:</h1>
                                    <p>
                                        founded CPI/Guidant; co-inventor of the first lithium-powered pacemakers and defibrillators
                                    </p>
                                </div>
                            </div>
                            <div className="center">
                                <img src={ats} alt="img" className="img-fluid customWidth" />
                                <img src={Image_039} alt="img" className="img-fluid customWidth" />
                            </div>
                            <div className="right">
                                <h1 className="price sameStyle">$400B</h1>
                            </div>
                        </div>
                        <div className="yearupdate last">
                            <div className="lefside">
                                <div className="img">
                                    <img src={Image_038} alt="img" className="width100 img-fluid" />
                                </div>
                                <div className="contnet">
                                    <h1 className="sameStyle">2016:</h1>
                                    <p>co-inventor of the nitinol support</p>
                                </div>
                            </div>
                            <div className="center">
                                <img src={Image_039} alt="img" className="img-fluid customWidth" />
                                <img src={Image_040} alt="img" className="img-fluid customWidth" />
                                <img src={whitelogo} alt="img" className="img-fluid customWidth" />
                            </div>
                            <div className="right">
                                <h1 className="price sameStyle"></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder