import React from 'react'
import redline from '../../assests/images/redline.png'
import Image_073 from '../../assests/images/Image_073.png'
import Image_068 from '../../assests/images/Image_068.png'
import Image_069 from '../../assests/images/Image_069.png'
import Image_070 from '../../assests/images/Image_070.png'
const Solution = () => {
    return (
        <section id="solution">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-5"></div>
                    <div className="col-xl-6 col-md-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="context">
                            <h1 className="jam_section_title jam_color_blue">Enter Medical 21</h1>
                            <div className="sec-center">
                                <img src={redline} alt="" className="img-fluid" />
                            </div>
                            <p className="disc">
                                Medical 21 is reshaping the future of cardiac bypass surgery by developing an artificial artery that will eliminate the need for blood vessel harvesting. This significant advancement can help reduce the systemic challenges that traditional CABG surgery
                                presents.
                            </p>
                            <h1 className="jam_subtitle jam_bold jam_color_blue">The MAVERICS Graft System:</h1>

                            <h6 className="tags">
                                Regenerative, biocompatible, & thrombo-resistant
                            </h6>
                            <div className="sec-center">
                                <img src={Image_073} alt="img" className="img-fluid" />
                            </div>

                            <div className="solution-box">
                                <div className="img_sec">
                                    <img src={Image_068} alt="img" className="img-fluid" />
                                </div>
                                <div className="context_sec">
                                    <p>
                                        The MAVERICS graft is thin, flexible, and resilient enough to withstand the intense and very specific conditions the cardiovascular system requires
                                    </p>
                                </div>
                            </div>

                            <div className="solution-box">
                                <div className="img_sec">
                                    <img src={Image_069} alt="" className="img-fluid" />
                                </div>
                                <div className="context_sec">
                                    <p>
                                        The MAVERICS graft is thin, flexible, and resilient enough to withstand the intense and very specific conditions the cardiovascular system requires
                                    </p>
                                </div>
                            </div>

                            <div className="solution-box">
                                <div className="img_sec">

                                    <img src={Image_070} alt="img" className="img-fluid" />
                                </div>
                                <div className="context_sec">
                                    <p>
                                        The MAVERICS graft is thin, flexible, and resilient enough to withstand the intense and very specific conditions the cardiovascular system requires
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution