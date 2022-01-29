import React,{useState} from 'react';
import PropTypes from 'prop-types'
import './FirstComponent.css';


export const FirstComponent = (props) => {
    const {primary,textColor,label,customStyle,customSize,position} = props;
    const [name,setName] = useState('');
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    const handleClick= () => {
        setName('Hola soy Daniel')
        if(name !=='') {
            setName('')
        }
 
    
    }
    return (
        <main className={position}>
            <button
                className= {[`custom-size-${customSize}`,textColor,mode].join(' ')}
                style= {customStyle}
                onClick= {handleClick}
            >
                {label}
            </button>
            <p>{name}</p>
        </main>
    )
}
FirstComponent.prototype = {
    textColor: PropTypes.string,
    customStyle: PropTypes.object,
    customSize: PropTypes.oneOf(['small','medium','big']),
    position: PropTypes.oneOf(['left','center','right']),
}
FirstComponent.defaultProps = {
    textColor:'textColor',
    customStyle:{
        width:'100px'
    },
    position:'left'
}
