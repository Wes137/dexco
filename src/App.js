import NavBar from "./components/nav.js";
import DefaultContainer from "./components/DefContainer";
import Titles from "./components/Titles";
import SubTitle from "./components/SubTitles";

// import yo from "./img/seba.jpg"

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
          <Titles title="Acerca de mi" id="about" />
          {/* <img src={yo} alt="mi foto" className=""/> */}
          <p>
            Hola! soy Sebastián Núñez, vivo en Chile y estoy actualmente estoy
            estudiando Ingeniería Informática, terminaré la carrera en diciembre
            de 2021. Me apasiona el mundo del desarrollo de aplicaciones tanto
            web como móbiles, por lo que no pierdo la oportunidad de aprender
            cosas nuevas y estar aplicando mis conocimientos.
            <br></br>
            <br></br>
            Estoy interesado en ofertas de trabajo relacionadas al desarrollo
            web tanto backend, frontend o fullstack como Junior.
          </p>
        </div>
      </DefaultContainer>

      <DefaultContainer>
        <Titles title="Habilidades" />
        <SubTitle sub="Lenguajes" />
        <p>Javascript &gt; Python &gt; C# &gt; Java</p>
        <SubTitle sub="Frameworks" />
        <p>React &gt; Django &gt; React Native &gt; Express &gt; .Net</p>
        <SubTitle sub="Idiomas" />
        <p>Español - Nativo</p>
        <p>Inglés - Intermedio Conversacional</p>
      </DefaultContainer>

      <DefaultContainer bg="bg-yellow-200">
        <Titles title="Servicios" id="services" />
        <p>Desarrollo de páginas webs funcionales con bases de datos</p>
      </DefaultContainer>

      <DefaultContainer>
        <Titles title="Portafolio" id="portfolio" />
        
          <SubTitle sub="Aplicación web para enviar solicitudes de contrato a la municipalidad"/>
          <p>
          Estado anterior: Un representate de un colegio debía ir fisicamente a
          la municipalidad a solicitar un formato de un word para redactar un
          contrato, luego enviar ese word a un correo, este le llegaba a un
          administrativo de la municipalidad el cual revisaba si los datos está
          correctos, si hay errores deben enviarlos de nuevo, en el peor caso
          puede tardar hasta tres meses el contrato de un profesor.
          <br></br>
          <br></br>
          Estado actual: Las solicitudes se hacen a través de una aplicación web
          que contiene un formulario el que al ser rellenado puede validar la
          información ingresada de los docentes contra una base de datos, al ser
          enviada la información, la página la envía a una API en Django que los
          usa para crear un pdf usando un formato determinado el que es guardado
          en un drive para ser previsualizado y descargado por un administrativo
        </p>
      </DefaultContainer>

      <div className="container bg-indigo-200 min-w-full">
        <div className="flex flex-col items-center">
          <Titles title="Contacto" id="contact" />
          <a
            href="mailto:sebas.a.nunez@gmail.com"
            className="p-2 text-2xl underline"
          >
            sebas.a.nunez@gmail.com
          </a>
          <a href="tel:+56978712360" className="p-2 text-2xl underline">
            +569 78712360
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
