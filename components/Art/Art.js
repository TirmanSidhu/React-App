import React from 'react';
import './Art.css';
import ArtTout from '../ArtTout/ArtTout';
import ReactTooltip from 'react-tooltip';

class Art extends React.Component {

  constructor(props) {
    super(props);
    this.fwdClick = this.fwdClick.bind(this);
    this.bwdClick = this.bwdClick.bind(this);
    this.state = {
      count: 0,
      increment: false,
      decrement: false,
    };
  }

  fwdClick (event) {
    if (this.state.count < 12) {
      this.setState({
        count: this.state.count + 1
      });
    }
    else {
      this.setState({
        count: 0
      });
    }
    this.setState ({
      increment: !this.state.increment
    });
  }

  bwdClick (event) {
    if(this.state.count > 0){
        this.setState({
        count: this.state.count - 1
      });
    }
    else {
      this.setState ({
        count: 12
      });
    }
  }

  setCount (num) {
    this.setState({
      count: num
    })
  }

  render() {
    const artWork = [
        {key:0, src: 'Paintings/Abstract.jpg', title:"Who's Mans", medium:'Acrylic', style:'Abstract Realism', dimensions:'36 x 12'},
        {key:1, src: 'Paintings/Born.jpg', title:'Greatest Boon of All', medium:'Acrylic', style:'Abstract Realism', dimensions:'60 x 48'},
        {key:2, src: 'Paintings/Portrait.jpg', title:'Catharsis: Release', medium:'Pencil', style:'Realism', dimensions:'36 x 24'},
        {key:3, src: 'Paintings/WaterColor.jpg', title:'Catharsis: Change', medium:'Watercolor', style:'Abstract Realism', dimensions:'36 x 24'},
        {key:4, src: 'Paintings/PortraitAcrylic.jpg', title:'Catharsis: Relief', medium:'Acrylic', style:'Realism', dimensions:'36 x 24'},
        {key:5, src: 'Paintings/River.jpg', title:'Old Shoreline', medium:'Acrylic', style:'Realism', dimensions:'36 x 16'},
        {key:6, src: 'Paintings/Autumn.jpg', title:'The Circle: Detach', medium:'Acrylic', style:'Realism', dimensions:'48 X 36'},
        {key:7, src: 'Paintings/Winter1.jpg', title:'The Circle: Divide', medium:'Acrylic', style:'Realism', dimensions:'48 X 36'},
        {key:8, src: 'Paintings/Winter2.jpg', title:'The Circle: Tear', medium:'Acrylic', style:'Realism', dimensions:'48 X 36'},
        {key:9, src: 'Paintings/Spring.jpg', title:'The Circle: Append', medium:'Acrylic', style:'Realism', dimensions:'48 X 36'},
        {key:10, src: 'Paintings/Summer.jpg', title:'The Circle: Bind', medium:'Acrylic', style:'Realism', dimensions:'48 X 36'},
        {key:11, src: 'Paintings/Sunset.jpg', title:'Pastel Set', medium:'Acrylic', style:'Realism', dimensions:'72 x 60'},
        {key:12, src: 'Paintings/Tanya.jpg', title:'Sister', medium:'Acrylic', style:'Abstract Realism', dimensions:'72 x 48'},
    ].map((art) =>
    <ArtTout
      className="paintings"
      count={this.state.count}
      src={art.src}
      key={art.key}
      title={art.title}
      animation={art.animation}
      medium={art.medium}
      style={art.style}
      dimensions={art.dimensions}
    />);

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

    const {
      count
    } = this.state;

  const pagination = [
    {key:0, title:"Who's Mans", color:'#c82b43',},
    {key:1, title:'Greatest Boon of All', color:'#232832',},
    {key:2, title:'Catharsis: Release', color:'#6e674e',},
    {key:3, title:'Catharsis: Change', color:'#a64e5d',},
    {key:4, title:'Catharsis: Relief', color:'#9c7161',},
    {key:5, title:'Old Shoreline', color:'#763a1e',},
    {key:6, title:'The Circle: Detach', color:'#391715',},
    {key:7, title:'The Circle: Divide', color:'#26394b',},
    {key:8, title:'The Circle: Tear', color:'#525b54',},
    {key:9, title:'The Circle: Append', color:'#616741',},
    {key:10, title:'The Circle: Bind', color:'#644044',},
    {key:11, title:'Pastel Set', color:'#331a19',},
    {key:12, title:'Sister', color:'#8a101b',},
  ].map((dot) => <i key={dot.key} onClick={() => this.setCount(dot.key)} className={dot.key===count ? 'isActive' : null} style={{color: dot.color, borderColor: dot.color}} data-tip={dot.title}>palette</i>);

   return (
     <div className="art">
       <div className="pageDots">
           <ReactTooltip place='right' type="dark" effect="solid"/>
           {pagination}
       </div>
       <div className="paintingSlider">
          {artWork[count]}
          <div className="scrollButtons">
            <div onClick={this.fwdClick} style={{backgroundColor: nextColor[count]}} className="nextButton"><i>arrow_drop_up</i></div>
            <div onClick={this.bwdClick} style={{backgroundColor: prevColor[count]}} className="prevButton"><i>arrow_drop_down</i></div>
          </div>
        </div>
     </div>
      );
   }
}

export default Art;
