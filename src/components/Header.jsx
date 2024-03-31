import siteLogo from "../assets/logo.jpg";

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
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
