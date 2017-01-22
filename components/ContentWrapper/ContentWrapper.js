import React from 'react';
import './ContentWrapper.css';

class ContentWrapper extends React.Component {
   render() {
      return (
        <div className="contentWrapper">
          {this.props.children}
        </div>
      );
   }
}

export default ContentWrapper;
