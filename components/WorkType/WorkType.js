import React from 'react';
import './WorkType.css';

class WorkType extends React.Component {
   render() {
     const {
      src,
      title,
      description
     } = this.props;

      return (
        <div className="workType">
          <img src={src}/>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      );
   }
}

export default WorkType;
