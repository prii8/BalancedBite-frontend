import { Carousel } from 'antd'
import './testimonial.scss'
import male from "/src/assets/images/male.png";
import female from "/src/assets/images/female.png";

import { AiFillStar } from "react-icons/ai";
type Props = {}

const TestimonialSection = (_props: Props) => {
    return (
        <div>
            <div className='test-text'>
                <p className='header-test'>Testimonials</p>
                <p className='sec-test'>These are the stories of our customers who have joined us with great pleasure.</p>
            </div>
            <div className='user-testimonial'>
                <Carousel style={{ height: '40vh', width: "100vw" }} arrows={true} infinite pauseOnHover  autoplay easing='linear'>
                    <div className='testimonial-container'>
                        <div className='cards'>
                            <div className='test-card-focused'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={female} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Arya Sinha</p>
                                            <p className='user-location'> Gurgaon, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "I have been following diet plans curated by Balanced Bite from almost past 6 months, each day new recipes and dishes become exciting part."
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Hitesh Saha</p>
                                            <p className='user-location'> Bhopal, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Embarking on a health journey with Balanced Bite has transformed my eating habits. Six months in, I'm still discovering delightful new recipes every day!"
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Anant Gupta</p>
                                            <p className='user-location'> Lucknow, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Balanced Bite's ingenious diet plans turned my culinary world upside down. Six months in, I'm a healthier, happier food explorer.It has been a wonderful experience!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-container'>
                        <div className='cards'>
                            <div className='test-card-focused'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Hitesh Saha</p>
                                            <p className='user-location'> Bhopal, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Balanced Bite's ingenious diet plans turned my culinary world upside down. Six months in, I'm a healthier, happier food explorer.It has been a wonderful experience!"
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Anant Gupta</p>
                                            <p className='user-location'> Lucknow, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Embarking on a health journey with Balanced Bite has transformed my eating habits. Six months in, I'm still discovering delightful new recipes every day!"
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={female} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Arya Sinha</p>
                                            <p className='user-location'> Gurgaon, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "I have been following diet plans curated by Balanced Bite from almost past 6 months, each day new recipes and dishes become exciting part."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-container'>
                        <div className='cards'>
                            <div className='test-card-focused'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Anant Gupta</p>
                                            <p className='user-location'> Lucknow, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Embarking on a health journey with Balanced Bite has transformed my eating habits. Six months in, I'm still discovering delightful new recipes every day!"
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={female} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Arya Sinha</p>
                                            <p className='user-location'> Gurgaon, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "Balanced Bite's ingenious diet plans turned my culinary world upside down. Six months in, I'm a healthier, happier food explorer.It has been a wonderful experience!"
                                    </p>
                                </div>
                            </div>
                            <div className='test-card'>
                                <div className='primary-div'>
                                    <div className='first-div'>
                                        <div className='user-image'>
                                            <img src={male} />
                                        </div>
                                        <div className='user-info'>
                                            <p className='user-name'>Hitesh Saha</p>
                                            <p className='user-location'> Bhopal, India</p>
                                        </div>
                                    </div>
                                    <div className='user-rating'>
                                        <p className='text-rating'>4.5</p>
                                        <AiFillStar className='rating-star' />
                                    </div>
                                </div>
                                <div className='secondary-div'>
                                    <p>
                                    "I have been following diet plans curated by Balanced Bite from almost past 6 months, each day new recipes and dishes become exciting part."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default TestimonialSection