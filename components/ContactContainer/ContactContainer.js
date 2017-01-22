import React from 'react';
import './ContactContainer.css'
import Ipad from '../Ipad/Ipad';

class ContactContainer extends React.Component {
   render() {
		 	const {scrollTop} = this.props;

      return (
				<div className="contactContainer">
					<Ipad scrollTop={scrollTop}/>
					<div className="farewell">
						<h1> Keep in Touch! </h1>
						<p className="hideMobile">
              I love to create fun, elegant and immersive user experiences.
              <br/>
              Enjoyed exploring my website? Feel free to reach out to me.
						</p>
            <div className="resume">
              <a href="PNG/Resume.pdf" target="_blank">
                <img src="PNG/resume.png"/>
                <p>Resume</p>
              </a>
            </div>
					</div>
				</div>
      );
   }
}

export default ContactContainer;
