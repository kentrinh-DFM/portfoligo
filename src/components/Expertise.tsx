import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart  } from '@fortawesome/free-solid-svg-icons/faBarChart';
import { faLaptop  } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Tableau",
    "PowerBI",
    "Spotfire",
    "Python",
    "AWS Cloud",
    "IBM Cloud Pak for Data",
    "HTML",
    "CSS3",
    "SASS",
    "SQL",
    "TypeScript",
    "JavaScript",
    "Geospatial Visualisation"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "AWS",
    "MS Power Automate",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "DeepSeek",
    "Machine Learning"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
               

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Automation</h3>
                    <p>I've improved improve businesses processes by automating repetitive tasks and saving many man-hours.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                 <div className="skill">
                    <FontAwesomeIcon icon={faBarChart } size="3x"/>
                    <h3>Decision Making Dashboards</h3>
                    <p>I've developed comprehensive dashboards and reports that provided actionable insights, enabling key stakeholders to track KPIs and optimize performance either by default or customised visualisation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptop} size="3x"/>
                    <h3>GenAI & Machine Learning</h3>
                    <p>I've stayed relevant in the market by learning new AI trend and apply to relevant projects where possible.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;