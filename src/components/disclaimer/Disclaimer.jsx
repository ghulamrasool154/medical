import React from 'react'
import redline from '../../assests/images/redline.png'

const Disclaimer = () => {
    return (
        <section id="jam_section1" className="section_padding jam_align_end">
            <div className="container-fluid containerpadding">
                <div className="row">
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12"></div>

                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <h2 className="jam_section_title jam_color_blue">
                            Regulation A Disclaimer
                        </h2>
                        <div className="redline">
                            <img
                                src={redline}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <br />
                        <p className="jam_pare jam_color_black jam_bold">
                            An Offering Statement regarding this Offering has been filed with
                            the SEC. The SEC has qualified that Offering Statement, which only
                            means that the Company may make sales of securities described by
                            the Offering Statement. It does not mean that the SEC has
                            approved, passed upon merits or passed upon the accuracy of
                            completeness of the information in the Offering Statement. The
                            Offering Circular that is part of that Offering Statement can be
                            found at:
                            <a href="https://www.Medical21.com/invest" target="_blank"
                            >https://www.Medical21.com/invest </a>. You should read the Offering Circular before making any
                            investment.
                        </p>
                        <br />
                        <p className="jam_pare jam_color_black jam_bold">
                            This presentation may contain forward-looking statements and
                            information relating to, among other things, the company, its
                            business plan and strategy, and its industry. These statements
                            reflect management’s current views with respect to future events
                            based information currently available and are subject to risks and
                            uncertainties that could cause the company’s actual results to
                            differ materially. Investors are cautioned not to place undue
                            reliance on these forward-looking statements as they contain
                            hypothetical illustrations of mathematical principles, are meant
                            for illustrative purposes, and they do not represent guarantees of
                            future results, levels of activity, performance, or achievements,
                            all of which cannot be made. Moreover, no person nor any other
                            person or entity assumes responsibility for the accuracy and
                            completeness of forward-looking statements, and is under no duty
                            to update any such statements to conform them to actual results.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Disclaimer