import './faq.scss'

type Props = {}

const FaqSection = (_props: Props) => {
    return (
        <div className='faq-section'>
            <div className="container">
                <h1>Frequently Asked Questions</h1>
                <p>Your Questions, Answered. Browse through our FAQ section to find the information you need.</p>
                <details>
                    <summary>Will the meal plans accommodate my calorie and macronutrient requirements?</summary>
                    <div>
                        Absolutely! The AI takes your calorie and macronutrient needs into account when generating meal.
                    </div>
                </details>
                <details>
                    <summary>What types of diets or cuisines does the AI meal planning platform support?</summary>
                    <div>
                        The platform can cater to various diets and cuisines, including but not limited to vegetarian, vegan, Mediterranean, keto, paleo, gluten-free, and more. It can also consider specific cultural or regional food preferences.                            </div>
                </details>
                <details>
                    <summary>How does the AI-powered meal planning platform work?</summary>
                    <div>
                        The platform uses machine learning and natural language processing to analyze user input, such as dietary preferences, food restrictions, and health objectives. It then processes this information to generate customized meal plans that meet the user's specific needs.
                    </div>
                </details>
                <details>
                    <summary>Can I track my nutritional intake with the meal plans?</summary>
                    <div>
                        Yes, the platform provides detailed nutritional information for each meal. You can track your daily calorie intake and macronutrients to ensure you're meeting your dietary requirements.
                    </div>
                </details>
                <details>
                    <summary>Are the recipes used in the meal plans easy to follow?</summary>
                    <div>
                        Absolutely! We curate recipes that are not only delicious and nutritious but also easy to prepare. Each recipe comes with step-by-step instructions and cooking tips to make your meal preparation hassle-free.
                    </div>
                </details>
            </div>
        </div>
    )
}

export default FaqSection