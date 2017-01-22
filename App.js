import React from 'react';
import HomePage from './././components/HomePage/HomePage';
import Navbar from './././components/Navbar/Navbar';

class App extends React.Component {

  constructor(props) {
    super(props);

   this.onScroll = this.handleScroll.bind(this);

    this.state = {
      isHidden: false,
     scrollTop: 0
    };
  }

 componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

 handleScroll(event) {

   const delta = this.state.scrollTop-window.pageYOffset;
    const minScroll = 2;

    if(delta > minScroll) {
      this.setState({
        isHidden: false
      });
    }
    if(delta < -minScroll){
      this.setState({
        isHidden: true
      });
    }

    const srcEl = event.srcElement || event.target;
    const body = srcEl.body || document.body;

    this.setState(() => {
      return {
        scrollTop: body.scrollTop
      }
    });
  }

  render() {

    const {
      isHidden,
      scrollTop,
    } = this.state;

    return (
       <div>
         <Navbar isHidden={isHidden} scrollTop={scrollTop}/>
         {React.cloneElement(this.props.children, { isHidden: isHidden, scrollTop: scrollTop })}
       </div>
    );
  }
}

export default App;
