import "./Header.css";
import { Link } from "react-router-dom";

import photoHero from "../images/imgHero.png";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="entete">
          <Link to="/home">
            <img src={Logo} alt="" className="logoinitial" />
          </Link>
          <p className="emploi">Développeuse Web et Mobile</p>
        </div>
        <img src={photoHero} alt="" className="photoHero" />
      </div>
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
    </>
  );
};

export default Header;
