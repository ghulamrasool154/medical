import React from 'react'

import redline from '../../assests/images/redline.png'
import Image_050 from '../../assests/images/Image_050.png'
import Image_051 from '../../assests/images/Image_051.png'
import Image_052 from '../../assests/images/Image_052.png'


const Challenge = () => {
    return (
        <section id="challenge">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h4 className="heart">Heart Disease</h4>
                        <h1 className="jam_section_title jam_color_blue">A Global Issue</h1>
                        <div className="redline">
                            <img src={redline} alt="redline" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row customMarin">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="globalissue">
                            <div className="img-section">
                                <img src={Image_050} alt="" className="img-fluid" />
                            </div>
                            <div className="context-section">
                                <p className="span3">Cardiovascular disease is the</p>
                                <h1 className="span1">#1</h1>
                                <p className="span2">cause of death worldwide</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="globalissue">
                            <div className="img-section">
                                <img src={Image_050} alt="img" className="img-fluid" />
                            </div>
                            <div className="context-section">
                                <h1>2 Billion</h1>
                                <p>adults are at risk for heart disease</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="globalissue">
                            <div className="img-section">
                                <img src={Image_051} alt="" className="img-fluid" />
                            </div>
                            <div className="context-section">
                                <h1>18 Billion</h1>
                                <p>die from heart disease every year</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="globalissue">
                            <div className="img-section">
                                <img src={Image_052} alt="img" className="img-fluid" />
                            </div>
                            <div className="context-section">
                                <h1>~1 million</h1>
                                <p>
                                    coronary bypass surgery procedures are performed yearly worldwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Challenge