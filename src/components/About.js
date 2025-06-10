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
                    <p>Hello! I'm a passionate full-stack developer with a love for creating interactive, responsive, and user-friendly websites. With expertise in both front-end and back-end technologies, I bring ideas to life through clean and efficient code.</p>
                    <p>My journey in web development started 5 years ago, and since then, I've worked on various projects ranging from simple landing pages to complex web applications.</p>
                    <div class="about-details">
                                           
                        <div class="detail">
                            <i class="fas fa-graduation-cap"></i>
                            <span>Computer Science Degree</span>
                        </div>
                    </div>
                   <a href="/Sumit_Resume.pdf" className="cta-button">Download CV</a>

                    
                </div>
            </div>
        </div>
    </section>
      )
}
