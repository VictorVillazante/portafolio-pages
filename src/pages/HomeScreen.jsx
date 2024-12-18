import "App.css";
import "images/imagen_personal.png";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkExperienceSection from "components/WorkExperienceSection";
import { getProyectos } from "services/ProyectosService";
import { getTechnologies,finOneTechnologyById } from "services/TechnologiesService";
import { useResponsiveElements,useModalManagement } from "hooks/HomeScreenHooks";
const HomeScreen=()=>{

    useEffect(() => {
      setTimeout(() => {
        let elem = document.getElementById("spinner");
        elem.style.display = "none";
      }, 2000);
    }, []);

    const {  verVideo,
      setVerVideo,
      verDetalle,
      setVerDetalle,
      detalleModal,
      setDetalleModal,
      urlVideo,
      verVideoDemostracion,
      hideLoader} = useModalManagement();
  
      const {  numeroElementos} = useResponsiveElements();
    useEffect(() => {
      setTimeout(() => {
        hideLoader(); 
      }, 2000);
    }, [hideLoader]);


    const proyectos = getProyectos();
    const technologies = getTechnologies();

    const renderCustomArrowPrev = (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          className="btn btn-info carousel-custom-arrow custom-arrow-prev"
          onClick={onClickHandler}
          aria-label={label}
        >
          Back
        </button>
      );

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

  
    const renderCustomArrowNext = (onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          className="btn btn-info carousel-custom-arrow custom-arrow-next"
          onClick={onClickHandler}
          aria-label={label}
          style={{ position: "relative", top: 20 }}
        >
          Next
        </button>
      );
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
        <section id="proyectos" className="container">
          <div id="proyectos-ref"> </div>
          <h2>Projects</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            autoPlay={true}
            centerSlidePercentage={numeroElementos}
            renderArrowPrev={renderCustomArrowPrev}
            renderArrowNext={renderCustomArrowNext}
          >
            {proyectos.map((elem, index) => {
              return (
                <div className="card" alt="Card 2">
                  <div className="card-img-top" alt="...">
                    <div
                      className="imagen"
                      style={{ backgroundImage: elem.img }}
                      alt="..."
                    ></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{elem.titulo}</h5>
                    <p className="card-text">{elem.descripcion}</p>
                    {elem.url_proyecto != "" && (
                      <button
                        onClick={() => {
                          window.open(elem.url_proyecto, "_blank");
                        }}
                        type="button"
                        className="btn btn-success"
                      >
                        Show project
                      </button>
                    )}

                    {elem.url_demostracion != "" && (
                      <button
                        type="button"
                        className="btn btn-info mt-1"
                        onClick={() =>
                          verVideoDemostracion(elem.url_demostracion)
                        }
                      >
                        Show video demostration
                      </button>
                    )}
                    {elem.detalles != "" && (
                      <button
                        type="button"
                        className="btn btn-primary mt-1"
                        onClick={() => {
                          setVerDetalle(true);
                          console.log(elem.detalles);
                          setDetalleModal(elem.detalles);
                        }}
                      >
                        Show detail tools, description
                      </button>
                    )}
                  </div>
                  <div className="card-footer">
                    <div className="row enlaces-proyectos">
                      {elem.url_github != "" && (
                        <i
                          style={{ width: "50px", height: "50px" }}
                          onClick={() => {
                            window.open(elem.url_github, "_blank");
                          }}
                        >
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </i>
                      )}
                      {elem.url_docker != "" && (
                        <i
                          style={{ width: "60px", height: "60px" }}
                          onClick={() => {
                            window.open(elem.url_docker, "_blank");
                          }}
                        >
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </Carousel>
        </section>
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
        <div style={{ zIndex: 2 }}>
          <Modal
            isOpen={verVideo}
            contentLabel="Video demostracion"
            onRequestClose={() => setVerVideo(false)}
            style={{
              content: {
                width: "80vw",
                height: "80vh",
                margin: "auto",
                background: "#f0eff4",
                left: "0px",
              },
            }}
          >
            <iframe
              width="100%"
              height="90%"
              src={urlVideo}
              title="Video"
              allowFullScreen
              id="video"
              onLoad={() => hideLoader}
            />
            <div className="loader-overlay">
              <div className="loader"></div>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => setVerVideo(false)}
            >
              Cerrar demostracion
            </button>
          </Modal>
        </div>
        <div style={{ zIndex: 2, overflow: "scroll", textAlign: "center" }}>
          <Modal
            isOpen={verDetalle}
            contentLabel="Video demostracion"
            onRequestClose={() => {
              setVerDetalle(false);
              setDetalleModal("");
            }}
            style={{
              content: {
                width: "40vw",
                minWidth: "300px",
                height: "auto",
                margin: "auto",
                background: "rgba(0, 126, 167, 0.87)",
                left: "0px",
              },
            }}
          >
            <h1
              style={{
                background: "transparent",
                textAlign: "center",
                color: "white",
              }}
            >
              {detalleModal.titulo}
            </h1>
            <h2 style={{ background: "transparent", textAlign: "center" }}>
              Technologies
            </h2>
            <div className="row">
              {detalleModal != "" &&
                detalleModal.tecnologias.map((elem, index) => {
                  const technology=finOneTechnologyById(elem+"-icon");
                  return (
                    <div id="tecnologias-proyecto-modal">
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
          </Modal>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
      </div>
    </>
  );
}
export default HomeScreen;