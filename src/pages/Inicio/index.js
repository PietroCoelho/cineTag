import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner image="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='hollow-knight' capa='https://www.deviantart.com/nessemdesigns/art/The-Knight-Hollow-Knight-949816396https://i.pinimg.com/originals/c0/2b/e8/c02be84a3ae18f1b69e71c45ce26033a.png' />
            <Rodape />
        </>
    )
}

export default Inicio;