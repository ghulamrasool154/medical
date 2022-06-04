import React from 'react'

import redline from '../../assests/images/redline.png'
import Medical21_Investor_Deck from '../../assests/images/Medical21_Investor_Deck-10.png'
const Timeline = () => {
    return (
        <section id="jam_timeline" className="section_padding jam_align_center">
            <div className="container-fluid containerpadding">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className="jam_section_title jam_color_white">Our Timeline</h2>
                        <div className="redline">
                            <img
                                src={redline}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <p className="jam_pare jam_color_black jam_bold">
                            <img
                                src={Medical21_Investor_Deck}
                                alt=""
                                className="img-fluid timelineimg"
                            />
                        </p>
                        <p className="timelinep">Primary market:</p>
                        <ul className="jam_color_white jam_ul_inline">
                            <li>US Hospitals</li>
                            <li>We have a partnership with Mayo clinic</li>
                            <li>Worldwide Distribution</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Timeline