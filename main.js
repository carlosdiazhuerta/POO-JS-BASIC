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
    cursos: ["html", "css", "JS"]
});

const escuelaData = new LearningPath({
    nombreRuta: "escuela data",
    cursos: ["SQL", "Python", "Machine Learning"]
  });
const escuelaVgs = new LearningPath({
    nombreRuta: "escuela videojuegos",
    cursos: ["Game Design", "Unity", "Unreal Engine"]
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