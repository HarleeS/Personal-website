// app/contact/page.js

import styles from '../../styles/Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <p>If you&apos;d like to get in touch, please reach out via the following:</p>
      <ul>
        <li>Email: <a href="mailto:hirunimasenarathna8@gmail.com" className={styles.contactLink}>hirunimasenarathna8@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/hirunima-senarathna/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/hirunimasenarathna8@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>My GitHub</a></li>
      </ul>
    </div>
  );
}


