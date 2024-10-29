// app/about/page.js

import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}><b>About Me</b></h1>
      <p>
        <b>Hello! 💻</b> I&apos;m Hirunima Senarathna, a cybersecurity enthusiast and an undergraduate studying Information Technology at the University of Sri Jayewardenepura.
        I am passionate about safeguarding digital environments and advancing my knowledge in cybersecurity to make a meaningful impact in the field.
      </p>

      <h2 className={styles.title}><b>Specializations</b></h2>
      <p>Cybersecurity and IT Skills:</p>
      <ul>
        <li>Cybersecurity: Threat analysis, penetration testing, and network security</li>
        <li>Programming Skills: Proficient in Python and Java for security applications</li>
        <li>Problem-Solving: Analytical skills to devise effective security solutions</li>
        <li>Attention to Detail: Ensuring thorough security assessments</li>
        <li>Continuous Learning: Staying updated on the latest cybersecurity trends and technologies</li>
      </ul>
    </section>
  );
}

