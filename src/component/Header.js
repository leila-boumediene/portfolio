import "./Header.css";

import photoHero from "../images/imgHero.png";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="entete">
          <img src={Logo} alt="" className="logoinitial" />
          <p className="emploi">Développeuse Web et Mobile</p>
        </div>
        <img src={photoHero} alt="" className="photoHero" />
      </div>
    </>
  );
};

export default Header;
