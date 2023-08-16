import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({aoCadastrar, aoCadastrarTime, times}) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [cor, setCor] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time, 
            favorito: false
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    const aoSubmeterTime = (evento) => {
        evento.preventDefault()
        aoCadastrarTime({
            id: uuidv4(),
            nome: nomeTime,
            cor
        });

        setNomeTime('');
        setCor('');
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Times"
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Criar card" />
            </form>

            <form className="formulario" onSubmit={aoSubmeterTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio={true}
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}/>
                <Botao texto="Criar novo time" />
            </form>
        </section>
    )
};

export default Formulario;