import React from 'react'
import redline from '../../assests/images/redline.png'
import Image_068 from '../../assests/images/Image_068.png'
import Image_069 from '../../assests/images/Image_069.png'
import Image_070 from '../../assests/images/Image_070.png'
const Graft = () => {
    return (
        <section id="graft">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">For over 50 years, researchers have<br /> been trying to develop an artificial graft</h1>
                        <h2>unsuccessfully.</h2>
                        <div className="redline">
                            <img src={redline} alt="img" className="img-fluid" />
                        </div>
                        <h3>Blood vessels are difficult to replicate. A graft must be:</h3>
                    </div>
                </div>
                <div className="row graft-icon">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="graft-main">
                            <img src={Image_068} alt="" className="img-fluid" />
                            <h4>Flexible</h4>
                            <p>to account for individual patient placement requirements and to sustain constant movements and contractions of the circulatory system.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="graft-main">
                            <img src={Image_069} alt="" className="img-fluid" />
                            <h4>Strong</h4>
                            <p>a heart pumps 40 million times a year.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="graft-main">
                            <img src={Image_070} alt="" className="img-fluid" />
                            <h4>Biocompatible</h4>
                            <p>so the body doesn’t create inflammation, blockages, or reject the graft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Graft