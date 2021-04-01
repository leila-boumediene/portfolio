import "./Home.css";
import { Link } from "react-router-dom";
import Photo from "../images/20210331_142058.jpg";

const Home = () => {
  return (
    <>
      <div className="containt">
        <div className="lestitres">
          <Link to="/quisuisje" className="quisuisje">
            <div>Qui suis-je ?</div>
          </Link>
          <Link to="/mescompetences" className="competences">
            <div>Mes compétences</div>
          </Link>
          <Link to="/mesprojets" className="mesprojets">
            <div>Mes projets</div>
          </Link>
          <Link to="/monprofilinteresse" className="monprofilinteresse">
            <div>Mon profil vous intéresse ?</div>
          </Link>
        </div>
      </div>
      <div className="citations">
        <div className="box1">
          <p className="citationA">
            Les programmes doivent être faits pour être lus par des gens, et
            occasionnellement pour être exécutés par des machines.
          </p>
          <p className="citationA1">Hal Abelson</p>
        </div>

        <div className="citationPosition">
          <p className="citationB">
            Un langage qui n'affecte pas votre manière de penser la
            programmation ne vaut pas la peine d'être connu.
          </p>

          <p className="citationB1">Alan Jay Perlis</p>
        </div>
        <div className="box2">
          <p className="citationC">
            Vous croyez savoir quand vous apprenez, vous en êtes sur quand vous
            écrivez, persuadé quand vous enseignez, mais certain seulement quand
            vous programmez.
          </p>
          <p className="citationC1">Alan Jay Perlis</p>
        </div>
      </div>
    </>
  );
};

export default Home;
