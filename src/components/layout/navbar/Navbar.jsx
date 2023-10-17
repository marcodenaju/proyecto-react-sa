import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className="containerNavbar">
      <h4><img
        src="https://res.cloudinary.com/dnixufsko/image/upload//c_thumb,w_80/v1695835129/231396019_304500691462675_5388614809897967354_n_q0u1f1.jpg"
        alt="logo"
      />
      </h4>

      <ul className="categories">
          <li>Ketchup</li>
          <li>Salsa picante</li>
          <li>Chimi agridulce</li>
          <li>Chimi picantón</li>
      </ul>
      <Link to="/pepito">Ir a pepito</Link>
      <CartWidget />
    </div>
    <Outlet/>

    </>
  );
};