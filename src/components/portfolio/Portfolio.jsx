import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/pg1.jpg"
import IMG2 from "../../assets/f3.jpg"
import IMG3 from "../../assets/pmm.jpeg"
import IMG5 from "../../assets/pg5.png"
import IMG6 from "../../assets/pg6.jpg"




const Portfolio = () => {
        return (
                <section id='portfolio'>
                        <h5> My Recent Word</h5>
                        <h2> Portfolio! </h2>

                        <div className="container portfolio_container">
                                <article className='portfolio_items'>
                                        <div className="portfolio_item-image">
                                                <img src={IMG1} alt="" />
                                        </div>
                                        <h3>AirLiam </h3>
                                        <div className="portfolio_item-cta">
                                                <a href="https://air-liam.vercel.app/home" className='btn' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                        </div>
                                </article>

                                <article className='portfolio_items'>
                                        <div className="portfolio_item-image">
                                                <img src={IMG2} alt="" id='g4'/>
                                        </div>

                                        <h3> Climate Weather Temp</h3>
                                        <div className="portfolio_items-cta">

                                                <a href="https://github.com/benattimj" className='btn btn-primary'>GitHub</a>
                                                <a href="https://weather-sigma-steel.vercel.app/" className='btn' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                        </div>

                                </article>


                                <article className='portfolio_items'>
                                        <div className="portfolio_item-image">
                                                <img src={IMG3} alt="" />
                                        </div>
                                        <div className="portfolio_item-cta">
                                                <h3>Premiumm Photography</h3>
                                                <a href="https://www.premiummphotography.com/" className='btn' target='_blank' rel="noopener noreferrer">Visit</a>
                                        </div>
                                </article>

                                <article className='portfolio_items'>
                                        <div className="portfolio_item-image">
                                                <img src={IMG5} alt="" />
                                        </div>
                                        <div className="portfolio_item-cta">
                                                <h3>Enterprise resource planning - ERP</h3>
                                                <a href="https://github.com/benattimj" className='btn btn-primary'>GitHub</a>
                                                <a href="https://protectedecommerce.vercel.app" className='btn ' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                        </div>
                                </article>

                                <article className='portfolio_items'>
                                        <div className="portfolio_item-image">
                                                <img src={IMG6} alt="" />
                                        </div>
                                        <div className="portfolio_item-cta">
                                                <h3>Be able to control everything in one application</h3>
                                                <a href="https://github.com/benattimj" className='btn btn-primary'>GitHub</a>
                                                <a href="https://dribbble.com/shots/20239671-Wallet-Desktop-app" className='btn ' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                        </div>
                                </article>

                        </div>


                </section>
        )
}

export default Portfolio