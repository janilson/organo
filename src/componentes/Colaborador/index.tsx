import React from 'react';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

import IColaborador from '../../shared/interfaces/IColaborador';

interface ColaboradorProps {
    colaborador: IColaborador;
    corDeFundo: string;
    aoDeletar: (valor: number) => void;
    aoFavoritar: (valor: number) => void;
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {

    const favoritar =( ) => {
        aoFavoritar(colaborador.id);
    };

    return (<div className="colaborador">
        <AiFillCloseCircle
                    size={25}
                    className="deletar"
                    onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <AiFillHeart size={25} onClick={favoritar} />
                    : <AiOutlineHeart size={25} onClick={favoritar} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador;