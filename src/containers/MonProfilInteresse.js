import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonProfilInteresse = () => {
  return (
    <>
      <Link to="/">
        <div className="chevronicon">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </div>
      </Link>
      <div>Mon profil vous interesse ?</div>
    </>
  );
};

export default MonProfilInteresse;
