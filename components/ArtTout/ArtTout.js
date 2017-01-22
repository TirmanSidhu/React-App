import React from 'react';
import './ArtTout.css';
import classNames from 'classNames';


class ArtTout extends React.Component {

  render() {

   const {
     title,
     medium,
     style,
     dimensions,
     src,
     animation
   } = this.props;

   const prevColor = [
     '#c82b43',
     '#232832',
     '#6e674e',
     '#a64e5d',
     '#9c7161',
     '#763a1e',
     '#391715',
     '#26394b',
     '#525b54',
     '#616741',
     '#644044',
     '#331a19',
     '#8a101b',
   ];
   const nextColor = [
     '#efc900',
     '#d9ad66',
     '#c3b8a6',
     '#d7afb2',
     '#c5aa93',
     '#385c8d',
     '#933224',
     '#96b2ad',
     '#c9d4d1',
     '#c2a88f',
     '#a09130',
     '#c68886',
     '#ab780b',
   ];
   const {count} = this.props;

   const containerStyle = {
     borderColor: prevColor[count]
   };
   const titleStyle = {
     color: prevColor[count]
   };
   return (
     <div className="artTout" style={{borderColor: nextColor[count]}}>
       <img className="paintings" src={src}/>
       <div className="contentContainer" style={containerStyle}>
         <h2 style={titleStyle}>{title}</h2>
         <div className="mobileRow">
           <p>Medium: {medium}</p>
           <p>Style: {style}</p>
           <p>Dimension: {dimensions} inches</p>
         </div>
       </div>
     </div>
      );
   }
}

export default ArtTout;
