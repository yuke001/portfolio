import styles from './ProjectsStyles.module.css';
import portal from '../../assets/JobPortal.jpg';
import blog from '../../assets/blog.png';
import ems from '../../assets/ems.png';
import ecomm from '../../assets/Ecommerce.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={portal}
          link="https://github.com/yuke001/Job-Portal"
          h3="Job Portal"
          p="Job Portal Website - JAVA - SPRING" 
        />
        <ProjectCard
          src={blog}
          link="https://github.com/yuke001/blogForge"
          h3="Blog Forge"
          p="Blog Website - MERN"
        />
        <ProjectCard
          src={ems}
          link="https://github.com/yuke001/Employee-Management-System"
          h3="Employee Management System"
          p="Employee Management System - Spring - React" 
        />
        <ProjectCard
          src={ecomm}
          link="https://github.com/yuke001/Ecommerce-MERN"
          h3="Ecommerce"
          p="Ecommerce Website - MERN"
        />
      </div>
      <br /> <br /> <br />
    </section>
  );
}

export default Projects;