export class Technology {
    constructor(id, name, url, urlHover) {
      this.id = id ?? "";
      this.name = name ?? "";
      this.url = url ?? "";
      this.urlHover = urlHover ?? ""
    }
  
  
    static fromJson(json) {
      return new Technology(json.id, json.name, json.url, json["url-hover"]);
    }
  
   
    toJson() {
      return {
        id: this.id,
        name: this.name,
        url: this.url,
        "url-hover": this.urlHover
      };
    }
  }