import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("Submit");

    const submitFunction = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "de668ab9-4487-40af-8e7e-f4167859734e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contactId' className='contact'>
            <div className="contact-title">
                <h1>Contact Info</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit debitis aliquid cupiditate voluptas iure culpa est accusamus, error perspiciatis?</p>
                    <div className="contact-detail-container">
                        <div className="contact-detail">
                            <i class="fa-solid fa-envelope"></i> <p>kunalroy267483@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <i class="fa-solid fa-phone"></i> <p>+91 9870429459</p>
                        </div>
                        <div className="contact-detail">
                            <i class="fa-solid fa-location-dot"></i> <p>Delhi, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={submitFunction} className='contact-right' action="https://api.web3forms.com/submit" method="POST" >
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your email' name='email' required />
                    <label htmlFor="">What's Your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='contact-submit'>{result}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact