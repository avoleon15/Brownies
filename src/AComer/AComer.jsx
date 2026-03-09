import styles from "./AComer.module.css";

function AComer (props){
    const image_source = new URL(`../assets/${props.image}YBrownie.png`, import.meta.url).href;
    const image_alt = "A brownie being warmed in a microwave";

    return(
        <section className={styles.AComer}>
            <div className={styles.infoBox}>
                <h2>{props.title}</h2>
                <p>{props.description1}</p>
                <p>{props.description2}</p>
            </div>
            <img src={image_source} alt={image_alt} className={styles.image}></img>
        </section>
    );
}

export default AComer