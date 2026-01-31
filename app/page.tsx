
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.overlay}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>You can find everything you want in our catalog</p>
        <Link className={styles.link} href="/catalog">View Now</Link>
        </div>
      </main>
  );
}
