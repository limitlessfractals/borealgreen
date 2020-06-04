import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import doc from '../assets/docs/Covid19.pdf'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="About Us" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Mission</h2>
                    </header>
                    <p>Boreal Green makes custom preparation plans for individuals and families. We analyze all catastrophic risks and get clients ready to face them mentally, physically, and financially in all aspects of life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/../assets/images/Covid19_Biosecurity.pptx" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Philosophy</h3>
                            </header>
                            <p>
                                The name Boreal Green is inspired by <i>The Dao of Capital</i> by Mark Spitznagel, reknowned hedge fund manager. The boreal forest is a central metaphor for Spitznagel's tail risk hedging investment strategy. At Boreal Green, we also do tail risk hedging, but we are not a hedge fund or even financial advisors. We look at the big picture and make plans for dealing with tail risks in all aspects of life.
                            </p>
                            <p>
                                The conifers that make up boreal forests are some of the oldest and most biologically successful species of organisms in the world, first appearing 300 million years ago and still thriving today. Conifers are adapted to handling their worst enemy &mdash; wildfires. Crowded, unsustainable growth of trees in a forest is analogous to financial bubbles. When lightning ignites wildfires, boreal forests are better prepared to thrive after the crisis than other forests. The conifers can thrive where their competitors couldn't even survive.
                            </p>
                            <p>
                                At Boreal Green, we seek to prepare you and your family for uncertain and catastrophic scenarios much like how evolution has prepared boreal forests for the past 300 million years. When disaster strikes, you will be able to thrive while others are struggling to survive.
                            </p>
                          
                        </div>
                    </div>
                </section>

                {/*
                <section>
                    <Link to="/signup" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Team</h3>
                            </header>
                            <p>Wuqiong Fan</p>
                            <p>Jonathan Rolfsen</p>
                            <p>Eric Anderson</p>
                         
                        </div>
                    </div>
                </section>
                */}
                <section>
                    <Link to="/signup" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Preparation Resources</h3>
                            </header>
                            <p>
                                <a href={doc}>COVID-19 and Biosecurity</a>

                            </p>
                            {/*
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                            */}
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing