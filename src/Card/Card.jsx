import styles from "./Card.module.css";

function Card(props){

    const image_source = new URL(`../assets/${props.image}Brownie.png`, import.meta.url).href

    const image_alt = props.image + " Brownie Image"

    return(
        <div className={styles.card}>
            <img src={image_source} alt={image_alt}></img>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h4>Q{props.price}.00</h4>
        </div>
    );

}

export default Card