import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <nav className="nav">
        <Link className="navLink" to="/home">Home</Link>
        <Link className="navLink" to="/about">About</Link>
        <Link className="navLink" to="/contact">Contact</Link>
        <Link className="navLink" to="/invoices">Invoices</Link>
        <Link className="navLink" to="/expenses">Expenses</Link>
        <Link className="navLink" to="/">VOLVER A INICIO</Link>
      </nav>
      {/* Para que los elementos se rendericen correctamente debo utilizar el Outlet, esto hace que el Layout de App se mantenga constante y el componente Outlet tome el valor de cada routa. */}
      {/* Es decir, cuando haga click en about, el componente Outlet va a convertirse en el componente About, y cuando haga click en home se convertira en Home y asi.*/}
      <h2>ESTO VA ANTES DEL OUTLET</h2>
      <Outlet />
      <h2>ESTO VA DPS DEL OUTLET</h2>
    </div>
  );
}

export default App;
