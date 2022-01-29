import React,{useState} from 'react';


export const FirstComponent = (props) => {
    const {primary} = props;
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const [name,setName] = useState('');
    const handleClick= () => {
        setName('Hola soy Daniel')
        if(name !=='') {
            setName('')
        }
    }
    return (
        <>
            <button
                className= {mode}
                onClick={handleClick}
            >
                Hola
            </button>
            <p>{name}</p>
        </>
    )
}