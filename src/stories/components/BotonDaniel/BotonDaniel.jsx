import React,{useState} from 'react';
import PropTypes from 'prop-types'
import './BotonDaniel.css';


export const BotonDaniel = (props) => {
    const {primary,label,customSize,position,buttonColor} = props;
    const [name,setName] = useState('');
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    const handleClick= () => {
        setName('Hola soy Daniel')
        if(name !=='') {
            setName('')
        }  
    }
    const customStyle= {
        backgroundColor : buttonColor,
    }
    return (
        <main className={position}>
            <button
                className= {[`custom-size-${customSize}`,mode].join(' ')}
                style= {customStyle}
                onClick= {handleClick}
            >
                {label}
            </button>
            <p>{name}</p>
        </main>
    )
}
BotonDaniel.prototype = {
    customStyle: PropTypes.object,
    customSize: PropTypes.oneOf(['small','medium','big']),
    position: PropTypes.oneOf(['left','center','right']),
    primary: PropTypes.string,
    label: PropTypes.string,
    buttonColor: PropTypes.string
}
BotonDaniel.defaultProps = {
    customStyle:{
        width:'100px',
    },
    position:'left'
}
