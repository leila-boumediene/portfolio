import "./MesCompetences.css";
import { Link } from "react-router-dom";
import LogoReact from "../images/React.jpg";
import MongoLogo from "../images/mongodb-logo-300x208.png";
import JsLogo from "../images/JsLogo.jpg";
import CloudinaryLogo from "../images/Cloudinary.jpg";
import GithubLogo from "../images/kisspng-computer-icons-download-github-clip-art-github-icon-5b44289596fd85.7749119715311934936185.jpg";
import NetlifyLogo from "../images/netlify.svg";
import HerokuLogo from "../images/337-3378411_svg-vector-heroku-logo-hd-png-download.png";
import CV from "../images/Capture d’écran 2021-03-31 à 14.34.46.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MesCompetences = () => {
  return (
    <>
      <div className="body">
        <Link to="/">
          <div className="chevronicon">
            <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
          </div>
        </Link>
        <div className="bodytitle">
          <img className="cv" src={CV} alt="" />
        </div>

        <p className="retour"></p>
      </div>
    </>
  );
};

export default MesCompetences;
