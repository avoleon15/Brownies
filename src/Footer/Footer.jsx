import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import styles from "./Footer.module.css";


function Footer (){
    return(

        <footer className={styles.footer_page}>
            <div className={styles.main_box}>
            <h1>Brownie</h1>
            <ul>
                <li>Contactanos <h1><FaSquareWhatsapp /></h1> </li>
                <li>Instragram<h1><FaSquareInstagram /></h1></li>
            </ul>
            </div>
            <hr></hr>

            <p>&copy; Created by Alvaro Leon</p>
        </footer>

    );
}

export default Footer