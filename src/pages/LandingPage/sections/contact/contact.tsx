import './contact.scss'
type Props = {}

const ContactUs = (_props: Props) =>
(
    <div className='contact-us'>
        <div className='contact-text'>
        <p className='contact-heading'>Contact Us!</p>
        <p className='contact-subheading'>We are ready to answer your remaining questions if any !</p>
        </div>
        <div className="contact-div-button">
            <button className="contactbutton">
                Contact Us
            </button>
        </div>
    </div>
)

export default ContactUs