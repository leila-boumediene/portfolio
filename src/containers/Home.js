import "./Home.css";
// import { Link } from "react-router-dom";
// import Ecran from "../images/ecran.png";
import ornement from "../images/ornement.png";

const Home = () => {
  return (
    <>
      <div className="ornement">
        <img src={ornement} alt="" className="ornementBar" />
      </div>
      <div className="citations">
        <div className="box1">
          {/* <img src={Ecran} alt="" className="ecran"/> */}
          <p className="citationA">
            Les programmes doivent être faits pour être lus par des gens, et
            occasionnellement pour être exécutés par des machines.
          </p>
          <p className="citationA1">Hal Abelson</p>
        </div>

        <div className="citationPosition">
          <p className="citationB">
            {/* <img src={Ecran} alt="" className="ecran" /> */}
            Un langage qui n'affecte pas votre manière de penser la
            programmation ne vaut pas la peine d'être connu.
          </p>

          <p className="citationB1">Alan Jay Perlis</p>
        </div>
        <div className="box2">
          <p className="citationC">
            {/* <img src={Ecran} alt="" className="ecran" /> */}
            Vous croyez savoir quand vous apprenez, vous en êtes sur quand vous
            écrivez, persuadé quand vous enseignez, mais certain seulement quand
            vous programmez.
          </p>
          <p className="citationC1">Alan Jay Perlis</p>
        </div>
      </div>
      <div className="ornement">
        <img src={ornement} alt="" className="ornementBar" />
      </div>
    </>
  );
};

export default Home;
