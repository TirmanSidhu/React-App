import React from 'react';
import './Ipad.css';
import IpadContainer from '../IpadContainer/IpadContainer';

class Ipad extends React.Component {
	
	constructor(props) {
    super(props);
		
		this.phoneClick = this.phoneClick.bind(this);
		this.mailClick = this.mailClick.bind(this);
		this.lockClick = this.lockClick.bind(this);
    this.state = {
      phoneOpen: false,
			mailOpen: false
    };
  }
	phoneClick(event) {
		this.setState ({
			phoneOpen: !this.state.phoneOpen
		});
	}
	mailClick(event) {
		this.setState ({
			mailOpen: !this.state.mailOpen
		});
	}
	lockClick(event){
		if(this.state.phoneOpen == true || this.state.mailOpen == true) {
			this.setState ({
				mailOpen: false
			});
			this.setState ({
				phoneOpen: false
			});
		}
	}
	
   render() {
		 
		 //inline Ipad Svg
		 const ipad = <svg width="220px" height="320px">
					<g id="IPAD"><path d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z" id="bezel"></path><path d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z" id="bezel-2"></path><rect id="screen" fill="#FFFFFF" x="17" y="32" width="181.999" height="252.917"></rect><circle onClick={this.lockClick} id="lock" cx="108.021" cy="300.021" r="12"></circle><circle id="camera" cx="106.99" cy="16.99" r="2.99"></circle></g></svg>;
					
			const {scrollTop} = this.props;
		 	const {phoneOpen, mailOpen} = this.state;
		 
      return (
		  <div className="ipad">
				{ipad}
				<IpadContainer 
					phoneClick={this.phoneClick} 
					scrollTop={scrollTop}
				  mailClick={this.mailClick}
				  phoneOpen={phoneOpen}
				  mailOpen={mailOpen}
				/>
			</div>
     );
   }
}

export default Ipad;


