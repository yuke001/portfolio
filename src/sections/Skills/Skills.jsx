import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            
            <div className={styles.skillList}>
                {/* Programming Languages */}
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="SQL" />
            </div>
            <hr />
            <div className={styles.skillList}>
                {/* Web Development */}
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="Bootstrap 5" />
            </div>
            <hr />
            <div className={styles.skillList}>
                {/* Frameworks/Libraries */}
                <SkillList src={checkMarkIcon} skill="Spring Boot" />
                <SkillList src={checkMarkIcon} skill="Spring MVC" />
                <SkillList src={checkMarkIcon} skill="Hibernate" />
                <SkillList src={checkMarkIcon} skill="Servlet" />
                <SkillList src={checkMarkIcon} skill="React.js" />
                <SkillList src={checkMarkIcon} skill="Vite.js" />
                <SkillList src={checkMarkIcon} skill="Node.js" />
                <SkillList src={checkMarkIcon} skill="Express.js" />
            </div>
            <hr />
            <div className={styles.skillList}>
                {/* Databases */}
                <SkillList src={checkMarkIcon} skill="MongoDB" />
                <SkillList src={checkMarkIcon} skill="MySQL" />
            </div>
            <hr />
            <div className={styles.skillList}>
                {/* Tools */}
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="GitHub" />
                <SkillList src={checkMarkIcon} skill="Visual Studio Code (VS Code)" />
            </div>

            <br /> <br /> <br />
        </section>
        
    );
}

export default Skills;