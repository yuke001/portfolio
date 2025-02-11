import styles from './LinkStyles.module.css' ;

// LinkStyles.module.css

// import styles from './FooterStyles.module.css';
function Links() {
  return (
    <section id="links" className={styles.container}>
      <h2>Connect with Me</h2>
      <ul className={styles.linkList}>
        <li>
          <a href="https://github.com/yuke001" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yukenthiran-s-73a278244/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:yukenthirans2018@gmail.com">Email</a>
        </li>
      </ul>
    </section>
  );
}

export default Links;
