import React from "react";
import "./Campo.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor?: string;
  obrigatorio?: boolean;
  type?: string;
}

const Campo = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, type = "text"}: CampoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        onChange={(evento) => aoDigitado(evento)}
        placeholder={placeholder}
        value={valor}
        required={obrigatorio}
        type={type}
      />
    </div>
  );
};

export default Campo;
