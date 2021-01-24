import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cardbg from '../src/assets/cardbg.png';
import reportWebVitals from './reportWebVitals';


// function Card(props){
//   const imgbg = {
//     backgroundImage : `url(${cardbg})`,
//     height: "100px",
//     width: "100px"
//   }
//   return (
//     <div className="container">
//       <h1 className="container-title">Editor's Picks</h1>
//       <div className="container-img" style={imgbg}></div>
//       <div className="container-card">
//         <div className="container-card-img"></div>
//         <div className="container-card-img-content">
//   <h5 className="container-card-img-content_title">{props.title}</h5>
//   <p className="container-card-img-content_subtitle">{props.subTitle}</p>
//         </div>
//       </div>
//     </div>
//   )
// }


function Card(props){
  return (
    <div className="container">
      <h4 className="container-title">Editor's Picks</h4>
      {/* <img alt="backgroundpage" src={props.img} className="container-img"></img> */}
      {/* <div style={{backgroundImage:`url(${props.img})`,height: "100px", width:"100px"}}></div> */}
      <div className="container-card">
        <div className="container-card-img" style={{backgroundImage:`url(${props.img})`}}></div>
        <div className="container-card-img-content">
        <h5 className="container-card-img-content_title">{props.title}</h5>
        <p className="container-card-img-content_subtitle">{props.subTitle}</p>
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Card img={cardbg} title="Gifts for Him" subTitle="For Valentine's Day"/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
