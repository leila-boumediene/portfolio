import "./MesProjets.css";
import { Link } from "react-router-dom";

import Vinted from "../images/vinted.png";
import LogoVinted from "../images/Vinted_logo.png";
import TodolistTitre from "../images/todolisttitre.png";
// import Marvel from "../images/Marvel_Logo.svg";
// import MarvelImage from "../images/super-heros-marvel-min.jpg";
import ToDoList from "../images/todolist.png";
// import LogoDeliveroo from "../images/Deliveroo_logo.svg.png";
// import DeliverooImage from "../images/deliveroo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MesProjets = () => {
  return (
    <>
      <Link to="/">
        <div className="chevronicon">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </div>
      </Link>
      <div className="emplacement">
        <div className="vinted">
          <img src={LogoVinted} alt="" className="logoVinted" />
          <div className="afaire">
            <a href="https://distracted-kilby-659d86.netlify.app/">
              <img src={Vinted} alt="" className="vintedpicture" />
            </a>
            {/* <p className="description">
            <p>Les consignes : </p>
            <p>Mettre en place React Router,</p>
            <p>
              {" "}
              Créer les pages Home et Offer avec un lien permettant de passer
              d'une page à l'autre et ainsi tester la navigation,
            </p>
            <p>
              {" "}
              Créer un composant Header dans lequel figurera le logo et trois
              boutons (s'inscrire, se connecter et vends tes articles ),
            </p>
            <p>
              {" "}
              Réalisez l'intégration HTML (de la page Home dans un premier
              temps), Réalisez le CSS
            </p>
          </p> */}
          </div>
        </div>
        <div className="todolist">
          <img src={TodolistTitre} alt="" className="todologo" />
          <div className="afaire">
            <a href="https://condescending-kepler-404937.netlify.app/">
              <img src={ToDoList} alt="" className="todilistimage" />
            </a>
          </div>
        </div>
        {/* <div className="marvel">
          <img src={Marvel} alt="" className="logomarvel" />
          <div className="afaire">
            <img src={MarvelImage} alt="" className="marvelimage" /> */}
        {/* <div className="consignemarvel">
            <p className="textmarvel">
              Créez un site en React (avec un routeur) qui contiendra en haut :
              le logo MARVEL et un menu (personnages, comics, favoris),
            </p>
            <p className="textmarvel">
              Sur la page principale « personnages », vous devrez faire
              apparaître la liste des personnages MARVEL, par ordre alphabétique
              (100 par page), sous forme de fiche (photo, nom, description). En
              cliquant sur chaque fiche, il devra être possible d’accéder à une
              page regroupant les comics liés au personnage.
            </p>

            <p className="textmarvel">
              Sur la page « comics », vous devrez faire apparaître la liste des
              comics MARVEL, par ordre alphabétique, sous forme de fiche (photo,
              titre, description).
            </p>
            <p className="textmarvel">
              Vous intégrerez également un moteur de recherche, afin de
              rechercher par nom/titre.
            </p>
            <p className="textmarvel">
              Une barre de recherche pour la page « comics », une autre pour la
              page « personnages ». Vous prendrez également soin d’ajouter un
              système de pagination à chaque page.
            </p>
            <p className="textmarvel">
              Pour les pages « personnages » et « comics », vous devrez créer un
              système permettant de mettre chaque fiche en favoris, en fonction
              des souhaits de l’utilisateur. Vous devrez conserver ces favoris
              dans la mémoire locale du navigateur (Cookies ou Local Storage) de
              l’utilisateur.
            </p>
            <p className="textmarvel">
              Vous hébergerez votre frontend sur Netlify et votre backend sur
              Heroku.
            </p>
          </div> */}
        {/* </div>
        </div> */}
        {/* <div className="deliveroo">
          <img src={LogoDeliveroo} alt="" className="logodeliveroo" />
          <div className="consignedeliveroo">
            <img src={DeliverooImage} alt="" className="deliverooImage" /> */}
        {/* <div className="textdeliveroo">
            <p> Le code source devra être hébergé sur GitHub</p>
            <p>Vous devrez créer un projet React et l'héberger sur Netlify</p>
            <p>
              Vous devrez récupérer les données de votre API grâce à useEffect
              et à Axios
            </p>
          </div> */}
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default MesProjets;
