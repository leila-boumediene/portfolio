import "./MesCompetences.css";
import { Link } from "react-router-dom";
import CV from "../images/cv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MesCompetences = () => {
  return (
    <>
      <div className="body">
        <div className="chevronicon">
          <Link to="/">
            <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
          </Link>
        </div>

        {/* <a href="/src/images/cv.png">Télécharger mon cv</a> */}
        <div className="bodytitle">
          <img className="cv" src={CV} alt="" />
        </div>

        <p className="retour"></p>
      </div>
    </>
  );
};

export default MesCompetences;
