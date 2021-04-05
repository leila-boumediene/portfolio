import { Link } from "react-router-dom";

import "./MonProfilInteresse.css";
import LinkedinLogo from "../images/logo-LinkedIn.png";
import githubLogo from "../images/logo-github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonProfilInteresse = () => {
  return (
    <>
      <div className="chevronicon">
        <Link to="/">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </Link>
      </div>

      <div className="texte">
        Vous souhaitez me joindre ?<p className="mail">lila.bdm@gmail.com</p>
        <p className="phone">06 68 59 21 23</p>
      </div>

      <div className="icons">
        <a href="https://www.linkedin.com/in/leila-boumediene">
          <img src={LinkedinLogo} alt="" className="linkedin" />
        </a>
        <a href="https://github.com/leila-boumediene">
          <img src={githubLogo} alt="" className="github" />
        </a>
      </div>
    </>
  );
};

export default MonProfilInteresse;
