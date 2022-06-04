import React from 'react'
import redline from '../../assests/images/redline.png'
const Future_cabg = () => {
    return (
        <section id="jam_future_cabg" className="section_padding">
            <div className="container-fluid containerpadding">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="context">
                            <b className="jam_subtitle">Medical 21</b>
                            <h2 className="jam_section_title jam_color_blue">
                                Is the Future of CABG
                            </h2>
                            <div className="redline">
                                <img
                                    src={redline}
                                    alt=""
                                    className="img-fluid"

                                />
                            </div>
                            <br />
                            <ul className="jam_ul jam_color_black">
                                <li>
                                    No intrusive cuts or removal of the veins from legs, arms, or
                                    breasts
                                </li>
                                <li>
                                    The 25-30% failure rate in the first year and 50% after 5
                                    years statistic should go down drastically
                                </li>
                                <li>Shorten surgical procedure time by 35% per operation</li>
                                <li>
                                    Shorten waiting lines by providing surgery to more patients
                                    with the same hospital resources
                                </li>
                                <li>
                                    Recovery time in the hospital should take at least one day
                                    less, and the full length of the recovery should dramatically
                                    improve
                                </li>
                                <li>
                                    The graft can be used in other procedures that are strenuous
                                    on the veins, or when veins are deterred <br />— rhinosurgery,
                                    pulmonary surgery, urinary surgery, dialysis, or peripheral
                                    surgeries on the legs
                                </li>
                                <li>
                                    Provide surgery for patients who were previously not eligible,
                                    such as people with severe diabetes, varicose veins, and
                                    amputations
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5"></div>
                </div>
            </div>
        </section>
    )
}

export default Future_cabg