import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {

    const css = {backgroundColor : props.corSecundaria};
    const cssH3 = {borderColor : props.corPrimaria};

    return (
        (props.colaboradores.length > 0) ?
            <section 
                className="time" 
                style={css}>
                <h3 style={cssH3}>{props.nome}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map(colaborador => {
                            return(
                                <Colaborador 
                                    key={colaborador.nome}
                                    corPrimaria={props.corPrimaria} 
                                    nome={colaborador.nome}
                                    cargo={colaborador.cargo}
                                    imagem={colaborador.imagem}
                                />
                            )
                        }
                    )}
                </div>
            </section> : ''
    )
};

export default Time;