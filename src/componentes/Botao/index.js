import "./Botao.css";

const Botao = (props) => {
    return (
        <button className="botao" type={props.type||"submit"}>
            {props.children}
        </button>
    )
};

export default Botao;