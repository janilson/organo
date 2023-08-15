import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome]     = useState('');
    const [cargo, setCargo]   = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime]     = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    value={nome} 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    aoAlterado={value => setNome(value)}
                />
                <CampoTexto 
                    value={cargo} 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    aoAlterado={value => setCargo(value)}
                />
                <CampoTexto 
                    value={imagem} 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    aoAlterado={value => setImagem(value)}
                />
                <ListaSuspensa 
                    value={time}
                    required={true} 
                    label="Times" 
                    itens={props.times}
                    aoAlterado={value => setTime(value)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;