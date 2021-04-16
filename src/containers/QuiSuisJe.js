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
            <p>
              {" "}
              Après une première partie de carrière consacrée à la gestion et
              plus particulièrement à celle des ressources humaines, j'ai
              souhaité m'envoler en me réorientant vers un domaine pour lequel
              je me suis découverte une réelle et vive passion : le
              développement Web et Mobile.{" "}
            </p>
            <p>
              {" "}
              Bien déterminée à atteindre mes objectifs, j'ai donc débuté une
              formation auprès du Reacteur, un Boot Camp très intense qui m'a
              permis d'acquérir des bases et fait naître pour l'apprentissage du
              codage informatique, une profonde motivation.{" "}
            </p>
            <p>
              {" "}
              De nature créative, curieuse et consciencieuse, j'aimerais
              développer ma programmation de manière concrète au cours d'un
              stage ou bien d'un CDD/CDI.
            </p>

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
