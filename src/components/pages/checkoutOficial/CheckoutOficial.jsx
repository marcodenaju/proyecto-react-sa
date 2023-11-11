import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
};

const CheckoutOficial = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeatPassword: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      
      handleFormSubmit();
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "Debe tener al menos 4 caracteres")
        .max(15, "No debe superar los 15 caracteres"),
      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "Debe tener al menos 4 caracteres")
        .max(15, "No debe superar los 15 caracteres"),
      email: Yup.string()
        .email("Ingrese un correo válido")
        .required("Este campo es obligatorio"),
      repeatEmail: Yup.string()
        .email("Ingrese un correo válido")
        .oneOf([Yup.ref("email")], "Los emails no coinciden"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{3,15}$/, {
          message:
            "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
        }),
      repeatPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleFormSubmit = () => {
    let order = {
      buyer: values,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
          <Link to="/">
            {" "}
            <Button variant="contained" sx={buttonStyle}>
              Seguir comprando
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h1 style={{ fontFamily: "verdana" }}>Ingrese sus datos:</h1>
          </div>
          <div>
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Apellido"
              variant="outlined"
              name="apellido"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Repetir email"
              variant="outlined"
              name="repeatEmail"
              onChange={handleChange}
              error={errors.repeatEmail ? true : false}
              helperText={errors.repeatEmail}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Contraseña"
              variant="outlined"
              name="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Repetir contraseña"
              variant="outlined"
              name="repeatPassword"
              onChange={handleChange}
              error={errors.repeatPassword ? true : false}
              helperText={errors.repeatPassword}
              style={{ marginBottom: 10 }}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" sx={buttonStyle}>
              Comprar
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
