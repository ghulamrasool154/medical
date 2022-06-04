import React from 'react'
import redline from '../../assests/images/redline.png'
import images3 from '../../assests/images/3.png'
import images4 from '../../assests/images/4.png'
import images1 from '../../assests/images/1.png'
import Untitled from '../../assests/images/Untitled-1.png'


const Opportunity = () => {
    return (
        <section id="opportunity">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Market Size</h2>
                        <h1 className="title">and Opportunity</h1>
                        <div className="redline">
                            <img src={redline} alt="img" className="img-fluid" />
                        </div>
                        <h3>Coronary artery bypass grafting (CABG) remains the most <br />common cardiac surgery performed today worldwide.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">

                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="opportunity-main">
                                    <img src={images4} alt="" />
                                    <p>800,000–1,000,000<br /> CABG surgeries per<br /> year worldwide</p>
                                </div>
                                <div className="opportunity-main">
                                    <img src={images1} alt="" />
                                    <p>Each procedure <br />requires 2–5 devices,<br /> 3.5 on average</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="opportunity-main">
                                    <img src={Untitled} alt="" />
                                    <p>There is a need for<br /> 2–3M grafts per year<br /> worldwide.
                                    </p>
                                </div>
                                <div className="opportunity-main">
                                    <img src={images3} alt="" />
                                    <p>Medical 21’s<br /> estimated market<br /> size: $8–10 Billion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Opportunity