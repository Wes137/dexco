import NavBar from "./components/nav.js";

function App() {
  return (
    <div className="App">
      <header id="logo">
          <NavBar />
      </header>
      <div className="h-screen">
        <p>imagen</p>
      </div>
      <h1>Acerca de mi</h1>
      {/* <p>
        Hola! soy Sebastián Núñez, actualmente estoy estudiando Ingeniería Informática, 
        terminaré la carrera en diciembre de 2021. Me apasiona el mundo del desarrollo de 
        aplicaciones tanto web como móbiles, por lo que no pierdo la oportunidad de aprender 
        cosas nuevas y estar aplicando mis conocimientos.  
      </p> */}
      <h1 id="services">Servicios</h1>
      <h1 id="portfolio">Portafolio</h1>
      <h1 id="about">Acerca</h1>
      <h1 id="contact">Contacto</h1>
    </div>
  );
}

export default App
