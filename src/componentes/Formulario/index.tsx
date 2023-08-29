import React from "react";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import IColaborador from "../../shared/interfaces/IColaborador";
import ITime from "../../shared/interfaces/ITime";

interface FormularioProps {
    aoCadastrar: (colaborador: IColaborador) => void;
    aoCadastrarTime: (time: ITime) => void;
    times: string[];
}

const Formulario = ({aoCadastrar, aoCadastrarTime, times}: FormularioProps) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [data, setData] = useState("");

    const [nomeTime, setNomeTime] = useState("");
    const [cor, setCor] = useState("");

    const aoSubmeter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            favorito: false,
            data
        });

        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
        setData("");
    };

    const aoSubmeterTime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        aoCadastrarTime({
            id: uuidv4(),
            nome: nomeTime,
            cor: cor
        });

        setNomeTime("");
        setCor("");
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    aoAlterado={(valor) => setNome(valor)}
                    placeholder="Digite seu nome"
                    label="Nome"
                    valor={nome}
                    obrigatorio={true}
                />
                <Campo
                    aoAlterado={(valor) => setCargo(valor)}
                    placeholder="Digite seu cargo"
                    label="Cargo"
                    valor={cargo}
                    obrigatorio={true}
                />
                <Campo
                    aoAlterado={(valor) => setImagem(valor)}
                    placeholder="Informe o endereço da imagem"
                    label="Imagem"
                />
                <Campo
                    aoAlterado={(valor) => setData(valor)}
                    placeholder=""
                    label="Data"
                    valor={data}
                    obrigatorio={true}
                    tipo="date"
                />
                <ListaSuspensa
                    aoAlterado={(valor) => setTime(valor)}
                    label="Times"
                    obrigatorio={true}
                    items={times}
                    valor={time}
                />
                <Botao><>Criar card</></Botao>
            </form>

            <form className="formulario" onSubmit={aoSubmeterTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    aoAlterado={(valor) => setNomeTime(valor)}
                    placeholder="Digite o nome do time"
                    label="Nome"
                    valor={nomeTime}
                    obrigatorio={true}
                />
                <Campo
                    aoAlterado={(valor) => setCor(valor)}
                    placeholder="Digite a cor do time"
                    label="Cor"
                    valor={cor}
                    obrigatorio={true}
                    tipo="color"
                />
                <Botao><>Criar novo time</></Botao>
            </form>
        </section>
    );
};

export default Formulario;
