import './feature.scss'
import image from "/src/assets/images/feature.png";
import check from "/src/assets/images/check.svg";

type Props = {}

const FeatureSection = (_props: Props) => {
    return (
        <div className='container-features'>
            <div className='image-features'>
                <img className='illustration' src={image} />
            </div>
            <div className='text-features'>
                <p className='primary-txt'>We Provide Accessible Features You Can Use</p>
                <p className='secondary-txt'>Personalised meal plans, nutritious recipes and expert guidance for a balanced lifestyle. Embrace optimal health with our AI-powered approach.</p>
                <div>
                    <div className='list-features'>
                        <div className='list'>
                        <img src={check} /> 
                        <p>Real-Time Macros Tracking</p>
                        </div>
                        <div className='list'>
                        <img src={check} /> 
                        <p>Budget Friendy Meal Options</p>
                        </div>
                        <div className='list'>
                        <img src={check} /> 
                        <p>Recipes and Ingredients</p>
                        </div>
                        <div className='list'>
                        <img src={check} /> 
                        <p>Options for Ovo-Vegetarians</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection