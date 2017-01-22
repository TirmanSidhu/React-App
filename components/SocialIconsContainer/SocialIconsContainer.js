import React from 'react';
import './SocialIconsContainer.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import classNames from 'classnames';

class SocialIconsContainer extends React.Component {
   render() {
   	   const icons = {
					 phone: {
							 png: 'PNG/phone.png'
					 },
					 gmail: {
							 png: 'PNG/gmail.png'
					 },
					 github: {
							 png: 'PNG/github.png',
							 link: 'https://github.com/TirmanSidhu'
					 },
					 linkedin: {
						 png: 'PNG/linkedin.png',
						 link: 'https://ca.linkedin.com/in/tirman-sidhu-624a9311b'
					 }
	    }
			const {phoneClick, mailClick, scrollTop} = this.props;
		 	const socialIconsContainer = classNames({'wiggle': scrollTop>3240}, 'socialIconsContainer');
      return (
	   <div className={socialIconsContainer}>

					<SocialIcons phoneClick={phoneClick} src={icons.phone.png}/>

					<SocialIcons mailClick={mailClick} src={icons.gmail.png}/>

					<SocialIcons href={icons.github.link} src={icons.github.png}/>

					<SocialIcons href={icons.linkedin.link} src={icons.linkedin.png}/>

	   </div>
      );
   }
}

export default SocialIconsContainer;
