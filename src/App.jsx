import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  

  return (
    <div className="App">
      <header className="header">
        <h1>React Router V6 🧨</h1>
      </header>
      <div>
        <Nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="heroes">Heroes</NavLink>
        <NavLink to="about">About</NavLink>
        </Nav>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default App;
