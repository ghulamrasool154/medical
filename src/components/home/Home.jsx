import React from 'react'
import manLauging from '../../assests/images/man-laughing.png'
import redline from '../../assests/images/redline.png'
const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 leftside">
                            <img src={manLauging} className="img-fluid man-mobile" alt="" />
                            <div className="inner">
                                <h4 className="subtitle">Biocompatible Artificial</h4>
                                <h2>Artery for Heart</h2>
                                <h1 className="title"> Bypass Surgery</h1>
                                <div className="redline">
                                    <img src={redline} alt="redline" className="img-fluid" width="250px" />
                                </div>
                                <p className="adv">
                                    Advancing Heart Bypass Surgery by Eliminating Vessel Harvesting
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 rightside">
                            <div className="aboutauthor">
                                <p>
                                    “I’ve done seven IPOs in the cardiac health space, and Medical 21 is, by far, the company I’m most excited about because of its enormous potential to improve conditions for the millions of coronary artery heart bypass surgery patien
                                </p>

                                <h1 className="authorname">
                                    Manny Villafaña, Ph.D.Sc.
                                    <br />Founder and CEO
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home