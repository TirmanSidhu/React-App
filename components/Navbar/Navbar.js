import React from 'react';
import './Navbar.css'
import classNames from 'classNames';
import {Link, IndexLink} from "react-router";

class Navbar extends React.Component {

	render () {

		const {
			scrollTop,
			isHidden,
			history,
		} = this.props;

		const hiddenClass = classNames({'sleep':isHidden}, 'navbar', {'shrunkBar': scrollTop > 500});

      return (
			 <div className={hiddenClass}>
					<img src="PNG/avatarTirman.png"/>
					<div className="sections">
						<IndexLink activeClassName="active" to="/"><h3>About</h3></IndexLink>
						<Link activeClassName="active" to="work"><h3>Work</h3></Link>
						<Link activeClassName="active" to="art"><h3>Art</h3></Link>
					</div>
			 </div>
      );
   }
}

export default Navbar;
