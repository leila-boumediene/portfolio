import { Link } from "react-router-dom";

import "./MonProfilInteresse.css";
import LinkedinLogo from "../images/logo-LinkedIn.png";
import githubLogo from "../images/logo-github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonProfilInteresse = () => {
  return (
    <>
      <Link to="/">
        <div className="chevronicon">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </div>
      </Link>
      <div className="texte">Vous souhaitez me joindre ?</div>

      <div className="icons">
        <a href="https://www.linkedin.com/in/leila-boumediene">
          <img src={LinkedinLogo} alt="" className="linkedin" />
        </a>
        <a href="https://github.com/">
          <img src={githubLogo} alt="" className="github" />
        </a>
      </div>
    </>
  );
};

export default MonProfilInteresse;
