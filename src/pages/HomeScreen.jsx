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
const HomeScreen=()=>{
    //setInterval(miFuncion, 2000);

    let contador = 0;
    function miFuncion() {
      //console.log("Esta función se ejecuta cada 40 segundos."+((contador++)%4));
      const elemento1 = document.getElementById("img-acerca-de-1");
      const elemento2 = document.getElementById("img-acerca-de-2");
      // const elemento3 = document.getElementById("img-acerca-de-3");
      // const elemento4 = document.getElementById("img-acerca-de-4");
      elemento1.style.borderRadius = "10px";
      elemento2.style.borderRadius = "10px";
      // elemento3.style.borderRadius = "10px";
      // elemento4.style.borderRadius = "10px";
      elemento1.style.boxShadow = "none";
      elemento2.style.boxShadow = "none";
      // elemento3.style.boxShadow = "none";
      // elemento4.style.boxShadow = "none";
  
      contador = contador + 1;
      if (contador % 2 == 0) {
        const elemento = document.getElementById("img-acerca-de-1");
        elemento.style.borderRadius = "100px";
        elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
      }
      if (contador % 2 == 1) {
        const elemento = document.getElementById("img-acerca-de-2");
        elemento.style.borderRadius = "100px";
        elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
      }
      // if (contador % 4 == 2) {
      //   const elemento = document.getElementById("img-acerca-de-3");
      //   console.log("Actualizando img-acerca-de-3");
      //   elemento.style.borderRadius = "100px";
      //   elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
      // }
      // if (contador % 4 == 3) {
      //   const elemento = document.getElementById("img-acerca-de-4");
      //   console.log("Actualizando img-acerca-de-4");
      //   elemento.style.borderRadius = "100px";
      //   elemento.style.boxShadow = "13px 13px 39px 2px rgba(0,0,0,0.69)";
      // }
    }
    // Manejar ancho pantalla
    const [numeroElementos, setNumeroElementos] = useState(100 / 3);
  
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
      manejarCambioDeTamaño();
      setTimeout(() => {
        let elem = document.getElementById("spinner");
        elem.style.display = "none";
      }, 2000);
      // Agregar un event listener para el evento resize
      window.addEventListener("resize", manejarCambioDeTamaño);
  
      // Limpia el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener("resize", manejarCambioDeTamaño);
      };
    }, []);
    // Manejar ancho pantalla
  
    const [verVideo, setVerVideo] = useState(false);
    const [verDetalle, setVerDetalle] = useState(false);
    const [detalleModal, setDetalleModal] = useState("");
  
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
    const [urlVideo, setUrlVideo] = useState("");
    let proyectos = [
      {
        img: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNgM1Rdf3DrfgvjGWJ7FOIf6PqKTqrUQGIr8iCz5Ni8OveUgfJPm1B9JF-iP8OXN8VUw&usqp=CAU')",
        titulo: "App wawa learning",
        descripcion:
          "Aplicacion flutter con rutas, machine learning(teachable machine),uso de puv.dev uso de camara, uso de almacenamiento,uso de asistente, creacion de juegos para niños interactivos, reproductor mp3",
        url_github:
          "https://github.com/VictorVillazante/App-for-education-of-young-children-with-Teachable-Machine_IA",
        url_proyecto: "",
        url_demostracion: "https://www.youtube.com/embed/eakalRnzN28",
        url_docker: "",
        detalles: {
          titulo: "App wawa learning",
          tecnologias: ["flutter", "tensorflow", "dart"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenQHAvuHormTf5QE_9pPcKBB5Di_MmisVXQ&usqp=CAU')",
        titulo: "Galeria dragon ball",
        descripcion: "React, Uso API drango ball, routes V5, hooks",
        url_github:
          "https://github.com/VictorVillazante/galeriaReactRouteV5DragonBall",
        url_proyecto: "https://cozy-souffle-56714d.netlify.app",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Galeria dragon ball",
          tecnologias: ["react", "javascript", "html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://doralfamilyjournal.com/wp-content/uploads/2021/06/bitcoins-800x445.jpg')",
        titulo: "Calculador de cambios monedas digitales",
        descripcion: "Uso API monedas digitales, VUE, routes",
        url_github:
          "https://github.com/VictorVillazante/Cripto-information-vue-firebase-http-sass",
        url_proyecto: "https://timely-lebkuchen-b1a4f1.netlify.app",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Calculador de cambios monedas digitales",
          tecnologias: ["vue", "javascript", "html", "sass"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://yosoytuprofe.20minutos.es/wp-content/uploads/2019/11/cuadrados-m%C3%A1gicos.png')",
        titulo: "Magic Square",
        descripcion: "Android Studio, Algoritmo A*, manejo de interfaces java",
        url_github:
          "https://github.com/VictorVillazante/cuadradoMagicoAlgoritmoA_IA",
        url_proyecto: "",
        url_demostracion: "https://www.youtube.com/embed/nBlF0eVBLLI ",
        url_docker: "",
        detalles: {
          titulo: "Magic Square",
          tecnologias: ["android", "java"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://i.blogs.es/a8da14/650_1000_marvel-vs-dc-universos-warner-peliculas/1366_2000.png')",
        titulo: "Heroes galery",
        descripcion: "Uso angular routes, services, components",
        url_github: "https://github.com/VictorVillazante/angular-heroes",
        url_proyecto: "https://bespoke-centaur-dcce6e.netlify.app/home",
        url_demostracion: "",
        url_docker: "",
        detalles: "",
        detalles: {
          titulo: "Heroes galery",
          tecnologias: ["angular", "typescript", "html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1519520104014-df63821cb6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycmV0ZXJpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Angular project hardware store web site",
        descripcion: "Uso angular routes, services, components",
        url_github: "https://github.com/VictorVillazante/ferreteriaAngular",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: "",
        detalles: {
          titulo: "Angular project hardware store web site",
          tecnologias: ["angular", "typescript", "css", "html"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1519520104014-df63821cb6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycmV0ZXJpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "PHP project hardware store web site",
        descripcion: "Uso php, modelo MVC",
        url_github: "https://github.com/VictorVillazante/ferreteriaPHP",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "PHP project hardware store web site",
          tecnologias: ["php", "javascript", "html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1597250387976-ff61052d5e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFsbGVyJTIwbWVjYW5pY298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Angular project mechanical workshop web site",
        descripcion: "Uso php, modelo MVC",
        url_github: "https://github.com/VictorVillazante/tallerMecanicoPHP",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Angular project mechanical workshop web site",
          tecnologias: ["angular", "typescript", "html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1553688738-a278b9f063e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        titulo: "Animal shelter site web",
        descripcion: "Uso angular, ABM",
        url_github: "https://github.com/VictorVillazante/RefugioPeluchin-ABM",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Animal shelter site web",
          tecnologias: ["angular", "typescript", "html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        titulo: "Informatic services web page",
        descripcion: "CSS, HTML web page",
        url_github:
          "https://github.com/VictorVillazante/sitioWebServiciosInformatica",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Informatic services web page",
          tecnologias: ["html", "css"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://cocawi.com/wp-content/uploads/2023/06/icono_cocawi.png')",
        titulo: "Backend COCAWI lms (intership)",
        descripcion: "Project backend to for a social enterprise",
        url_github: "",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Backend COCAWI lms (intership)",
          tecnologias: [
            "node",
            "javascript",
            "express",
            "youtube-api",
            "firebase",
          ],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://cocawi.com/wp-content/uploads/2023/06/icono_cocawi.png')",
        titulo: "Frontend COCAWI lms (intership)",
        descripcion: "Project frontend for a social enterprise",
        url_github: "",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: "",
        detalles: {
          titulo: "Frontend COCAWI lms (intership)",
          tecnologias: [
            "angular",
            "typescript",
            "css",
            "youtube-api",
            "firebase",
          ],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://cocawi.com/wp-content/uploads/2023/06/icono_cocawi.png')",
        titulo: "Mobile COCAWI lms (intership)",
        descripcion: "Project mobile for a social enterprise, lms",
        url_github: "",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Mobile COCAWI lms (intership)",
          tecnologias: ["flutter", "dart", "youtube-api", "firebase"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://bicidatos.org/wp-content/uploads/2021/12/bicidatos_bolivia-2-768x481.png')",
        titulo: "Bicidatos app (intership)",
        descripcion:
          "Update of interfaces, create a registration of cycling tours, create, bicycle and cyclist census with the app",
        url_github: "",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Bicidatos app (intership)",
          tecnologias: ["android", "java", "firebase", "google-maps"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://bicidatos.org/wp-content/uploads/2021/12/bicidatos_bolivia-2-768x481.png')",
        titulo: "Bicidatos web page (intership)",
        descripcion:
          "Update of interfaces, create a registration of cycling tours a view of cycling tours",
        url_github: "",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Bicidatos web page (intership)",
          tecnologias: ["react", "javascript", "firebase", "google-maps"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvdXR1YmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Yourvideos clone",
        descripcion: "A social network to share videos where you can ",
        url_github: "https://github.com/VictorVillazante/youtube-clone",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Yourvideos clone",
          tecnologias: ["react-native", "javascript"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "Searching Employee",
        descripcion:
          "Search employees with requirements of your space in your enterprise",
        url_github:
          "https://github.com/VictorVillazante/React-native-app-employee",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Searching Employee",
          tecnologias: ["react-native", "javascript", "cloudinary", "mongodb"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1572950947476-26a6e4111e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0aWNrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "App stickers gifts api",
        descripcion:
          "Search gifts, stickers to share in your social networks. Download that and save that in your device",
        url_github: "https://github.com/VictorVillazante/app-stickers-gifts-api",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "App stickers gifts api",
          tecnologias: ["vue", "javascript", "api-stickers"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1608979827489-2b855e79debe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwY2VudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "Frontend health center",
        descripcion:
          "A work to administrate a health center, obtain virtual health tickets, obtain information about healthy services",
        url_github:
          "https://github.com/VictorVillazante/frontend-keycloak-microservicios",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Frontend health center",
          tecnologias: ["angular", "typescript", "keycloak", "css", "bootstrap"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1608979827489-2b855e79debe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwY2VudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "Backend health center",
        descripcion:
          "A work to administrate a health center, obtain virtual health tickets, obtain information about healthy services. Priorize high availability, autorization, autentication with microservices",
        url_github:
          "https://github.com/VictorVillazante/arq-microservices-proyect",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Frontend health center",
          tecnologias: ["spring", "java", "microservices"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Queue producer",
        descripcion:
          "Project with queue that is use to share information for example messages",
        url_github: "https://github.com/VictorVillazante/topic-exchange-producer",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Queue producer",
          tecnologias: ["spring", "java", "rabbit-mq"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Queue consumer",
        descripcion:
          "Project with queue that is use to share information for example messages",
        url_github: "https://github.com/VictorVillazante/topic-exchange-consumer",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Queue consumer",
          tecnologias: ["spring", "java", "rabbit-mq"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
        titulo: "Mapbox angular",
        descripcion: "Register of a route, draw a map, share with your friens",
        url_github: "https://github.com/VictorVillazante/mabox-angular-borrador",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Mapbox angular",
          tecnologias: ["angular", "typescript", "css", "mapbox"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lzdGVtJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Todo JWT spring",
        descripcion: "ABM spring with token jwt",
        url_github: "https://github.com/VictorVillazante/TODOconJWTBackend",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Todo JWT spring",
          tecnologias: ["spring", "java", "jwt"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN5c3RlbSUyMGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "Spring nginx",
        descripcion:
          "Better availability in backend with nginx load balancer in diferents destination",
        url_github:
          "https://github.com/VictorVillazante/backendHomeworkTodoNginx",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Spring nginx",
          tecnologias: ["spring", "java", "nginx"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Spring todo",
        descripcion: "simple TODO, ABM in spring",
        url_github: "https://github.com/VictorVillazante/TODO",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Spring todo",
          tecnologias: ["spring", "java"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Frontend clothe store",
        descripcion: "Clothe store with API REST angular with spring",
        url_github:
          "https://github.com/VictorVillazante/frontend-tienda-ropa-2022",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Frontend clothe store",
          tecnologias: ["angular", "typescript", "css", "bootstrap"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
        titulo: "Backend clothe store",
        descripcion: "Clothe store with API REST angular with spring",
        url_github:
          "https://github.com/VictorVillazante/backend-tienda-ropa-2022",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Backend clothe store",
          tecnologias: ["java", "spring"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
        titulo: "Backend todo nodejs docker compose",
        descripcion: "TODO with API_REST, mysql, nodejs express, docker compose",
        url_github:
          "https://github.com/VictorVillazante/DockerCompose-node-mysql",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Backend todo nodejs docker compose",
          tecnologias: ["node", "docker"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg?size=626&ext=jpg&ga=GA1.1.801317655.1686015080&semt=sph')",
        titulo: "Chatbot telegram",
        descripcion: "Chatbot with telegram in spring boot",
        url_github: "https://github.com/VictorVillazante/demo-spring-boot-main",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Chatbot telegram",
          tecnologias: ["spring", "telegram"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      {
        img: "url('https://www.protocol.com/media-library/elon-musk-s-twitter-account-bio-next-to-the-twitter-logo.jpg?id=29666042&width=1245&height=700&quality=85&coordinates=0%2C53%2C0%2C53')",
        titulo: "Replic send tweets with caching",
        descripcion: "Replic send tweets with caching, mysql, express, redis",
        url_github: "https://github.com/VictorVillazante/redis-node-mysql",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: {
          titulo: "Replic send tweets with caching",
          tecnologias: ["express", "mysql", "node", "redis"],
          explicacion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
  
      {
        img: "url('https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        titulo: "Subiendo mas trabajos...",
        descripcion:
          "Trabajando para subir mas proyectos, demostraciones de mis repositorios",
        url_github: "https://github.com/VictorVillazante",
        url_proyecto: "",
        url_demostracion: "",
        url_docker: "",
        detalles: "",
      },
    ];
  
    let items = [
      "html",
      "css",
      "javascript",
      "angular",
      "vue",
      "react",
      "android",
      "flutter",
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
      "dart",
      "sass",
      "java",
      "typescript",
      "php",
      "express",
      "youtube-api",
      "google-maps",
      "react-native",
      "cloudinary",
      "keycloak",
      "bootstrap",
      "rabbit-mq",
      "mapbox",
      "jwt",
      "nginx",
      "telegram",
    ];
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
    const verVideoDemostracion = (url) => {
      setUrlVideo(url);
      setVerVideo(true);
    };
    const verificarIconoExistente = (icono) => {
      console.log(icono);
      if (icono == "tensorflow-icon") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png";
      }
      if (icono == "youtube-api-icon") {
        return "https://img.freepik.com/free-vector/youtube-concept_23-2147862172.jpg?w=826&t=st=1695224281~exp=1695224881~hmac=60af6182e73a985437efd595eda450046e5a29b6d4176f1e23c72019121e99af";
      }
      if (icono == "google-maps-icon") {
        return "https://1000marcas.net/wp-content/uploads/2020/10/Google-Maps-Logo-tumb-1280x720.png";
      }
      if (icono == "react-native-icon") {
        return "https://www.inovex.de/wp-content/uploads/2018/03/react-native.png";
      }
      if (icono == "cloudinary-icon") {
        return "https://res.cloudinary.com/demo/image/upload/e_shadow:90,x_15,y_15,co_rgb:0B70B6/c_pad,ar_1.0/w_200,f_auto,q_auto/cloudinary_icon.png";
      }
      if (icono == "mapbox-icon") {
        return "https://avatars.githubusercontent.com/u/600935?s=200&v=4";
      }
      if (icono == "jwt-icon") {
        return "https://jwt.io/img/icon.svg";
      }
      if (icono == "telegram-icon") {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZO22mm0NSyuaYfsXsAaVCz6OY02ndeRXjEg&usqp=CAU";
      }
      if (icono == "rabbit-mq-icon") {
        return "https://www.jorgehernandezramirez.com/wp-content/uploads/2017/04/rabbitmq-logo.png";
      }
      if (icono == "keycloak-icon") {
        return "https://blog.consdata.tech/assets/img/posts/2020-02-01-keycloak-uwierzytelnianie-autoryzacja-springboot-angular/Keycloak.png";
      }
      return "";
    };
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
            {/* <div className="paper" id="img-acerca-de-3">
              <div className="paper" id="img-acerca-de-contenido">
                <p className="acerca">
                  Sports play a significant role in my life, and two of my
                  favorite activities are running and soccer. Beyond being a
                  source of physical fitness, sports are a way for me to
                  challenge myself, stay disciplined, and maintain a healthy
                  balance in life.
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
            </div> */}
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
              {items.map((elem, index) => {
                let nc = 4;
                let id = elem + "-icon";
                let ncol = "col-sm-" + 12 / nc;
                return (
                  <div>
                    <div className="element-icon">
                      {verificarIconoExistente(id) == "" ? (
                        <div className="icon-tecnologies" id={id}></div>
                      ) : (
                        <div
                          id="img"
                          style={{
                            backgroundImage:
                              "url('" + verificarIconoExistente(id) + "')",
                          }}
                        ></div>
                      )}
                      <span
                        style={{
                          zIndex: 1,
                          position: "relative",
                          top: "-50",
                        }}
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
                  let nc = 4;
                  let id = elem + "-icon";
                  let ncol = "col-sm-" + 12 / nc;
                  return (
                    <div id="tecnologias-proyecto-modal">
                      <div className="element-icon">
                        {verificarIconoExistente(id) === "" ? (
                          <div className="icon-tecnologies" id={id}></div>
                        ) : (
                          <div
                            id="img"
                            style={{
                              backgroundImage:
                                "url('" + verificarIconoExistente(id) + "')",
                            }}
                          ></div>
                        )}
                        <span
                          style={{
                            zIndex: 1,
                            position: "relative",
                            top: "-50",
                          }}
                        >
                          {elem.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* <h2 style={{ background: "transparent", textAlign: "center" }}>
              Explanation
            </h2>
            <p style={{ color: "white" }}>{detalleModal.explicacion}</p> */}
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