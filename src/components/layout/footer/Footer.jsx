import { Outlet } from "react-router-dom";
// import styles from "./Footer.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-section"]}>
        <h2>Contactanos:</h2>
        <p>salsa.areco@gmail.com</p>
      </div>
      <div className={styles["footer-section"]}>
        <h2>Nuestras redes:</h2>
        <ul className={styles["redes-list"]}>
          <li>
            <a href="https://www.facebook.com/Salsa-Areco" target="_blank">
              {" "}
              <FacebookIcon />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/salsa.areco/" target="_blank">
              <InstagramIcon />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h2>Horarios:</h2>
        <p>Lun a Vie de 9 a 18 hs</p>
        <p>Sábados de 9 a 12 hs</p>
      </div>
    </div>
  );
};

export default Footer;
