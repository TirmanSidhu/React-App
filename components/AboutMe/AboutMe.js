import React from 'react';
import Skills from '../Skills/Skills';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import './AboutMe.css';

class AboutMe extends React.Component {

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
    if (isVisible('avatar')) {
      avatar.classList.add("rollIn");
    }
    if (isVisible('hi')) {
      hi.classList.add("rollIn");
    }
  }
      return (
        <div className="aboutPage">
          <ContentWrapper>
            <div className="introContainer">
              <img id="avatar" src="PNG/avatarTirman.png"/>
              <h1 id="hi"> Hi! </h1>
              <p>A thin film of acrylic paint will dry in 20 minutes, and you are left with a permanent smear. With more time the smear turns into an idea, and that idea evolves into a revolution. Before I was an engineer, I was an artist. What I bring to the table now is a unique perspective and thinking meant for innovation.
              </p>
          </div>
          </ContentWrapper>
  				<ContentWrapper>
  						<h1> My Tools! </h1>
  						<div className="skillContainer">
  							<img className="computerMe" src="PNG/Skills.png"/>
  							<div className="line"> </div>
  							<div className="imgScroll"></div>
  						</div>
              <Skills/>
          </ContentWrapper>
        </div>
      );
   }
}

export default AboutMe;
