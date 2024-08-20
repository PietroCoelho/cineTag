import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
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
            <Rodape />
        </>
    )
}

export default Inicio;