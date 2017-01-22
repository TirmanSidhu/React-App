import React from 'react';
import ContactContainer from '../ContactContainer/ContactContainer';
import Navbar from '../Navbar/Navbar';
import './Variables.css';
import HomeCity from '../HomeCity/HomeCity';
import AboutMe from '../AboutMe/AboutMe';
import EndBlock from '../EndBlock/EndBlock';
import './Variables.css';

class HomePage extends React.Component {
   render() {

		 const {
			 isHidden,
			 scrollTop,
		 } = this.props;

      return (
        <div>
					<HomeCity scrollTop={scrollTop}/>
					<AboutMe/>
		  		<ContactContainer scrollTop={scrollTop}/>
          <EndBlock/>
        </div>
      );
   }
}

export default HomePage;
