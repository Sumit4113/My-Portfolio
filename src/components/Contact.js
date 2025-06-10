
import "../styles/Contact.css"

export default function Contact() {


  return (
    // <!-- Contact Section -->
  
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Email</h3>
                            <p>jdsumit01@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Phone</h3>
                            <p>+91 6264720046</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Location</h3>
                            <p>Indore, (M.P.)</p>
                        </div>
                    </div>
                   
                </div>
                <div class="contact-form">
                   <form>
                    <img  src={`${process.env.PUBLIC_URL}/images/Contact-us.png`}  alt="Contact"
              className="contact-image"/>
                        {/* <div class="form-group">
                            <input type="text" placeholder="Your Name" required/>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" required></textarea>
                        </div>
                        <a href type="submit" className="cta-button">Send Message</a> */}
                    </form>
                </div>
            </div>
        </div>
    </section>

  )
}
