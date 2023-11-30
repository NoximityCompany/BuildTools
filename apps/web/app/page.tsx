import styles from "../app/style/home.module.scss";
import Navbar from "./components/navbar";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>home</h1>
    </main>
  );
}
