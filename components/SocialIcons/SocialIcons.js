import React from 'react';
import './SocialIcons.css'

class SocialIcons extends React.Component {
   render() {
	   const {
		   href,
		   src,
			 phoneClick,
			 mailClick
	   } = this.props;

      return (
			 <a onClick={mailClick} className="socialIcons" href={href} target="_blank">
				<img onClick={phoneClick} src={src}/>
			 </a>
      );
   }
}

export default SocialIcons;
