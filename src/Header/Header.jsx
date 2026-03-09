import styles from "./Header.module.css";

function Header (){

    const image_source = new URL(`../assets/BackgroundBrownie.png`, import.meta.url).href


    return(

        <header className={styles.header_style}>
            <img src = {image_source} alt="Main image background of Brownies"></img>
            <p>Brownies caceros en Guatemala. Establecidos en 2025.</p>
        </header>
    );
}

export default Header