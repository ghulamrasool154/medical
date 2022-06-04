import React from 'react'
import redline from '../../assests/images/redline.png'
import Medical21_Investor_Deck from '../../assests/images/Medical21_Investor_Deck-122.png'
const Proceeds = () => {
    return (
        <section id="proceeds">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="title">Use of Proceeds</h1>
                        <div className="redline">
                            <img
                                src={redline}
                                alt=" "
                                className="img-fluid"
                            />
                        </div>
                        <img
                            src={Medical21_Investor_Deck}
                            alt="medical"
                            className="img-fluid"
                        />
                        <p>
                            The above is based on successful completion of 100% of the target
                            $40M Regulation A raise. For a<br />
                            detailed discussion in the event lower targets are reached, see
                            the 1-A offering circular available at
                        </p>
                        <a href="#">https://Medical21.com/invest.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proceeds