import React from 'react';
import './Work.css';
import WorkTout from '../WorkTout/WorkTout';
import EndBlock from '../EndBlock/EndBlock';
import ContactContainer from '../ContactContainer/ContactContainer';
import WorkType from '../WorkType/WorkType';

class Work extends React.Component {
   render() {
      return (
         <div className="workPage">
           <img className="workCity" src="MyCity/WorkCity.svg"/>
           <WorkType
             src={"PNG/Project.png"}
             title={'Projects'}
             description={'The fun stuff...'}
           />
           <WorkTout src='WorkPics/MyWebsite.png' primary='#f9e0d7' secondary='#864025' tertiary='white' title='My React App'>
             <p> A Single Page Application created from scratch using React.js, PostCSS, WebPack, React-Router and NPM </p>
             <p> Utilizes the best practises for React.js and written in ES6 via Babel </p>
             <p> Uses PostCSS's CSSNext and Auto Prefixer plugins to write CSS that is compatible with multiple browsers</p>
             <p> Created the vector drawings from scratch using Adobe Illustrator </p>
             <p> The website features an original design and theme created using the best PostCSS practises</p>
             <p> Completely responsive website for all viewport widths created with CSS3 Media Queries and flexbox</p>
           </WorkTout>
           <WorkTout src='WorkPics/GPSApp.png' primary='#f6efde' secondary='#757575' tertiary='#cbe6a3' title='Hand Held GPS App'>
             <p> An app that helps a user travel the fastest route on a map </p>
             <p> Uses a finite state machine to calculate the user's steps on a map </p>
             <p> Takes in the users direction from the north pole using their android phone's event handlers </p>
             <p> Displays and updates information in real time to the user </p>
             <p> Written in Java in Android Studio using best practises and Object Oriented Programming </p>
           </WorkTout>
           <WorkTout src='WorkPics/TaskList.JPG' primary='White' secondary='black' tertiary='#d9534f' title='Task List App'>
             <p> Built Using the MeantStack: MongoDB, Express, Angular 2, Node.js </p>
             <p> Completely written from scratch in best MeantStack practises</p>
             <p> Stores the users' tasks and their status in a sandbox environment(mLab) using Mongodb and Node.js</p>
             <p> Front-End is created using Angular 2 components and Bootstrap CSS managed through Bower</p>
           </WorkTout>
           <WorkType
             src={"PNG/Work.png"}
             title={'Work'}
             description={'The past experiences that have shaped me...'}
           />
           <WorkTout src='WorkPics/Climax.jpeg' primary='#0083ce' secondary='white' tertiary='black' title='Climax Media'>
             <p> Worked in an Agile, 2 week sprints, environment for large scale projects such as Acura.ca, Honda.ca, PowerEquipment.Honda.ca, atvsxs.honda.ca redesigns</p>
             <p> Worked on creating the front-end of Acura.ca using HTML5, PostCSS and React.js </p>
             <p> Created the static view for Honda Power Equipment with  HTML5, PostCSS and React.js </p>
             <p> Added additional requirements to Honda.ca as specified by Honda using HTML5, SASS, Jquery </p>
             <p> Created a responsive dealer locator page for atvsxs.honda.ca using HTML5 and SASS </p>
             <div className="climaxProject">
               <img src="WorkPics/Acura.png"/>
               <img src="WorkPics/honda.png"/>
               <img src="WorkPics/PowerEquipment.jpg"/>
             </div>
           </WorkTout>
           <WorkTout src='WorkPics/CanadianTire.png' primary='#17a74a' secondary='white' tertiary='#ed2626' title='Canadian Tire'>
             <p> Developed professional communication skills by consistently working with executives in a large corporate environment</p>
             <p> Prioritized and managed projects and tasks depending on priority and scale</p>
             <p> Resolved over 500 software and hardware issues with efficiency and quality</p>
             <p> Received multiple recognition emails from executives for outputting extraordinary work</p>
             <p> Utilized critical thinking and analytical skills to provide solutions to tasks and projects</p>
           </WorkTout>
           <ContactContainer/>
           <EndBlock/>
         </div>
      );
   }
}

export default Work;
