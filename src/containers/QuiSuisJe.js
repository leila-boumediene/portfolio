import "./QuiSuisJe.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ornement from "../images/ornement.png";

const QuiSuisJe = () => {
  return (
    <div className="body">
      <Link to="/">
        <div className="chevronicon">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </div>
      </Link>
      <div className="corps">
        <div className="apropos">A propos de moi !</div>
        <p className="bienvenue">
          Bonjour et bienvenue
          <p className="presentation">
            Après une première partie de carrière à des postes tels que
            assistante de direction et gestionnaire RH, j'ai souhaité me
            réorienter vers un domaine pour lequel je me suis découvert une
            réelle passion, le développement web et Mobile. J'ai donc débuté une
            formation avec le Reacteur, un Boot camp très intense qui m'a permis
            d'acquérir des bases solides et fait naître une grande motivation et
            détermination dans l'apprentissage du code, que je souhaiterais
            développer lors d'un stage.
            <div className="signature">
              <p className="signatureNom">Leila</p>
            </div>
          </p>
        </p>
      </div>

      <div className="ornement">
        <img src={ornement} alt="" className="ornementBar" />
      </div>
    </div>
  );
};

export default QuiSuisJe;
