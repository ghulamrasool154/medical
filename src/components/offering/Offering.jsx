import React from 'react'
import redline from '../../assests/images/redline.png'
const Offering = () => {
    return (
        <section id="offering">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="jam_section_title jam_color_white">
                            Regulation A Offering
                        </h2>
                        <div className="redline">
                            <img
                                src={redline}
                                alt="redline"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row customMrgin">
                    <div className="col-lg-4 col-md-6 col-sm-12 box">
                        <div className="offerbox">
                            <h1>$5.80</h1>
                            <h2>
                                per <br />
                                Share
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 box">
                        <div className="offerbox">
                            <h1>$116</h1>
                            <h2>
                                Minimum <br />
                                Investment
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 box">
                        <div className="offerbox">
                            <h1>$40M</h1>
                            <h2>
                                Target <br />
                                Raise
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="viewoffer">
                            View the Offering Circular at
                            <a href="https://medical21.com/invest/"
                                target="_blank"
                            > https://Medical21.com/invest</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offering