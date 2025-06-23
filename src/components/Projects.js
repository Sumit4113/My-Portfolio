import "../styles/Projects.css"

export default function Projects() {
    return(
       // <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            
            <div class="projects-grid">
                <div class="project-card" data-category="web">
                    <div class="project-img">
                     <img src={`${process.env.PUBLIC_URL}/images/1b55.jpg`} alt="Project 1" />
                    </div>
                    <div class="project-info">
                        <h3>Contact Manager</h3>
                        <p>A fully responsive my smart contact manager web app , 
                           and for more information check my git repository readme file. </p>
                        <div class="project-tags">
                            <span>Spring-boot</span>
                            <span>Thymleaf</span>
                            <span>MySQL</span>
                        </div>
                        <div class="project-links">
                        <a href="https://smartcontactmanager-7rtz.onrender.com" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="https://github.com/Sumit4113/NewProject" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="app">
                    <div class="project-img">
                      <img src={`${process.env.PUBLIC_URL}/images/BookStore.jpg`} alt="Project 2" />
                    </div>
                    <div class="project-info">
                        <h3>Online Book Store</h3>
                        <p>A feature-rich Online Book Store web app where users can explore, 
                            read, and manage books by genre with secure login and a responsive interface. and also check git repository</p>
                        <div class="project-tags">
                            <span>Spring-Boot</span>
                            <span>Cloudinary</span>
                            <span>Thymleaf</span>
                        </div>
                        <div class="project-links">
                            <a href="https://online-book-store-2j9i.onrender.com" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="https://github.com/Sumit4113" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="design">
                    <div class="project-img">
                       <img src={`${process.env.PUBLIC_URL}/images/sung.jpg`} alt="Project 3" />
                    </div>
                    <div class="project-info">
                        <h3>Rest APIs</h3>
                        <p>Rest Apis check in my git repo for more details </p>
                        <div class="project-tags">
                            <span>WebSockets</span>
                            <span>Java</span>
                              <span>Spring-Boot</span>
                        </div>
                        <div class="project-links">
                            <a href class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="https://github.com/Sumit4113" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}
