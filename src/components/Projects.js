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
                        <img src="/903819.png?height=300&width=500" alt="Project 1"/>
                    </div>
                    <div class="project-info">
                        <h3>E-commerce Website</h3>
                        <p>A fully responsive e-commerce platform built with React and Node.js</p>
                        <div class="project-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                        <div class="project-links">
                        <button href="#" class="project-link"><i class="fas fa-external-link-alt"></i></button>
                            <button href="#" class="project-link"><i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="app">
                    <div class="project-img">
                        <img src="/796849.jpg?height=300&width=500" alt="Project 2"/>
                    </div>
                    <div class="project-info">
                        <h3>Task Manager App</h3>
                        <p>A productivity app to manage daily tasks and schedules</p>
                        <div class="project-tags">
                            <span>React Native</span>
                            <span>Firebase</span>
                        </div>
                        <div class="project-links">
                            <button href="#" class="project-link"><i class="fas fa-external-link-alt"></i></button>
                            <button href="#" class="project-link"><i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="design">
                    <div class="project-img">
                        <img src="/sung.jpg?height=300&width=500" alt="Project 3"/>
                    </div>
                    <div class="project-info">
                        <h3>Brand Identity Design</h3>
                        <p>Complete brand identity design for a tech startup</p>
                        <div class="project-tags">
                            <span>Figma</span>
                            <span>Photoshop</span>
                        </div>
                        <div class="project-links">
                            <button href="#" class="project-link"><i class="fas fa-external-link-alt"></i></button>
                            <button href="#" class="project-link"><i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}
