import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avartar from '../assets/images/Ken Trinh.jpg';
import '../assets/styles/Main.scss';
import ReactPlayer from 'react-player';

function Main() {

    return (
        <div className="container">
      <div className="about-section">
        
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/ken-trinh/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1></h1>
          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/ken-trinh/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

        </div>
            <div className="image-wrapper">
            <ReactPlayer url='https://youtube.com/shorts/Skv1i6F1cHw' 
              light={true}
              loop={true}
              controls={true}
            />
          </div>
      </div>
    </div>
    );
}

export default Main;