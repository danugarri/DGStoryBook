import React from "react";
import './Spinner.css';
import PropTypes from 'prop-types';


export const Spinner = (props) => {
    const{colorFigure1,colorFigure2,customSize,position,insideColor} = props;
    const small= customSize === 'small';
    const medium= customSize==='medium';
    const loaderSize= small ? {widthHeight:'30px',loaderMargin:' 0 -40px'} : medium ? {widthHeight:'40px',loaderMargin:' 0 -50px'} :{widthHeight:'60px',loaderMargin:' 0 -70px'}
    const { widthHeight,loaderMargin} =loaderSize
    const animationColor= 'white';
    const insideLoaderColor = insideColor==='white' ? 'white':  insideColor==='none'? 'none' : null;
    //accessing the styleSheets array
    const styleSheet = document.styleSheets[1];
    console.log(styleSheet)
    //inserting the wanted style 
    // transition color for the spinner
    styleSheet.insertRule(` @keyframes new_insert{0%{transform: rotate(0deg);}10%{border-right: 10px solid ${animationColor};}100% {transform: rotate(360deg);}} `,1)
    styleSheet.insertRule(` @keyframes new_insert2{0%{transform: rotate(0deg);}20%{border-left: 10px solid ${animationColor};}100% {transform: rotate(360deg);}} `,2)
   

   const loader1 = {
    width: widthHeight,
    height: widthHeight,
    backgroundColor: insideLoaderColor,
    margin :loaderMargin,
    border: `10px solid ${colorFigure1}`,
    borderRight: `10px solid white`,
    borderRadius:'50%',
    animation:` new_insert 0.8s linear infinite`,
    transitionProperty:'border',
    zIndex: 0,
    position: 'fixed'

} 
 const loader2 = {
    width: widthHeight,
    height: widthHeight,
    backgroundColor:insideLoaderColor,
    border: `10px solid ${colorFigure2}`,
    borderLeft: `10px solid white`,
    borderRadius:'50%',
    animation:` new_insert2 0.8s linear infinite`,
    position: 'fixed'
 }

    return(
        <section id="container"   className= {position}>
        <div 
            style={loader1}
        >
        </div>
        <div
            style= {loader2}
            >
        </div>
        </section>

    )
}
Spinner.propTypes= {
    colorFigure1: PropTypes.string,
    colorFigure2: PropTypes.string,
    position: PropTypes.string,
    customSize: PropTypes.string
}
Spinner.defaultProps = {
    colorFigure1: 'blue',
    colorFigure2: 'blue',
    position: 'center'
}