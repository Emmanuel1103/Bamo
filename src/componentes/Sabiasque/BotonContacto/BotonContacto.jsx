import React from "react";
import { useNavigate } from "react-router-dom";
import "./BotonContacto.css";

function BotonContacto() {
  const navigate = useNavigate();

  const irAContacto = () => {
    navigate("/contacto");
  };

  return (
    <button className="send-btn" onClick={irAContacto}>
      Contáctanos
    </button>
  );
}

export default BotonContacto;
