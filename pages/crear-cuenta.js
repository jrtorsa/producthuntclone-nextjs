import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  function crearCuenta() {
    console.log("Creando Cuenta...");
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear Cuenta
          </h1>

          <Formulario>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
              />
            </Campo>
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Tu email"
                name="email"
              />
            </Campo>
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
              />
            </Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default CrearCuenta;
