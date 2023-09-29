import { getHeroes } from "../../data/data";
import {Link, Outlet} from 'react-router-dom';
import HeroeDetail from "../../Components/HeroeDetail/HeroeDetail";
import "./Heroes.css";

const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>
      <div>
        <h1>All heroes 🤺🤺</h1>
        <ul>
          {heroes.map((heroe) => {
            <li key={heroe.id}>
              <Link to={"/heroes/${heroe.id}"}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </li>;
          })}
        </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default Heroes;
