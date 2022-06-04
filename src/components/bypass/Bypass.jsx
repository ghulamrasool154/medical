import React from 'react'
import redline from '../../assests/images/redline.png'
const Bypass = () => {
    return (
        <section id="jam_bypass" className="section_padding">
            <div className="container-fluid containerpadding">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12"></div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <h2 className="jam_section_title jam_color_white">Coronary Artery Bypass</h2>
                        <b className="jam_subtitle ">Graft (CABG) Surgery</b>
                        <div className="redline">
                            <img src={redline} alt="img" className="img-fluid" />
                        </div>
                        <br />
                        <p className="jam_pare jam_color_white">
                            Coronary artery bypass is a surgical procedure that restores blood flow in the heart. This is done by using veins harvested from other parts of a patient’s body to bypass a blocked artery. It is the most common cardiac surgery performed worldwide, yet
                            there hasn’t been an advancement to the procedure in 30 years.
                        </p>
                        <b className="jam_subtitle ">Vein harvesting poses several challenges:</b>
                        <ul className="jam_ul jam_color_white">
                            <li>Pain & scarring at harvesting site</li>
                            <li>Longer recovery time</li>
                            <li>Risk of infection, disfigurement, and other complications</li>
                            <li>Many patients are ineligible (diabetes, varicose veins, amputees)</li>
                            <li>Long procedures mean higher costs and reduced availability</li>
                            <li>25-30% failure rate in first year, 50% in 5–10 years</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bypass