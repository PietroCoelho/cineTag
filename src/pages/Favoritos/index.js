import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from "components/Card";
import styles from "./Favoritos.module.css"

const Favoritos = () => {
    return (
        <>
            <Banner image="favoritos" />
            <Titulo>
                <h1>Lista de favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="2" titulo="teste" capa="https://thecatapi.com/api/images/get?format=src&type=png" />
            </section>
        </>
    )
}

export default Favoritos