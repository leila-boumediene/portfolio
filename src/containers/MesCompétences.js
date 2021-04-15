import "./MesCompetences.css";
import { Link } from "react-router-dom";
import CV from "../images/cv.png";
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
