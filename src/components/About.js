import "../styles/About.css"



export default function About() {


  return (
    // <!-- About Section -->
    <section id="about" class="about " >
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-image">
                    <div class="image-wrapper">
                        <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" />
                        
                      
                    </div>
               
                </div>
                <div class="about-text">
<p>
  Hi, I'm Sumit — a full-stack Java developer passionate about building responsive and user-friendly web applications.
</p>
<p>
  I specialize in Java, Spring Boot, MySQL, Servlet,  and front-end tools like React.js.
</p>
<p>
  I’ve built secure, scalable apps including online bookstores and contact managers, and I love learning new technologies.
</p>


                    <div class="about-details">
                                           
                        <div class="detail">
                            <i class="fas fa-graduation-cap"></i>
                            <span>Information Technology </span>
                        </div>
                    </div>
                  <a href={`${process.env.PUBLIC_URL}/images/Sumit_Resume.pdf`} download className="cta-button">
                        Download CV
                          </a>


                    
                </div>
            </div>
        </div>
    </section>
      )
}
