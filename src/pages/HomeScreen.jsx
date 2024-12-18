import "App.css";
import "images/imagen_personal.png";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkExperienceSection from "components/WorkExperienceSection";
import { getTechnologies } from "services/TechnologiesService";
import ProjectsSection from "components/ProjectsSection";
const HomeScreen=()=>{

    useEffect(() => {
      setTimeout(() => {
        let elem = document.getElementById("spinner");
        elem.style.display = "none";
      }, 2000);
    }, []);

    const technologies = getTechnologies();

    const handleWhatssapp = () => {
      const phoneNumber = "76238279";
  
      const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola%20%20vi%20tu%20portafolio%20me%20gustaria%20contactarme%20contigo`;
  
      window.open(whatsappLink, "_blank");
    };
    const handleLinkedin = () => {
      window.open(
        "https://www.linkedin.com/in/v%C3%ADctor-villazante/",
        "_blank"
      );
    };
    const handleGithub = () => {
      window.open("https://github.com/VictorVillazante", "_blank");
    };
    const handleGmail = () => {
      window.open("https://www.google.com/intl/es/gmail/about/", "_blank");
    };

  
   
    return (
    <>
      <div className="spinner" id="spinner">
        <img src="carga.gif" alt="GIF infinito" />
      </div>
      <div className="App">
    

        <div id="contenido-inicial" className="jumbotron text-center">
          <video autoPlay loop muted>
            <source src="" type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
         
          <div className="container" id="elementos-contenido-inicial">
            <div id="navegador">
              <div className="nav">
                <ul>
                  <li>
                    <ScrollLink
                      to="elementos-contenido-inicial"
                      smooth={true}
                      duration={500}
                    >
                      <a href="#">Home</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="acerca-de-ref" smooth={true} duration={500}>
                      <a href="#">About</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="proyectos-ref" smooth={true} duration={500}>
                      <a href="#">Projects</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="tecnologias-ref"
                      smooth={true}
                      duration={500}
                    >
                      <a href="#">Technologies</a>
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="row"
              id="contenido-presentacion"
              style={{ width: "100%" }}
            >
              <div id="parte_imagen">
                <div id="img_perfil"></div>
                <div id="redes_sociales">
                  <div className="social-buttons">
                    <a
                      href="#"
                      className="social-button whatsapp"
                      onClick={handleWhatssapp}
                    >
                      <FaWhatsapp size={32} color="white" />
                    </a>
                    <a
                      href="#"
                      className="social-button linkedin"
                      onClick={handleLinkedin}
                    >
                      <FaLinkedin size={32} color="white" />
                    </a>
                    <ScrollLink
                      to="scrollToRef"
                      smooth={true}
                      duration={500}
                      className="social-button gmail"
                    >
                      <FaMailBulk size={32} color="white" />
                    </ScrollLink>
                    <a
                      href="#"
                      className="social-button github"
                      onClick={handleGithub}
                    >
                      <FaGithub size={32} color="white" />
                    </a>
                  </div>
                </div>
              </div>
              <div id="parte_texto">
                <h1>Welcome!</h1>
                <p>
                  Hello! My name is Victor Villazante and <br />
                  I am a passionate software developer. <br />
                  I like backend, frontend, mobile, cloud <br />
                  computing development and data analysis
                </p>
                <ScrollLink to="proyectos-ref" smooth={true} duration={500}>
                  <button className="btn">Show my proyects</button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
        <div id="acerca-de-ref"></div>
        <section id="acerca-de" className="container">
          <h2>About me</h2>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="paper" id="img-acerca-de-1">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  "Hello! I'm passionate about the world of software development
                  and data science. With a deep curiosity for technology and a
                  love for data-driven insights, I'm dedicated to mastering the
                  art of creating innovative software solutions and uncovering
                  meaningful patterns within data. Let's build a better future
                  through code and data together!"
                </p>
              </div>
            </div>
            <div className="paper" id="img-acerca-de-2">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  In addition, my family holds a special place in my heart. This
                  close-knit circle includes not only my loved ones but also my
                  feline companion. My family provides me with unwavering
                  support and a source of inspiration, grounding me in the midst
                  of challenging projects and demanding work.
                </p>
              </div>
            </div>
          </div>
        </section>
        <WorkExperienceSection />
        <ProjectsSection />


        <section id="tecnologias" className="container">
          <h2>Technologies</h2>
          <div id="tecnologias-ref"></div>
          <div className="container" id="tecnologias-contenedor">
            <div className="row">
              {technologies.map((technology, index) => {
                return (
                  <div>
                    <div className="element-icon">
                        <div
                          id="img"
                          style={{
                            backgroundImage:
                              "url('" + technology.url + "')",
                          }}
                        ></div>
                      <span
                      >
                        {technology.name.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="container">
          <h2>Contacto</h2>
          <form>
            <div id="scrollToRef" className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="5"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </section>

        <footer className="bg-light text-center">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </footer>
      
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
      </div>
    </>
  );
}
export default HomeScreen;