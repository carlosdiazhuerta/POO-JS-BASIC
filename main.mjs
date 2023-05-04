
  function videoPlay(id){
    const urlScreta = "https://lalala.com/" + id;
    console.log("estas reproduciendo un video" + urlScreta);
  }
  function videoStop(id){
    const urlScreta = "https://lalala.com/" + id;
    console.log("estas pausando un video" + urlScreta)
  }
  export class platziClass{
    constructor({name, videoId}){
      this.name = name;
      this.videoId = videoId;
    }
    reproducir(){
      videoPlay(this.videoId);
    }
    pausar(){
      videoStop(this.videoId);
    }
  }

  class cursos{
    constructor({nombre, classes = []}){
      this._nombre = nombre;
      this.classes = classes;
    }
    get nombre(){
      return this._nombre;
    }
    set nombre(nuevoNombre){
      if(nuevoNombre === "mal"){
        console.error("no sean malvibroso")
      }else{
        this._nombre = nuevoNombre;
      }
    }
  }

  const cursoBasicoHtmlyCss = new cursos({
    nombre: "CursoBasicoHtmlyCss",
    classes: ["curso gratuito de programacion basica"],
  })

  class LearningPath {
      constructor({
        nombreRuta,
        cursos = [],
      }) {
        this.nombreRuta = nombreRuta;
        this.cursos = cursos;
      }
    }

  const escuelaWeb = new LearningPath({
      nombreRuta : "escuela web",
      cursos: ["html", "css", "JS", cursoBasicoHtmlyCss]
  });

  const escuelaData = new LearningPath({
      nombreRuta: "escuela data",
      cursos: ["SQL", "Python", "Machine Learning", cursoBasicoHtmlyCss]
    });
  const escuelaVgs = new LearningPath({
      nombreRuta: "escuela videojuegos",
      cursos: ["Game Design", "Unity", "Unreal Engine", cursoBasicoHtmlyCss]
    });

  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
    get verUserName(){
      return this.username;
    }
  }

  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });

  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
  // la la la la 