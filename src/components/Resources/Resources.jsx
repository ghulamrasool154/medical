import React from 'react'
import redline from '../../assests/images/redline.png'
const Resources = () => {
    return (
        <section id="jam_section2" className="section_padding jam_align_end">
            <div className="container-fluid containerpadding">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-sm-12"></div>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                        <h2 className="jam_section_title jam_color_blue">Resources</h2>
                        <div className="redline">
                            <img
                                src={redline}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <br />
                        <p className="jam_pare jam_color_black jam_bold">
                            <a href="https://idataresearch.com/new-study-shows-approximately-340000-cabg-procedures-per-year-in-the-united-states/"
                                target="_blank"
                            >https://idataresearch.com/new-study-shows-approximately-340000-cabg-procedures-per-year-in-the-united-states/</a >
                            <br /><br />
                            Weiss AJ, Elixhauser A. Trends in Operating Room Procedures in
                            U.S. Hospitals, 2001-2011: Statistical Brief #171. Healthcare Cost
                            and Utilization Project (HCUP) Statistical Briefs. Rockville (MD):
                            Agency for Healthcare Research and Quality (US), 2006. [PubMed]
                            OECD. Mortality from heart disease and stroke. In: Health at a
                            Glance 2009: OECD Indicators. Paris: OECD Publishing, 2009.
                            [Google Scholar] <br /><br />
                            <a href="https://pubmed.ncbi.nlm.nih.gov/24851286/" target="_blank"
                            >https://pubmed.ncbi.nlm.nih.gov/24851286/</a><br />
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5906252/"
                                target="_blank"
                            >https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5906252/</a><br />
                            <a href="https://www.heart.org/-/media/phd-files-2/science-news/2/2021-heart-and-stroke-stat-update/2021_heart_disease_and_stroke_statistics_update_fact_sheet_at_a_glance.pdf"
                                target="_blank"
                            >https://www.heart.org/-/media/phd-files-2/science-news/2/2021-heart-and-stroke-stat-update/2021_heart_disease_and_str
                                oke_statistics_update_fact_sheet_at_a_glance.pdf</a><br />
                            <a href="https://www.bhf.org.uk/informationsupport/treatments/coronary-bypass-surgery"
                                target="_blank"
                            >https://www.bhf.org.uk/informationsupport/treatments/coronary-bypass-surgery</a ><br />
                            <a href="https://www.annalsthoracicsurgery.org/article/S0003-4975(08)01836-5/fulltext"
                                target="_blank">https://www.annalsthoracicsurgery.org/article/S0003-4975(08)01836-5/fulltext</a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Resources