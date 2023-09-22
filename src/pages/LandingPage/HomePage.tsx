import './HomePage.scss'
import { MdArrowUpward } from 'react-icons/md'
import ContactUs from './sections/contact/contact'
import HomeSection from './sections/home/home'
import FeatureSection from './sections/features/feature'
import Plans from './sections/pricing plans/plans'
import FaqSection from './sections/faq/faq'
import TestimonialSection from './sections/testimonial/testimonial'
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import image from "/src/assets/images/logo.png";
import LandingPageNavBar from '../GlobalComponents/LandingPageNavBar/LandingPageNavBar'
type Props = {}

const HomePage = (_props: Props) => {
    return (
        <div className='homepage'>
            <LandingPageNavBar/>

            <section className='section-home' id="#">
                <HomeSection />
            </section>

            <section className='section-features' id="Features">
                <FeatureSection />
            </section>


            <section className='section-plans' id="Pricing">
                <Plans />
            </section>


            <section className='section-test' id="Testimonials">
                <TestimonialSection />
            </section>


            <section className='section-faq' id="FAQ's">
                <FaqSection />
            </section>


            <section className='footer-home'>

                <section className='section-contact' id="ContactUs">
                    <ContactUs />
                </section>

                <div>
                    <div className='footer'>
                        <div className='first-div-footer'>
                            <div className='company-info'>
                                <img className='company-logo' src={image} />
                                <p className='company-name'><a href='#'>Balanced Bites</a></p>
                            </div>
                            <div className='footer-text'>
                                <p><strong>Balanced Bite</strong> offers personalised meal plans, nutritious recipes and expert guidance for a balanced lifestyle. Embrace optimal health with our AI-powered approach.</p>
                            </div>
                            <div className='logos'>
                                <span className='fb'><RiFacebookBoxFill/></span>
                                <span className='insta'><RiInstagramFill /></span>
                                <span className='twitter'><RiTwitterFill /></span>
                            </div>
                            <div>&copy; Copyright 2023 Balanced Bite</div>
                        </div>
                        <div className='second-div-footer'>
                            <p className='heading-section'>Sections</p>
                            <div className='nav-links'>
                                <ul>
                                    <li><a href="#Features">Features</a></li>
                                    <li><a href="#Pricing">Pricing</a></li>
                                    <li><a href="#Testimonials">Testimonials</a></li>
                                    <li><a href="#FAQ's">FAQ's</a></li>
                                    <li><a href="#ContactUs">Contact us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='second-div-footer'>
                            <p className='heading-section'>More Information</p>
                            <div className='nav-links'>
                                <ul>
                                    <li>Help</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className='top-button'>
                <a href='#'><MdArrowUpward /></a>
            </div>

        </div>
    )
}

export default HomePage