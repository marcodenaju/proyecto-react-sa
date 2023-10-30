import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>
            <img
              src="https://res.cloudinary.com/dvciyj7v2/image/upload/v1698679863/logo_areco_c0qili.png"
              alt="logo"
            />
          </h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          <Link to="/category/salsas">
            <li>Salsas</li>
          </Link>
          <Link to="/category/chimis">
            <li>Chimis</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
