import hexToRgba from "hex-to-rgba";
import "./Time.css";

import Colaborador from "../Colaborador";

import IColaborador from "../../shared/interfaces/IColaborador";
import ITime from "../../shared/interfaces/ITime";

interface TimeProps {
    time: ITime;
    colaboradores: Array<IColaborador>;
    mudarCor: (valor: string, id: string) => void;
    aoFavoritar: (id: string) => void;
    aoDeletar: (id: string) => void;
}

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}: TimeProps) => {
    return (
        colaboradores.length > 0 ? (
            <section
                className="time"
                style={{
                    backgroundImage: "url(/imagens/fundo.png)",
                    backgroundColor: hexToRgba(time.cor, "0.6"),
                }}
            >
                <input
                    value={time.cor}
                    type="color"
                    className="input-cor"
                    onChange={(event) => mudarCor(event.target.value, time.id)}
                />

                <h3 style={{borderColor: time.cor}}>{time.nome}</h3>

                <div className="colaboradores">
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        );
                    })}
                </div>
            </section>
        ) : <></>
    );
};

export default Time;