import React from "react";
import autoc from '../assets/images/Automation Prompt.gif';
import sysint from '../assets/images/Systems Integration.png';
import cusvis from '../assets/images/customvisualisation.png';
import planning from '../assets/images/Scenario Planning Tool.gif';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={autoc} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Automation via Prompt</h2>
                <p>Developed an automated workflow that allows business users to use command to allocate works to relevant engineers using Pronto XML API, Power Automate and AWS API. The schedules will be sent to tenants via integration with an Sinch SMS services.</p>
            </div>
            <div className="project">
               <img src={sysint} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Camp System Integration</h2>
                <p>Developed integration solutions for camp booking activities, incorporating both external and internal systems. Additionally, created libraries of reusable functionalities to support code efficiency and consistency. Finally, enhanced system performance by developing a room optimization process.</p>
            </div>
            <div className="project">
                <img src={cusvis} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Custom Visualisation</h2>
                <p>Developed an custom visualisation for monitoring mining underground asset using PowerBI and Typescript, and published to internal marketplace.</p>
            </div>
            <div className="project">
                <img src={planning} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Full stack planning tools</h2>
                <p>This is an scenario budget planning tools for business users using MEAN stack.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;