import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import IColaborador from "./shared/interfaces/IColaborador";

const App = () => {

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57C278'
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA'
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        },
    ]);

    const inicial = [
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[5].nome
        },
    ];

    const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial);

    const deletarColaborador = (id: string) => {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    };

    const mudarCorDoTime = (cor: string, id: string) => {
        setTimes(times.map(time => {
                if (time.id === id) {
                    time.cor = cor;
                }

                return time;
            })
        );
    };

    const resolverFavorito = (id: string) => {
        setColaboradores(colaboradores.map(colaborador => {
            if (colaborador.id === id) {
                colaborador.favorito = !colaborador.favorito;
            }
            return colaborador;
        }));
    };

    const allTimes = (): string[] => {
        return times.map(time => time.nome);
    };

    return (
        <div>
            <Banner
                enderecoImagem="/imagens/banner.png"
                textoAlternativo="Logo do Organo"
            />
            <Formulario
                times={allTimes()}
                aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
                aoCadastrarTime={time => setTimes([...times, time])}
            />

            <section className="times">
                <h1>Minha organização</h1>
                {times.map((time, indice) => {
                    return (
                        <Time
                            key={indice}
                            time={time}
                            mudarCor={mudarCorDoTime}
                            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                            aoDeletar={deletarColaborador}
                            aoFavoritar={resolverFavorito}
                        />
                    )
                })}
            </section>
            <Rodape/>
        </div>
    );
};

export default App;
