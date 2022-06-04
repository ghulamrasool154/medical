import React from 'react'

import Image_129 from '../../assests/images/Image_129.png'
import redline from '../../assests/images/redline.png'
const Leadership = () => {
    return (
        <section id="leadership">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="portal">
                            <h1>Investor Portal</h1>
                            <div className="redline">
                                <img
                                    src={redline}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h4>Next Steps</h4>
                            <p>
                                Investor Portal <br />
                                <a href="https://medical21.com/invest/" target="_blank"
                                > Click here </a> to learn more about how to support Medical 21’s growth and your
                                investment opportunity.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-12 rightside">
                        <img src={Image_129} alt="Image_129" className="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leadership