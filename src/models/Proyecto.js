export class Proyecto {
    constructor(
      img,
      titulo,
      descripcion,
      url_github,
      url_proyecto,
      url_demostracion,
      url_docker,
      detalles
    ) {
      this.img = img;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.url_github = url_github;
      this.url_proyecto = url_proyecto;
      this.url_demostracion = url_demostracion;
      this.url_docker = url_docker;
      this.detalles = detalles;
    }
 
    static fromJson(json) {
      return new Proyecto(
        json.img,
        json.titulo,
        json.descripcion,
        json.url_github,
        json.url_proyecto,
        json.url_demostracion,
        json.url_docker,
        json.detalles
      );
    }
 
    toJson() {
      return {
        img: this.img,
        titulo: this.titulo,
        descripcion: this.descripcion,
        url_github: this.url_github,
        url_proyecto: this.url_proyecto,
        url_demostracion: this.url_demostracion,
        url_docker: this.url_docker,
        detalles: this.detalles,
      };
    }
  }
  