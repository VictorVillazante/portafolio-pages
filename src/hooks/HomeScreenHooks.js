import { useState, useEffect } from "react";
import { getProyectos } from "services/ProyectosService";
import { getTechnologies } from "services/TechnologiesService";

export const useResponsiveElements = () => {
  const [numeroElementos, setNumeroElementos] = useState(100 / 3);

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
    window.addEventListener("resize", manejarCambioDeTamaño);

    return () => {
      window.removeEventListener("resize", manejarCambioDeTamaño);
    };
  }, []);

  return { numeroElementos };
};

export const useModalManagement = () => {
  const [verVideo, setVerVideo] = useState(false);
  const [verDetalle, setVerDetalle] = useState(false);
  const [detalleModal, setDetalleModal] = useState("");
  const [urlVideo, setUrlVideo] = useState("");

  const verVideoDemostracion = (url) => {
    console.log(url);
    setUrlVideo(url);
    setVerVideo(true);
  };

  const hideLoader = (loaderRef) => {
    if (loaderRef.current) {
      loaderRef.current.style.display = "none";
    }
  };

  return {
    verVideo,
    setVerVideo,
    verDetalle,
    setVerDetalle,
    detalleModal,
    setDetalleModal,
    urlVideo,
    verVideoDemostracion,
    hideLoader,
  };
};

// export const useDataFetching = () => {
//   const proyectos = getProyectos();
//   const technologies = getTechnologies();

//   return { proyectos, technologies };
// };
