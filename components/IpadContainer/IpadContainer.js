import React from 'react';
import SocialIconsContainer from '../SocialIconsContainer/SocialIconsContainer';
import './IpadContainer.css'
import classNames from 'classnames';

class IpadContainer extends React.Component {

   render() {
     var isScrolling = false;

    window.addEventListener("scroll", throttleScroll, false);

    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    function isVisible(el) {
      let elementBoundary = document.getElementById(el).getBoundingClientRect();

      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;

      return ((top >= 0) && (bottom <= window.innerHeight));
   }

   function scrolling(e) {
    if (isVisible('avatarTirman')) {
      avatarTirman.classList.add("rotate");
    }
    if (isVisible('clickMe')) {
      clickMe.classList.add("rotate");
    }
  }


		 const {
			 scrollTop,
			 phoneClick,
			 mailClick,
		 	 phoneOpen,
			 mailOpen,
		 } = this.props;

		 const phonePopup = classNames({'remove':!phoneOpen}, 'phonePopup', {'zoomIn':phoneOpen}, {'zoomOut':!phoneOpen});
		 const phoneItems = classNames({'remove':!phoneOpen});
		 const wiggle = classNames({'wiggle': scrollTop>3240});
		 const mailPopup = classNames({'remove':!mailOpen}, 'phonePopup', {'zoomIn':mailOpen}, {'zoomOut':!mailOpen});
		 const mailItems = classNames({'remove':!mailOpen});

      return (
				<div className="ipadContainer">
					<img id="avatarTirman" src="PNG/avatarTirman.png"/>
					<h2 id="clickMe">Click Me!</h2>
					<SocialIconsContainer scrollTop={scrollTop} mailClick={mailClick} phoneClick={phoneClick}/>
					<div className={phonePopup}>
						<img className={phoneItems} src="PNG/phone.png"/>
						<svg onClick={phoneClick} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
						<h1 className={phoneItems}>Contact Me! <br/> (647)-864-0648 </h1>
					</div>
					<div className={mailPopup}>
						<img className={mailItems} src="PNG/gmail.png"/>
						<svg onClick={mailClick} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
						<h1 className={mailItems}>Email Me! <br/> tirmansidhu@gmail.com </h1>
					</div>
				</div>

      );
   }
}

export default IpadContainer;
