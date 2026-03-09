import AComer from "./AComer/AComer.jsx";
import './App.css';
import styles from './App.module.css';
import Card from "./Card/Card.jsx";
import { informations } from "./data/information.js";
import { items } from "./data/items.js";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

function App() {

  return (
    <>
    <Header />

    <section className={styles.cardContainer}>
      {items.map(item => <Card key={item.id} image={item.image} name={item.name} price={item.price} description={item.description} />)}
    </section>

    <section className={styles.AComerContainer}>
      {informations.map(information => <AComer key={information.id} title={information.title} image={information.image} description1={information.description1} description2={information.description2} />)}
    </section>

    <Footer />
    </>
  );
}

export default App
