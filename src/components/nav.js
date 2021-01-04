import NavBtn from "./navbtn";
function NavBar() {
  return (
    <div className="container min-w-full bg-gray-900 p-5">
    <nav className="flex justify-between">
        <div>
            <NavBtn href="#logo" text="Logo"/>
        </div>
        <ul className="flex flex-row">
            <li><NavBtn href="#services" text="Servicios"/></li>
            <li><NavBtn href="#portfolio" text="Portafolio"/></li>
            <li><NavBtn href="#about" text="Acerca"/></li>
            <li><NavBtn href="#contact" text="Contacto"/></li>
        </ul>
    </nav>
    </div>
  );
}

export default NavBar;
