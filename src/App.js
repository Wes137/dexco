import NavBar from "./components/nav.js";

function App() {
  return (
    <div className="App">
      <header id="logo">
          <NavBar />
      </header>
      <div className="h-screen">
        <h1 id="services">Services</h1>
        <p>lorem</p>
      </div>
      <h1 id="portfolio">Portfolio</h1>
      <h1 id="about">About</h1>
      <h1 id="contact">Contact</h1>
    </div>
  );
}

export default App
