import styles from "./Navbar.module.css";

function Navbar (){
    return(

        <nav >
            <ul className={styles.navbar}>
                <li><a>Inicio</a></li>
                <li><a>A comer!</a></li>
                <li><a>Contactanos</a></li>
            </ul>
        </nav>
    );
}

export default Navbar