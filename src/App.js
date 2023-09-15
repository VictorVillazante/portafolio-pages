import logo from "./logo.svg";
import "./App.css";
import "./images/imagen_personal.png";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import React, { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  setInterval(miFuncion, 10000);

  let contador = 0;
  function miFuncion() {
    //console.log("Esta función se ejecuta cada 40 segundos."+((contador++)%4));
    const elemento1 = document.getElementById("img-acerca-de-1");
    const elemento2 = document.getElementById("img-acerca-de-2");
    const elemento3 = document.getElementById("img-acerca-de-3");
    const elemento4 = document.getElementById("img-acerca-de-4");
    elemento1.style.borderRadius = "10px";
    elemento2.style.borderRadius = "10px";
    elemento3.style.borderRadius = "10px";
    elemento4.style.borderRadius = "10px";
    elemento1.style.boxShadow = "none";
    elemento2.style.boxShadow = "none";
    elemento3.style.boxShadow = "none";
    elemento4.style.boxShadow = "none";

    contador = contador + 1;
    if (contador % 4 == 0) {
      const elemento = document.getElementById("img-acerca-de-1");
      console.log("Actualizando img-acerca-de-1");
      elemento.style.borderRadius = "100px";
      elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
    }
    if (contador % 4 == 1) {
      const elemento = document.getElementById("img-acerca-de-2");
      console.log("Actualizando img-acerca-de-2");
      elemento.style.borderRadius = "100px";
      elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
    }
    if (contador % 4 == 2) {
      const elemento = document.getElementById("img-acerca-de-3");
      console.log("Actualizando img-acerca-de-3");
      elemento.style.borderRadius = "100px";
      elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
    }
    if (contador % 4 == 3) {
      const elemento = document.getElementById("img-acerca-de-4");
      console.log("Actualizando img-acerca-de-4");
      elemento.style.borderRadius = "100px";
      elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
    }
  }
  // Manejar ancho pantalla
  const [numeroElementos, setNumeroElementos] = useState(window.innerWidth);

  // Función para manejar el evento de cambio de tamaño
  const manejarCambioDeTamaño = () => {
    console.log("Cambio tamaño " + window.innerWidth);
    setNumeroElementos(100 / 3);
    if (window.innerWidth < 1000) {
      setNumeroElementos(100 / 2);
    }
    if (window.innerWidth < 500) {
      setNumeroElementos(100);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let elem = document.getElementById("spinner");
      elem.style.display = "none";
    }, 5000);
    // Agregar un event listener para el evento resize
    window.addEventListener("resize", manejarCambioDeTamaño);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", manejarCambioDeTamaño);
    };
  }, []);
  // Manejar ancho pantalla

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
  const handleWhatssapp = () => {
    const phoneNumber = "74260360";

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
  const hideLoader = () => {
    const loaderOverlay = document.querySelector(".loader-overlay");
    loaderOverlay.style.display = "none";
  };

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
      <div className="spinner" id="spinner">
        <img src="carga.gif" alt="GIF infinito" />
      </div>
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

        <div id="contenido-inicial" className="jumbotron text-center">
          <video autoPlay loop muted>
            <source src="" type="video/mp4" />
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
                      <a href="#">Inicio</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="acerca-de-ref" smooth={true} duration={500}>
                      <a href="#">Acerca</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="proyectos-ref" smooth={true} duration={500}>
                      <a href="#">Proyectos</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="tecnologias-ref"
                      smooth={true}
                      duration={500}
                    >
                      <a href="#">Tecnologias</a>
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
                <button className="btn">Show my proyects</button>
              </div>
            </div>
          </div>
        </div>
        <div id="acerca-de-ref"></div>
        <section id="acerca-de" className="container">
          <h2>Acerca de mí</h2>
          {/* <div id="acerca-de-gift">
            <img src="imagen-city.gif" alt="GIF repetido infinitamente" />
          </div> */}
          {/* <div class="notebook">
            <div class="page">1</div>
            <div class="page">2</div>
          </div> */}
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="paper" id="img-acerca-de-1">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  "Hello! I'm passionate about the world of software development
                  and data science. I find immense joy in crafting code that
                  solves real-world problems and exploring the endless
                  possibilities of data. With a deep curiosity for technology
                  and a love for data-driven insights, I'm dedicated to
                  mastering the art of creating innovative software solutions
                  and uncovering meaningful patterns within data. Let's build a
                  better future through code and data together!"
                </p>
              </div>
            </div>
            <div className="paper" id="img-acerca-de-2">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  In addition to my passion for software development and data
                  science, my family holds a special place in my heart. This
                  close-knit circle includes not only my loved ones but also my
                  feline companion. My family provides me with unwavering
                  support and a source of inspiration, grounding me in the midst
                  of challenging projects and demanding work. My cat, with its
                  playful antics and soothing presence, reminds me to find joy
                  in life's simple moments. They are my pillars of strength, and
                  I cherish every moment I spend with them, both in my personal
                  life and throughout my professional journey
                </p>
              </div>
            </div>
            <div className="paper" id="img-acerca-de-3">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  Sports play a significant role in my life, and two of my
                  favorite activities are running and soccer. Beyond being a
                  source of physical fitness, sports are a way for me to
                  challenge myself, stay disciplined, and maintain a healthy
                  balance in life. Running allows me to push my limits, find
                  mental clarity, and experience the joy of achieving personal
                  goals one stride at a time. On the other hand, soccer provides
                  a sense of camaraderie, teamwork, and the thrill of
                  competition. Both running and soccer contribute to my overall
                  well-being, teaching me valuable lessons in dedication,
                  perseverance, and the importance of a healthy, active
                  lifestyle.
                </p>
              </div>
            </div>
            <div className="paper" id="img-acerca-de-4">
              <div class="paper" id="img-acerca-de-contenido">
                <p class="acerca">
                  My hobbies are an integral part of my life, and they encompass
                  a diverse range of interests, including video games, anime,
                  and movies. Video games offer me not only entertainment but
                  also a platform for problem-solving and strategic thinking. I
                  enjoy immersing myself in virtual worlds and exploring the
                  creative landscapes they offer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="proyectos" className="container">
          <div id="proyectos-ref"> </div>
          <h2>Proyectos</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={numeroElementos}
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
            <div className="card" alt="Card 2">
              <div className="card-img-top" alt="...">
                <div className="imagen" alt="..."></div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Proyecto 1</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" className="btn btn-success">
                  Ver proyecto
                </button>

                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => setVerVideo(true)}
                >
                  Ver demostracion
                </button>
              </div>
              <div className="card-footer">
                <div className="row enlaces-proyectos">
                  <i className="devicon-github-original-wordmark colored"></i>
                  <i className="devicon-docker-plain-wordmark colored"></i>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
        <section id="tecnologias" class="container">
          <h2>Tecnologias</h2>
          <div id="tecnologias-ref"></div>
          <div className="container" id="tecnologias-contenedor">
            <div className="row">
              {items.map((elem, index) => {
                let nc = 4;
                let id = elem + "-icon";
                let ncol = "col-sm-" + 12 / nc;
                return (
                  <div>
                    <div className="element-icon">
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

        {/* <section id="contacto" class="container">
          <h2>Contacto</h2>
          <form>
            <div id="scrollToRef" class="form-group">
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
        </section> */}

        <footer className="bg-light text-center">
          <p>&copy; 2023 Mi Portafolio. Todos los derechos reservados.</p>
        </footer>
        <div style={{ zIndex: 2 }}>
          <Modal
            isOpen={verVideo}
            contentLabel="Video demostracion"
            onRequestClose={() => setVerVideo(false)}
            style={{
              content: {
                width: "100vw",
                height: "80vh",
                margin: "auto",
                background: "#007ea7",
                left: "0px",
              },
            }}
          >
            <iframe
              width="100%"
              height="90%"
              src="https://www.youtube.com/embed/eakalRnzN28"
              title="Video"
              allowFullScreen
              id="video"
              onLoad={() => hideLoader()}
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

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
      </div>
    </>
  );
};

export default App;
