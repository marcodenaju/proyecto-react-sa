// export const Login = () => {
//   return <div>Login</div>;
// };

import { useState } from "react";

export const Login = () => {
  // console.log("Se renderiza");

  const [nombre, setNombre] = useState("pepe");

  const changeName = () => {
    setNombre("juan");
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
