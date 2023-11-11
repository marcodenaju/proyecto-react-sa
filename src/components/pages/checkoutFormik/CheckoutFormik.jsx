import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
  marginBottom: 1,
};

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeatPassword: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      
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

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={6} sm={2}>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 style={{ fontFamily: "verdana" }}>Datos para el envío</h1>
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
            <Button
variant="contained" sx={buttonStyle}
            >
              Enviar
            </Button>
          </div>

          <div>
            <Button variant="contained" sx={buttonStyle}>
              Cancelar
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default CheckoutFormik;
