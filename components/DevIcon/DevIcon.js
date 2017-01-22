import React from 'react';
import './DevIcon.css'
import classNames from 'classnames';

class DevIcon extends React.Component {
   render() {
       const {
        mouseLeave,
        mouseOver,
        icon,
       } = this.props;


      const devIcon = classNames('devIcon' , icon);

      return (
        <i onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={devIcon}>
        </i>
      );
   }
}

export default DevIcon;
