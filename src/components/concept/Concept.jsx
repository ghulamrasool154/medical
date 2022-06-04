import React from 'react'
import redline from '../../assests/images/redline.png'
const Concept = () => {
  return (
    <>
      <section id="jam_concept" className="section_padding">
        <div className="container-fluid containerpadding">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-lg-12 col-md-12 col-sm-12">
              <div className="context">
                <h2 className="jam_section_title jam_color_blue">Proof of Concept</h2>
                <div className="redline">
                  <img src={redline} alt="" className="img-fluid" width="250px" />
                </div>
                <br />
                <h2 className="subtitle">Medical 21 has conducted animal studies<br /> that have shown positive results <br /> surpassing the critical 90-day FDA<br /> requirement.
                </h2>
                <br />
                <p className="disc">
                  Our results have continued over 180<br />  days after the procedure and we’re<br /> getting ready for human studies.
                </p>
              </div>

            </div>
            <div className="col-lg-6 col-md-5"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Concept