import NavBar from "./components/nav.js";
import DefaultContainer from "./components/DefContainer";
import Titles from "./components/Titles";

function App() {
  return (
    <div className="App">
      <header id="logo">
        <NavBar />
      </header>
      {/* <div className="h-screen">
          <p>imagen</p>
        </div> */}
      <DefaultContainer bg="bg-yellow-200">
        <div className="flex flex-col items-center">
          <Titles title="Acerca de mi" id="about"/>
          <p>
            Hola! soy Sebastián Núñez, vivo en Chile y estoy actualmente estoy
            estudiando Ingeniería Informática, terminaré la carrera en diciembre
            de 2021. Me apasiona el mundo del desarrollo de aplicaciones tanto
            web como móbiles, por lo que no pierdo la oportunidad de aprender
            cosas nuevas y estar aplicando mis conocimientos.
          </p>
        </div>
      </DefaultContainer>

      <DefaultContainer>
        <Titles title="Estudios"/>
        <p>
          En la carrera aprendí a desarrollar aplicaciones en Java usando JavaFx
          para aplicaciones de escritorio y C# usando .Net para páginas webs,
          también desarrollé una aplicacion funcional para un proyecto de la
          carrera usando React Native. Aparte de lo que aprendí en la carrera,
          he estudiado en Academlo que es un Bootcamp en linea que me enseñó el
          desarrollo en el Stack MERN además de Django con Postgres para el
          desarrollo de API's y el despliegue de páginas a producción.
        </p>
      </DefaultContainer>

      <DefaultContainer bg="bg-yellow-200">
        <Titles title="Servicios" id="services"/>
        <p>
          Desarrollar páginas webs estáticas o aplicaciones webs funcionales con
          bases de datos
        </p>
      </DefaultContainer>

      <DefaultContainer>
        <Titles title="Portafolio" id="portfolio"/>
        <p>Hired</p>
      </DefaultContainer>

      <div className="container bg-indigo-200 min-w-full">
        <div className="flex flex-col items-center">
          <Titles title="Contacto" id="contact"/>
          <a href="mailto:sebas.a.nunez@gmail.com" className="p-2 text-3xl">
            sebas.a.nunez@gmail.com
          </a>
          <a href="tel:+56978712360" className="p-2 text-3xl">
            78712360
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
