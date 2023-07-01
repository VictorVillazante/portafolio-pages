import logo from "./logo.svg";
import "./App.css";
import "./images/imagen_personal.png";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const App = () => {
  const [verVideo, setVerVideo] = useState(false);
  // useEffect(() => {
  //   var pathEls = document.querySelectorAll("path");
  //   for (var i = 0; i < pathEls.length; i++) {
  //     var pathEl = pathEls[i];
  //     var offset = anime.setDashoffset(pathEl);
  //     pathEl.setAttribute("stroke-dashoffset", offset);
  //     anime({
  //       targets: pathEl,
  //       strokeDashoffset: [offset, 0],
  //       duration: anime.random(1000, 3000),
  //       delay: anime.random(0, 0),
  //       loop: true,
  //       direction: "alternate",
  //       easing: "easeInOutSine",
  //       autoplay: true,
  //     });
  //   }

  //   var letterEls = document.querySelectorAll(".letter");
  //   for (var i = 0; i < letterEls.length; i++) {
  //     var letterEl = letterEls[i];
  //     var offset = anime.setDashoffset(letterEl);
  //     letterEl.setAttribute("stroke-dashoffset", offset);
  //     anime({
  //       targets: letterEl,
  //       duration: anime.random(0, 1000),
  //       delay: anime.random(0, 300),
  //       opacity: [{ value: 0, duration: anime.random(0, 300) }],
  //       loop: true,
  //     });
  //   }
  // });
  let items = [
    "html",
    "css",
    "javascript",
    "angular",
    "vue",
    "react",
    "android",
    "flutter",
    "react",
    "spring",
    "node",
    "codeigniter",
    "mysql",
    "postgresql",
    "sqlserver",
    "mongodb",
    "firebase",
    "sqlite",
    "aws",
    "netlify",
    "docker",
  ];
  const renderCustomArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        className="btn btn-info carousel-custom-arrow custom-arrow-prev"
        onClick={onClickHandler}
        aria-label={label}
      >
        Anterior
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
        Siguiente
      </button>
    );
  return (
    <>
      <div className="App">
        {/* <nav class="navbar navbar-expand-md navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Mi Portafolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#acerca-de">
                  Acerca de
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div id="contenido-inicial" class="jumbotron text-center">
          <video autoPlay loop muted>
            <source src="/fondo3.mp4" type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/* <div className="wrapper">
            <div className="neon">
              <svg
                version="1.1"
                id="BG"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 954 242"
                style={{ enableBackground: "new 0 0 934 242" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      className="st0 letter"
                      id="N"
                      d="M156.3,35.8h59.3v13.5h-21.9v158.1H178L79.9,75L69.3,56.5h-1l2.4,18.8V191h21.9v13.5H33.4V191h21.9V49.3H33.4
      V35.8h48.2l84.3,113.5l12.5,20.7h1.2l-1.4-20.7v-100h-21.9V35.8z"
                    />
                    <path
                      className="st0 letter"
                      id="N"
                      d="M156.3,35.8h59.3v13.5h-21.9v158.1H178L79.9,75L69.3,56.5h-1l2.4,18.8V191h21.9v13.5H33.4V191h21.9V49.3H33.4
      V35.8h48.2l84.3,113.5l12.5,20.7h1.2l-1.4-20.7v-100h-21.9V35.8z"
                    />
                    <path
                      className="st0 letter"
                      id="E"
                      d="M407.4,35.8v39.5H392V54.6l-4.8-5.3h-59v62.4h40.7l3.6-3.6V97.9h15.4v41.2h-15.4V129l-3.6-3.9h-40.7V191h63.1
      l4.8-4.8v-23.6h15.4v41.9H279.2V191h21.9V49.3h-21.9V35.8H407.4z"
                    />
                    <path
                      className="st0 letter"
                      id="O"
                      d="M488.9,120.1c0-12.5,1.9-24.1,5.8-34.8c3.9-10.7,9.4-19.9,16.7-27.7c7.3-7.8,16.3-13.9,27-18.2
      c10.7-4.3,22.9-6.5,36.5-6.5c13.7,0,25.9,2.2,36.6,6.5c10.8,4.3,19.8,10.4,27.2,18.2c7.4,7.8,13,17,16.9,27.7
      c3.9,10.7,5.8,22.3,5.8,34.8c0,12.5-1.9,24.1-5.8,34.8c-3.9,10.7-9.5,19.9-16.9,27.7c-7.4,7.8-16.5,13.9-27.2,18.2
      c-10.8,4.3-23,6.5-36.6,6.5c-13.7,0-25.8-2.2-36.5-6.5c-10.7-4.3-19.7-10.4-27-18.2c-7.3-7.8-12.9-17-16.7-27.7
      C490.8,144.3,488.9,132.6,488.9,120.1z M519,120.1c0,10.3,1.2,19.9,3.5,28.9c2.3,9,5.9,16.8,10.7,23.4
      c4.8,6.6,10.9,11.8,18.2,15.7c7.3,3.9,15.9,5.8,25.9,5.8c9.2,0,17.1-1.9,23.9-5.8c6.7-3.9,12.3-9.1,16.8-15.7
      c4.4-6.6,7.7-14.4,10-23.4c2.2-9,3.4-18.6,3.4-28.9c0-10.3-1.2-19.9-3.5-28.9c-2.3-9-5.9-16.8-10.7-23.4
      c-4.8-6.6-10.9-11.8-18.2-15.7c-7.3-3.9-16-5.8-26.1-5.8c-9.6,0-17.9,1.9-24.7,5.8c-6.8,3.9-12.4,9.1-16.7,15.7
      c-4.3,6.6-7.5,14.4-9.4,23.4C520,100.2,519,109.8,519,120.1z"
                    />
                    <path
                      className="st0 letter"
                      id="N2"
                      d="M854,35.8h59.3v13.5h-21.9v158.1h-15.7L777.6,75L767,56.5h-1l2.4,18.8V191h21.9v13.5h-59.3V191H753V49.3
      h-21.9V35.8h48.2l84.3,113.5l12.5,20.7h1.2l-1.4-20.7v-100H854V35.8z"
                    />
                  </g>
                  <g>
                    <path
                      className="st1"
                      d="M156.3,35.8h59.3v13.5h-21.9v158.1H178L79.9,75L69.3,56.5h-1l2.4,18.8V191h21.9v13.5H33.4V191h21.9V49.3H33.4
      V35.8h48.2l84.3,113.5l12.5,20.7h1.2l-1.4-20.7v-100h-21.9V35.8z"
                    />
                    <path
                      className="st1"
                      d="M407.4,35.8v39.5H392V54.6l-4.8-5.3h-59v62.4h40.7l3.6-3.6V97.9h15.4v41.2h-15.4V129l-3.6-3.9h-40.7V191h63.1
      l4.8-4.8v-23.6h15.4v41.9H279.2V191h21.9V49.3h-21.9V35.8H407.4z"
                    />
                    <path
                      className="st1"
                      d="M488.9,120.1c0-12.5,1.9-24.1,5.8-34.8c3.9-10.7,9.4-19.9,16.7-27.7c7.3-7.8,16.3-13.9,27-18.2
      c10.7-4.3,22.9-6.5,36.5-6.5c13.7,0,25.9,2.2,36.6,6.5c10.8,4.3,19.8,10.4,27.2,18.2c7.4,7.8,13,17,16.9,27.7
      c3.9,10.7,5.8,22.3,5.8,34.8c0,12.5-1.9,24.1-5.8,34.8c-3.9,10.7-9.5,19.9-16.9,27.7c-7.4,7.8-16.5,13.9-27.2,18.2
      c-10.8,4.3-23,6.5-36.6,6.5c-13.7,0-25.8-2.2-36.5-6.5c-10.7-4.3-19.7-10.4-27-18.2c-7.3-7.8-12.9-17-16.7-27.7
      C490.8,144.3,488.9,132.6,488.9,120.1z M519,120.1c0,10.3,1.2,19.9,3.5,28.9c2.3,9,5.9,16.8,10.7,23.4
      c4.8,6.6,10.9,11.8,18.2,15.7c7.3,3.9,15.9,5.8,25.9,5.8c9.2,0,17.1-1.9,23.9-5.8c6.7-3.9,12.3-9.1,16.8-15.7
      c4.4-6.6,7.7-14.4,10-23.4c2.2-9,3.4-18.6,3.4-28.9c0-10.3-1.2-19.9-3.5-28.9c-2.3-9-5.9-16.8-10.7-23.4
      c-4.8-6.6-10.9-11.8-18.2-15.7c-7.3-3.9-16-5.8-26.1-5.8c-9.6,0-17.9,1.9-24.7,5.8c-6.8,3.9-12.4,9.1-16.7,15.7
      c-4.3,6.6-7.5,14.4-9.4,23.4C520,100.2,519,109.8,519,120.1z"
                    />
                    <path
                      className="st1"
                      d="M854,35.8h59.3v13.5h-21.9v158.1h-15.7L777.6,75L767,56.5h-1l2.4,18.8V191h21.9v13.5h-59.3V191H753V49.3
      h-21.9V35.8h48.2l84.3,113.5l12.5,20.7h1.2l-1.4-20.7v-100H854V35.8z"
                    />
                  </g>
                  <g>
                    <polygon
                      className="st2"
                      points="173.9,215.4 78.7,86.9 78.7,183 100.7,183 100.7,212.5 25.4,212.5 25.4,183 47.3,183 47.3,57.3 
      25.4,57.3 25.4,27.8 85.6,27.8 170.2,141.6 170.2,57.3 148.3,57.3 148.3,27.8 223.6,27.8 223.6,57.3 201.6,57.3 201.6,215.4 		"
                    />
                    <polygon
                      className="st2"
                      points="271.2,212.5 271.2,183 293.1,183 293.1,57.3 271.2,57.3 271.2,27.8 415.4,27.8 415.4,83.3 384,83.3 
      384,57.7 383.6,57.3 336.1,57.3 336.1,103.7 364.5,103.7 364.5,89.9 395.9,89.9 395.9,147.2 364.5,147.2 364.5,133.2 336.1,133.2 
      336.1,183 387.9,183 388.1,182.8 388.1,154.5 419.5,154.5 419.5,212.5 		"
                    />
                    <path
                      className="st2"
                      d="M574.9,215.4c-14.6,0-27.9-2.4-39.5-7.1c-11.7-4.8-21.7-11.5-29.8-20.1c-8-8.5-14.2-18.8-18.4-30.5
      c-4.2-11.5-6.3-24.1-6.3-37.5c0-13.4,2.1-26,6.3-37.5c4.2-11.7,10.4-21.9,18.4-30.5c8.1-8.6,18.1-15.4,29.8-20.1
      c11.6-4.7,24.9-7.1,39.5-7.1c14.6,0,28,2.4,39.6,7.1c11.8,4.8,21.9,11.5,30,20.1c8.1,8.6,14.4,18.8,18.6,30.5
      c4.2,11.5,6.3,24.1,6.3,37.5c0,13.4-2.1,26-6.3,37.5c-4.2,11.7-10.5,21.9-18.6,30.5c-8.1,8.6-18.3,15.4-30,20.1
      C602.9,213,589.5,215.4,574.9,215.4z M572.7,54.4c-8.2,0-15.2,1.6-20.8,4.8c-5.8,3.2-10.3,7.5-14,13.1c-3.8,5.7-6.5,12.7-8.3,20.7
      c-1.8,8.4-2.7,17.6-2.7,27.2c0,9.6,1.1,18.6,3.2,26.9c2.1,8,5.2,14.9,9.4,20.7c4.1,5.6,9.2,10,15.5,13.3
      c6.1,3.2,13.6,4.9,22.2,4.9c7.7,0,14.4-1.6,19.9-4.7c5.7-3.3,10.3-7.6,14.1-13.2c3.9-5.8,6.9-12.8,8.9-20.9
      c2.1-8.3,3.1-17.4,3.1-27c0-9.5-1.1-18.6-3.2-26.9c-2.1-8-5.2-14.9-9.4-20.7c-4.1-5.6-9.3-10-15.5-13.3
      C589,56,581.5,54.4,572.7,54.4z"
                    />
                    <polygon
                      className="st2"
                      points="871.6,215.4 776.4,86.9 776.4,183 798.3,183 798.3,212.5 723.1,212.5 723.1,183 745,183 745,57.3 
      723.1,57.3 723.1,27.8 783.3,27.8 867.9,141.6 867.9,57.3 846,57.3 846,27.8 921.3,27.8 921.3,57.3 899.3,57.3 899.3,215.4 		"
                    />
                  </g>
                  <g>
                    <polygon
                      className="st3"
                      points="170.9,221.4 84.7,105.1 84.7,177 106.7,177 106.7,218.5 19.4,218.5 19.4,177 41.3,177 41.3,63.3 
      19.4,63.3 19.4,21.8 88.6,21.8 164.2,123.5 164.2,63.3 142.3,63.3 142.3,21.8 229.6,21.8 229.6,63.3 207.6,63.3 207.6,221.4 		"
                    />
                    <path
                      className="st3"
                      d="M265.2,218.5V177h21.9V63.3h-21.9V21.8h156.2v67.5h-19.5v59.2h23.6v69.9H265.2z M382.1,177v-23.8h-23.6v-14
      h-16.3V177H382.1z M358.5,97.7V83.9H378V63.3h-35.9v34.4H358.5z"
                    />
                    <path
                      className="st3"
                      d="M574.9,221.4c-15.4,0-29.5-2.5-41.8-7.5c-12.5-5.1-23.3-12.3-31.9-21.6c-8.6-9.1-15.2-20.1-19.7-32.5
      c-4.4-12.2-6.6-25.5-6.6-39.6c0-14.1,2.2-27.4,6.6-39.6c4.5-12.4,11.1-23.4,19.7-32.5c8.7-9.2,19.4-16.5,31.9-21.6
      c12.3-5,26.4-7.5,41.8-7.5c15.4,0,29.5,2.5,41.9,7.5c12.6,5.1,23.4,12.3,32.2,21.5c8.7,9.2,15.4,20.1,19.9,32.6
      c4.4,12.2,6.6,25.5,6.6,39.6c0,14.1-2.2,27.4-6.6,39.6c-4.5,12.5-11.2,23.4-19.9,32.6c-8.7,9.2-19.6,16.5-32.2,21.5
      C604.4,218.8,590.3,221.4,574.9,221.4z M572.7,60.4c-7.2,0-13.1,1.3-17.8,4c-4.9,2.8-8.8,6.4-11.9,11.2
      c-3.4,5.1-5.8,11.4-7.4,18.6c-1.7,8-2.6,16.7-2.6,26c0,9.1,1,17.6,3,25.4c1.9,7.2,4.7,13.5,8.5,18.6c3.6,4.9,8,8.7,13.4,11.5
      c5.2,2.8,11.8,4.2,19.4,4.2c6.7,0,12.3-1.3,16.9-3.9c4.9-2.8,8.8-6.5,12.1-11.3c3.5-5.2,6.2-11.6,8-19c2-7.8,3-16.4,3-25.5
      c0-9-1-17.6-3-25.4c-1.9-7.2-4.7-13.5-8.5-18.6c-3.6-4.9-8-8.7-13.4-11.5C587.1,61.8,580.5,60.4,572.7,60.4z"
                    />
                    <polygon
                      className="st3"
                      points="868.6,221.4 782.4,105.1 782.4,177 804.3,177 804.3,218.5 717.1,218.5 717.1,177 739,177 739,63.3 
      717.1,63.3 717.1,21.8 786.3,21.8 861.9,123.5 861.9,63.3 840,63.3 840,21.8 927.3,21.8 927.3,63.3 905.3,63.3 905.3,221.4 		"
                    />
                  </g>
                  <g>
                    <path
                      className="st4"
                      d="M166.4,230.4l-72.7-98V168h21.9v59.5H10.4V168h21.9V72.3H10.4V12.8h82.8l40.1,54v-54h105.3v59.5h-21.9v158.1
      H166.4z M155.2,96.3v-24h-17.9L155.2,96.3z"
                    />
                    <path
                      className="st4"
                      d="M256.2,227.5V168h21.9V72.3h-21.9V12.8h174.2v85.5h-19.5v41.2h23.6v87.9H256.2z M373.1,168v-5.8h-22v5.8
      H373.1z M369,74.9v-2.7h-17.9v2.7H369z"
                    />
                    <path
                      className="st4"
                      d="M574.9,230.4c-16.6,0-31.8-2.8-45.2-8.2c-13.7-5.6-25.6-13.6-35.1-23.8c-9.4-10-16.7-22-21.6-35.6
      c-4.7-13.1-7.1-27.5-7.1-42.6c0-15.1,2.4-29.5,7.1-42.6c4.9-13.6,12.2-25.6,21.6-35.6c9.6-10.2,21.4-18.2,35.1-23.8
      c13.4-5.4,28.6-8.2,45.2-8.2c16.5,0,31.8,2.8,45.2,8.2c13.8,5.6,25.7,13.5,35.3,23.7c9.6,10.1,16.9,22.1,21.8,35.7
      c4.7,13.1,7.2,27.5,7.2,42.6c0,15.1-2.4,29.5-7.2,42.6c-4.9,13.6-12.3,25.7-21.8,35.7c-9.6,10.2-21.5,18.1-35.3,23.7
      C606.7,227.6,591.5,230.4,574.9,230.4z M572.7,69.4c-5.6,0-10.1,0.9-13.4,2.8c-3.6,2.1-6.5,4.8-8.9,8.3c-2.7,4.2-4.8,9.4-6.1,15.5
      c-1.6,7.4-2.4,15.5-2.4,24.1c0,8.3,0.9,16.1,2.8,23.2c1.6,6.1,3.9,11.4,7,15.6c2.8,3.8,6.1,6.7,10.4,8.9c3.9,2.1,9,3.1,15.2,3.1
      c5.1,0,9.2-0.9,12.4-2.8c3.7-2.1,6.6-4.9,9.1-8.5c2.9-4.3,5.2-9.8,6.8-16.1c1.8-7.1,2.7-15,2.7-23.3c0-8.3-0.9-16.1-2.8-23.2
      c-1.6-6.1-3.9-11.4-7-15.6c-2.8-3.8-6.1-6.7-10.4-8.9C584.2,70.4,579,69.4,572.7,69.4z"
                    />
                    <path
                      className="st4"
                      d="M864.1,230.4l-72.7-98V168h21.9v59.5H708.1V168H730V72.3h-21.9V12.8h82.8l40.1,54v-54h105.3v59.5h-21.9v158.1
      H864.1z M852.9,96.3v-24H835L852.9,96.3z"
                    />
                  </g>
                  <g>
                    <path
                      className="st5"
                      d="M166.4,230.4l-72.7-98V168h21.9v59.5H10.4V168h21.9V72.3H10.4V12.8h82.8l40.1,54v-54h105.3v59.5h-21.9v158.1
      H166.4z M155.2,96.3v-24h-17.9L155.2,96.3z"
                    />
                    <path
                      className="st5"
                      d="M256.2,227.5V168h21.9V72.3h-21.9V12.8h174.2v85.5h-19.5v41.2h23.6v87.9H256.2z M373.1,168v-5.8h-22v5.8
      H373.1z M369,74.9v-2.7h-17.9v2.7H369z"
                    />
                    <path
                      className="st5"
                      d="M574.9,230.4c-16.6,0-31.8-2.8-45.2-8.2c-13.7-5.6-25.6-13.6-35.1-23.8c-9.4-10-16.7-22-21.6-35.6
      c-4.7-13.1-7.1-27.5-7.1-42.6c0-15.1,2.4-29.5,7.1-42.6c4.9-13.6,12.2-25.6,21.6-35.6c9.6-10.2,21.4-18.2,35.1-23.8
      c13.4-5.4,28.6-8.2,45.2-8.2c16.5,0,31.8,2.8,45.2,8.2c13.8,5.6,25.7,13.5,35.3,23.7c9.6,10.1,16.9,22.1,21.8,35.7
      c4.7,13.1,7.2,27.5,7.2,42.6c0,15.1-2.4,29.5-7.2,42.6c-4.9,13.6-12.3,25.7-21.8,35.7c-9.6,10.2-21.5,18.1-35.3,23.7
      C606.7,227.6,591.5,230.4,574.9,230.4z M572.7,69.4c-5.6,0-10.1,0.9-13.4,2.8c-3.6,2.1-6.5,4.8-8.9,8.3c-2.7,4.2-4.8,9.4-6.1,15.5
      c-1.6,7.4-2.4,15.5-2.4,24.1c0,8.3,0.9,16.1,2.8,23.2c1.6,6.1,3.9,11.4,7,15.6c2.8,3.8,6.1,6.7,10.4,8.9c3.9,2.1,9,3.1,15.2,3.1
      c5.1,0,9.2-0.9,12.4-2.8c3.7-2.1,6.6-4.9,9.1-8.5c2.9-4.3,5.2-9.8,6.8-16.1c1.8-7.1,2.7-15,2.7-23.3c0-8.3-0.9-16.1-2.8-23.2
      c-1.6-6.1-3.9-11.4-7-15.6c-2.8-3.8-6.1-6.7-10.4-8.9C584.2,70.4,579,69.4,572.7,69.4z"
                    />
                    <path
                      className="st5"
                      d="M864.1,230.4l-72.7-98V168h21.9v59.5H708.1V168H730V72.3h-21.9V12.8h82.8l40.1,54v-54h105.3v59.5h-21.9v158.1
      H864.1z M852.9,96.3v-24H835L852.9,96.3z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div> */}

          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <div class="container" id="elementos-contenido-inicial">
            <div id="navegador">
              <div class="nav">
                <ul>
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Acerca de</a>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="parte_texto">
              <h1>Welcome!</h1>
            </div>
            <div id="parte_imagen">
              <div id="img_perfil"></div>
            </div>
          </div>
        </div>

        <section id="acerca-de" class="container">
          <div id="acerca-de-gift">
            <img src="imagen-city.gif" alt="GIF repetido infinitamente" />
          </div>
          <div id="acerca-de-texto">
            <h2>Acerca de mí</h2>
            <p class="acerca">
              ¡Hola! Mi nombre es Victor Villazante, y soy un apasionado
              desarrollador de software. Desde muy joven, descubrí mi
              fascinación por la creación de soluciones tecnológicas innovadoras
              que puedan impactar de manera positiva en la vida de las personas.
            </p>

            <p class="acerca">
              Mi objetivo siempre ha sido superar los desafíos técnicos y
              entregar productos de calidad que cumplan con las expectativas de
              los clientes.
            </p>

            <p class="acerca">
              Mi experiencia abarca un amplio de tecnologias de desarrollo de
              software y estoy constantemente actualizándome y aprendiendo para
              mantenerme al tanto de las últimas tendencias en el mundo del
              desarrollo de software.
            </p>

            <p class="acerca">
              Lo que más me entusiasma de mi trabajo es la capacidad de
              transformar ideas abstractas en productos tangibles que mejoren la
              vida cotidiana de las personas. Me encanta colaborar en equipo,
              enfrentar desafíos complejos y encontrar soluciones creativas para
              los problemas que se presentan.
            </p>

            <p class="acerca">
              Además de mi experiencia técnica, me considero una persona con
              excelentes habilidades de comunicación y capacidad para trabajar
              en entornos dinámicos y colaborativos.
            </p>

            <p class="acerca">
              Este portafolio es una muestra de algunos de los proyectos en los
              que he trabajado y las habilidades que he desarrollado a lo largo
              de mi carrera. Si estás buscando un desarrollador de software
              apasionado, comprometido y proactivo, no dudes en ponerte en
              contacto conmigo. Estaré encantado de formar parte de tu equipo y
              ayudarte a alcanzar tus metas tecnológicas.
            </p>
          </div>
        </section>
        <section id="tecnologias" class="container">
          <h2 style={{ color: "#0E0004" }}>Tecnologias</h2>
          <div className="container">
            <div className="row">
              {items.map((elem, index) => {
                let nc = 4;
                let id = elem + "-icon";
                let ncol = "col-sm-" + 12 / nc;
                return (
                  <div className={ncol + " technology"}>
                    <div className="grid-item">
                      <div className="icon-tecnologies" id={id}></div>
                      <span
                        style={{ zIndex: 1, position: "relative", top: "-50" }}
                      >
                        {elem.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="proyectos" class="container">
          <h2>Proyectos</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={33.333333}
            renderArrowPrev={renderCustomArrowPrev}
            renderArrowNext={renderCustomArrowNext}
          >
            <div>
              <img src="" alt="Card 1" />
              <div className="legend">
                <h5>Tarjeta 1</h5>
                <p>Contenido de la tarjeta 1</p>
              </div>
            </div>
            <div>
              <img src="" alt="Card 1" />
              <div className="legend">
                <h5>Tarjeta 1</h5>
                <p>Contenido de la tarjeta 1</p>
              </div>
            </div>
            <div class="card" alt="Card 2">
              <div class="card-img-top" alt="...">
                <div class="imagen" alt="..."></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Proyecto 1</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" class="btn btn-success">
                  Ver proyecto
                </button>

                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => setVerVideo(true)}
                >
                  Ver demostracion
                </button>
              </div>
              <div class="card-footer">
                <div class="row enlaces-proyectos">
                  <i class="devicon-github-original-wordmark colored"></i>
                  <i class="devicon-docker-plain-wordmark colored"></i>
                </div>
              </div>
            </div>
          </Carousel>
        </section>

        <section id="contacto" class="container">
          <h2>Contacto</h2>
          <form>
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div class="form-group">
              <label for="email">Correo electrónico:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea
                class="form-control"
                id="mensaje"
                rows="5"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </form>
        </section>

        <footer class="bg-light text-center">
          <p>&copy; 2023 Mi Portafolio. Todos los derechos reservados.</p>
        </footer>
        <div style={{ zIndex: 2 }}>
          <Modal
            isOpen={verVideo}
            contentLabel="Video demostracion"
            onRequestClose={() => setVerVideo(false)}
            style={{
              content: {
                width: "1000px",
                height: "700px",
                margin: "auto",
                background: "#48ACF0",
              },
            }}
          >
            <iframe
              width="100%"
              height="90%"
              src="https://www.youtube.com/embed/bTVhlONQvEs"
              title="Video"
              allowFullScreen
            />
            <button
              className="btn btn-danger"
              onClick={() => setVerVideo(false)}
            >
              Cerrar demostracion
            </button>
          </Modal>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
      </div>
    </>
  );
};

export default App;
