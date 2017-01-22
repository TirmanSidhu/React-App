import React from 'react';
import './WorkTout.css';

class WorkTout extends React.Component {
   render() {
     const {
       src,
       primary,
       secondary,
       tertiary,
       title,
       children
     } = this.props;

      return (
         <div className="workTout" style={{background: primary}}>
           <img src={src} style={{borderColor: tertiary}}/>
           <div className="workDescription" style={{color: secondary}}>
             <h1>{title}</h1>
               {children}
           </div>
         </div>
      );
   }
}

export default WorkTout;
