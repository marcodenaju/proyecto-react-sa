import "./Navbar.css";



import CartWidget from "../../common/cartWidget/CartWidget";


export const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://res.cloudinary.com/dnixufsko/image/upload//c_thumb,w_80/v1695835129/231396019_304500691462675_5388614809897967354_n_q0u1f1.jpg"
        alt="logo"
      />

      <ul>
        <div className="navbar-list">
          <li>Ketchup</li>
          <li>Salsa picante</li>
          <li>Chimi agridulce</li>
          <li>Chimi picantón</li>
        </div>
      </ul>
      <CartWidget />
    </nav>
  );
};
