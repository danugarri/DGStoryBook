import React,{useState} from 'react';
import PropTypes from 'prop-types'
import './FirstComponent.css';


export const FirstComponent = (props) => {
    const {primary,textColor,label,customStyle,customedClick} = props;
    const [name,setName] = useState('');
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    const handleClick= () => {
        setName('Hola soy Daniel')
        if(name !=='') {
            setName('')
        }
 


    
    }
    return (
        <>
            <button
                className= {[textColor,mode].join(' ')}
                style= {customStyle}
                onClick= {handleClick}
            >
                {label}
            </button>
            <p>{name}</p>
        </>
    )
}
FirstComponent.prototype = {
    textColor: PropTypes.string,
    style: PropTypes.object,
    customedClick: PropTypes.func
}
FirstComponent.defaultProps = {
textColor:'textColor',
customStyle:{
    width:'100px'
},
customedClick: function  handleClick () {
    alert('hola')
}
}
