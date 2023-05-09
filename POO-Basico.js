  class comment{
    constructor({
      content,
      studentName, 
      studentRole = "estudiante",
    }){
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole
      this.likes = 0;
    }
    publicar(){
      console.log(this.studentName + "("+ this.studentRole + ")");
      console.log(this.likes + " likes");
      console.log(this.content);
    }
  }

  function videoPlay(id){
    const urlScreta = "https://lalala.com/" + id;
    console.log("estas reproduciendo un video" + urlScreta);
  }
  function videoStop(id){
    const urlScreta = "https://lalala.com/" + id;
    console.log("estas pausando un video" + urlScreta)
  }
    class platziClass{
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
    constructor({nombre, classes = [], isFree = false, lang = "spanish"}){
      this._nombre = nombre;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
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
    isFree: true,

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
      cursos: ["html", "css", "JS", cursoBasicoHtmlyCss],
      lang: "english"
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
    publicarComentario(commentContent){
      const comments = new comment({
        content:commentContent,
        studentName: this.name,
      })
      comments.publicar();
    }
  }

  class Freestuden extends Student{
    constructor(props){
      super(props)
    }
    approvedCourse(newCourse){
      if(newCourse.isFree){
         this.approvedCourses.push(newCourse);
      }
      console.warn("lo sentimos" + this.name + "pagale")
    }
  }
  class BasicStudent extends Student {
    constructor(props){
      super(props)
    }
    approvedCourse(newCourse){
      if(newCourse.lang !== "english"){
        this.approvedCourses.push(newCourse);
      } else{
        console.warn("los sentimos" + this.name + "no puedes tomar curos en ingles")
      }
    }
  }
  class ExpertStudent extends Student{
    constructor(props){
      super(props)
    }
    approvedCourse(newCourse){
      this.approvedCourse.push(newCourse); 
    }
  }
  class TecherStudent extends Student{
    constructor(props){
      super(props)
    }
    approvedCourse(newCourse){
      this.approvedCourse.push(newCourse); 
    }
    publicarComentario(commentContent){
      const comments = new comment({
        content: commentContent,
        studentName: this.name,
        studentRole : "profesor"
      })
      comments.publicar();
    }
  }

 


  const juan2 = new Freestuden({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });

  const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

  const freddy = new TecherStudent({
    name: "freddy",
    username: "freddy@123456798",
    email: "freddy123@platzi.com",
    instagram:"freddy_vega"
  })
