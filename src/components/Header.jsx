import siteLogo from "../assets/logo.jpg";
import Button from "./Button";

const Header = () => {
  return (
    <header id="main-header">
      <h1 id="title">
        <span>
          <img id="img" src={siteLogo} alt="site logo" />
        </span>
        reactfood
      </h1>
      <nav>
       <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
