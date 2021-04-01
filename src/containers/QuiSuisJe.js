import "./QuiSuisJe.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <p className="bienvenue">Bonjour et bienvenue ! </p>
        <p className="introduction">je m'appelle Leila, jeune développeuse.</p>
        <p className="presentation">
          Après une première partie de carrière à des postes tels que assistante
          de direction et gestionnaire RH, j'ai souhaité me réorienter vers une
          carrière qui me correspondait davantage. C'est pourquoi je me suis
          dirigée vers le développement web et mobile. J'ai donc débuté une
          formation avec le Reacteur, un Boot camp très intense qui m'a permis
          d'acquérir des bases solides et fait naître une réelle passion pour le
          code, que je souhaiterais développer lors d'un stage.
        </p>
        {/* <div className="telechargement">
          <p>Télécharger mon cv</p>
          <p>Mon profil Linkedin</p>
          <p>Mon GitHub</p>
        </div>
        <p className="introduction">
          Je vous laisse maintenant découvrir mon portfolio
        </p> */}
      </div>
    </div>
  );
};

export default QuiSuisJe;
