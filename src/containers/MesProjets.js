import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MesProjets = () => {
  return (
    <>
      <Link to="/">
        <div className="chevronicon">
          <FontAwesomeIcon icon="chevron-circle-left" className="chevron" />
        </div>
      </Link>
      <div>Mes projets</div>;
    </>
  );
};

export default MesProjets;
