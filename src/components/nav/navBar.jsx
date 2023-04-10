import Logo from "../../../public/img/logos/logo-white.webp";
import './navBar.css'

export const NavBar = () => {
  return (
    <nav className="navContainer">
      <picture className="logo">
        <img src={Logo} alt="logotipo" />
      </picture>
    </nav>
  );
};
