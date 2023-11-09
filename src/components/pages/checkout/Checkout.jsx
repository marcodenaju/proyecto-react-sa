import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (evento) => {
    setUserInfo({ ...userInfo, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // if (userInfo.nombre.length < 4 || !userInfo.email.includes("@")) {
    //   if (userInfo.nombre.length < 4) {
    //     setErrors({
    //       ...errors,
    //       nombre: "Indique un nombre con al menos 4 carateres",
    //     });
    //   }
    //   if (!userInfo.email.includes("@")) {
    //     setErrors({ ...errors, email: "Indique un mail válido" });
    //   }

    //   return;
    // }
  };


  // return (
  //   <div>
  //     <h1>Datos para el envío</h1>

  //     <form onSubmit={handleSubmit}>


  //       <input
  //         type="text"
  //         name="nombre"
  //         onChange={handleChange}
  //         placeholder="Nombre"
  //       />
  //       <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
  //         {errors.nombre}
  //       </span>
  //       <input
  //         type="text"
  //         name="apellido"
  //         onChange={handleChange}
  //         placeholder="Apellido"
  //       />
  //       <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
  //         {errors.apellido}
  //       </span>

  //       <input
  //         type="text"
  //         name="email"
  //         onChange={handleChange}
  //         placeholder="email"
  //       />
  //       <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
  //         {errors.email}
  //       </span>

  //       <button type="submit">Enviar</button>
  //     </form>
  //   </div>
  // );
};

export default Checkout;