// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
  let inyectarTodo = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };

  return {
    mostrarTodo: (url, id) => inyectarTodo(url, id),
  };
})();

// Definición de la clase Multimedia para manejar la URL
class Multimedia {
  constructor(url) {
    this._url = url;
  }

  // Getter para obtener la URL
  get url() {
    return this._url;
  }

  // Método para establecer el inicio del video
  setInicio(tiempo) {
    // Modifica la URL del video para iniciar en un tiempo específico
    this._url += `?start=${tiempo}`;
  }
}

// Definición de la clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url); // Llama al constructor de la clase padre
    this._id = id;
  }

  // Getter para obtener el ID
  get id() {
    return this._id;
  }

  // Setter para establecer el ID
  set id(nuevoId) {
    this._id = nuevoId;
  }

  // Función para reproducir multimedia
  playMultimedia() {
    iifeGlobal.mostrarTodo(this.url, this.id);
  }
  setInicio(tiempo) {
    this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

// Crear instancias de Reproductor para reproducir diferentes videos
let playMusica = new Reproductor(
  "https://www.youtube.com/embed/3mbvWn1EY6g", // URL para el iframe de música
  document.getElementById("musica")
);
playMusica.playMultimedia();
playMusica.setInicio(10);

let playPelicula = new Reproductor(
  "https://www.youtube.com/embed/CRRlbK5w8AE",
  document.getElementById("peliculas")
);
playPelicula.playMultimedia();

let playSerie = new Reproductor(
  "https://www.youtube.com/embed/mfBbSwX6kEk",
  document.getElementById("series")
);
playSerie.playMultimedia();
