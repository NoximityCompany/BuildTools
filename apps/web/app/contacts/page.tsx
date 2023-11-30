import Navbar from "../components/navbar";
import styles from "../style/home.module.scss";


export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            <Navbar />
            <h1>contacts</h1>
        </main>
    );
}