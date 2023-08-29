import React from "react";
import "./Campo.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor?: string;
  obrigatorio?: boolean;
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color';
}

const Campo = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = "text"}: CampoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${tipo}`}>
      <label>{label}</label>
      <input
        onChange={(evento) => aoDigitado(evento)}
        placeholder={placeholder}
        value={valor}
        required={obrigatorio}
        type={tipo}
      />
    </div>
  );
};

export default Campo;
