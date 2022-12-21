import React, { useState, useEffect } from "react";

const FunctionalClock = () => {
  const [newUser, setNewUser] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Marcel",
    apellidos: "Reig Ibarra",
  });

  useEffect(() => {
    timerID = setInterval(() => tick(), 1000);
  });

  useEffect(() => {
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {nombre} {apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );

  function tick() {
    setNewUser((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
};

export default FunctionalClock;
