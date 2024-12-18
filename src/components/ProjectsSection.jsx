import { getProyectos } from "services/ProyectosService";
import { Carousel } from "react-responsive-carousel";
import { useModalManagement,useResponsiveElements } from "hooks/HomeScreenHooks";
import Modal from "react-modal";
import {finOneTechnologyById } from "services/TechnologiesService";
import { useRef } from "react";
const ProjectsSection=()=>{
    const loaderRef = useRef(null);
    const {  verVideo,
        setVerVideo,
        verDetalle,
        setVerDetalle,
        detalleModal,
        setDetalleModal,
        urlVideo,
        verVideoDemostracion,
        hideLoader} = useModalManagement();
    const {numeroElementos} = useResponsiveElements();

    const proyectos = getProyectos();

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
              onLoad={() => hideLoader(loaderRef)}
            />
            <div className="loader-overlay" ref={loaderRef}>
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

        </>
    );
}

export default ProjectsSection;