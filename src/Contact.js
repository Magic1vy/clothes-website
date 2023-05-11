function Contact(){
    return(
        <div>
            <h1>Contact</h1>
            <div className="contact">
                <p>We value your feedback and would love to hear from you. Whether you have a question, comment, or suggestion, we're here to help. You can contact us by phone, email, or through our website's contact form.</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@clothingstore.com</p>

                <form>
                    <input type="text" placeholder="Your name:" required/>
                    <input type="email" placeholder="Your email:" required/>
                    <input type="number" placeholder="Your phone number:"/>
                    <textarea placeholder="Your Comments" required/>
                </form>
                <p>Our customer service team is available to assist you during our business hours, which are Monday through Friday, 9:00am to 5:00pm EST. We strive to respond to all inquiries within 24 hours.</p>
                <p>Thank you for shopping with us!</p>
            </div>
        </div>
    )
}
export default Contact;