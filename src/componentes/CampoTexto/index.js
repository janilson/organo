
import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.required} placeholder={props.placeholder} />
        </div>
    )
};

export default CampoTexto;