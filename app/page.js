// app/page.js

import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}><b>Welcome to My Cybersecurity World! 🔒</b></h1>
      <p>Hi! I&apos;m Hirunima Senarathna, a cybersecurity enthusiast and IT student with a passion for protecting digital spaces.</p>
      
      <Link href="/about" className={styles.portfolioLink}>Learn more about my journey</Link>

      <h2 className={styles.title}>My Portfolio</h2>
      <ul>
        <li>Cybersecurity Project 1: <a href="[Link]" className={styles.portfolioLink}>View Project</a> - An in-depth analysis of threat detection methods.</li>
        <li>Cybersecurity Project 2: <a href="[Link]" className={styles.portfolioLink}>View Project</a> - A research-based project on penetration testing tools.</li>
      </ul>

      <Link href="/contact" className={styles.portfolioLink}>Get in Touch</Link>
    </section>
  );
}



