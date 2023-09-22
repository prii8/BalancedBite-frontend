import './plans.scss'
import image from "/src/assets/images/plan.png";
import check from "/src/assets/images/check-plan.png";
import { useNavigate } from 'react-router-dom';

type Props = {}

const Plans = (_props: Props) => {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/app/target")
    }

    return (
        <div className='container-pricing'>
            <div className='text-pricing'>
                <p className='primary-text-pricing'>Choose the Right Plan for You</p>
                <p className='secondary-text-pricing'>Different Plans which allow different features curated for you needs</p>
            </div>
            <div className='container-plans'>
                <div className='plan-card'>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="pricing-table">
                                <div className="pricing-inner">
                                    <div className='image-plan'>
                                        <img src={image} />
                                    </ div>
                                    <div className="plan-name">
                                        <p>Basic</p>
                                    </div>
                                    <div className="plan-desc">
                                        <div className='feature-plan'><img src={check} /><p>Limited Access</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Daily Plans</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Water Intake Tracker</p></div>
                                    </div>
                                    <div className="plan-price-container">
                                        <p className="plan-price">Free</p>
                                        <button onClick={handleClick} style={{cursor:"pointer"}} >Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="pricing-table">
                                <div className="pricing-inner">
                                    <div className='image-plan'>
                                        <img src={image} />
                                    </ div>
                                    <div className="plan-name">
                                        <p>Standard</p>
                                    </div>
                                    <div className="plan-desc">
                                        <div className='feature-plan'><img src={check} /><p>Weekly Plans</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Favourite Dishes</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Progress Tracker</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Community Access</p></div>
                                    </div>
                                    <div className="plan-price-container">
                                        <p className="plan-price">Rs. 400</p>
                                        <button onClick={handleClick} style={{cursor:"pointer"}}>Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="pricing-table">
                                <div className="pricing-inner">
                                    <div className='image-plan'>
                                        <img src={image} />
                                    </ div>
                                    <div className="plan-name">
                                        <p>Premium</p>
                                    </div>
                                    <div className="plan-desc">
                                        <div className='feature-plan'><img src={check} /><p>Unlimited Access</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Recipe Recommedations</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Consult Experts</p></div>
                                        <div className='feature-plan'><img src={check} /><p>Community Support</p></div>
                                    </div>
                                    <div className="plan-price-container">
                                        <p className="plan-price">Rs. 800</p>
                                        <button onClick={handleClick} style={{cursor:"pointer"}}>Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans