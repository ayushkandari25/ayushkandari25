import React from 'react';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
    SiJavascript, 
    SiReact, 
    SiMongodb,
    SiPython,
    SiMysql,

} from 'react-icons/si';
import "../Styles/Skills.css";


const Skills = ({ darkMode }) => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E44D26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#264DE4' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Mongo DB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#CB3837' },
        { name: 'Python', icon: <SiPython />, color: '#F05032' }
    ];
    return (
        <>
        <div id="skills" className={`skills-container ${darkMode ? 'dark' : ''}`}>
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <div className="skill-name" style={{ color: skill.color }}>
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <hr className="thin-line" />
        </>
    );
};

export default Skills;