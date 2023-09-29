import "./Home.css";

const Home = () => {
  return (
    <>
      <h2>Home page</h2>
      <p>Ejemplo sobre React Router</p>
      <ul>
        <li>
            <p>
                <span>visita la pagina de heroes 🎈
                    <link to ="heroes"></link>
                </span>
            </p>
        </li>
      </ul>
    </>
  );
};

export default Home;
