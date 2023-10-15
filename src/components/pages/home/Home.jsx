// import styles from "./Home.module.css"

// export const Home = ()=>{
//     return (
//         <div>
//             <h1 style ={{ color: "orange", fontSize: "2rem" }}>naju</h1>
//             <h2 className={styles.title}>Este es el título del ho me</h2>
//         </div>
//     )
// }

// ======================

// EXPORTACION NOMBRADA

import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // console.log("hola");
  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={switchMode}>Cambiar modo</button>
    </div>
  );
};

// EXPORTACION POR DEFECTO

// const Home = ()=>{
//     return <h1>Estoy en el home</h1>
// }

// export default Home
