import React from 'react';
import Navbar from '../Navbar/Navbar';
import classNames from 'classnames';
import './HomeCity.css';

class HomeCity extends React.Component {
   render() {

		function parallax() {
			 var background = document.getElementById('background');
			 background.style.top = -(window.pageYOffset/5)+280+'px';

			 var buildings = document.getElementById('buildings');
			 buildings.style.top = -(window.pageYOffset/3)+280+'px';

			 var clouds = document.getElementById('clouds');
			 clouds.style.top = -(window.pageYOffset/2)+280+'px';

		}
		window.addEventListener("scroll", parallax, false);

		const {scrollTop} = this.props;

		const hidelayer = classNames({'hide':scrollTop>2000});
      return (
        <div className="homeCity">
					<h1 className={hidelayer}>I'm Tirman</h1>
					<h2>An Analytical Artist</h2>
					<img id="background" className={hidelayer} src="MyCity/background.svg"/>
					<img id="buildings" src="MyCity/BuildingsTwo.svg"/>
					<img id="clouds" src="MyCity/Clouds.svg"/>
        </div>
      );
   }
}

export default HomeCity;
