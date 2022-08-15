import React, { useState } from 'react';
import { NavLink,BrowserRouter as Router } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'


export const SideBar = (props) => {
    const {showSidebar,position} = props;
    const [localShowSidebar, setLocalShowSidebar] = useState(false)
    const right = <FontAwesomeIcon icon={faArrowRight} />;
    const left = <FontAwesomeIcon icon={faArrowLeft} />;
    const sideBarBody= (
            <Router> 
                <NavLink to = '#' className='nav'>Inicio</NavLink>
                <NavLink to = '#' className='nav'>Ver stock</NavLink>
                <NavLink to = '#' className='nav'>Vender</NavLink>
                <NavLink to = '#' className='nav'>Opciones de stock</NavLink>
                </Router>
            )

    
    return(

        <div id ='sideBar-container' className={position}>
           { showSidebar || localShowSidebar ?<div className='show'><button onClick= {() => setLocalShowSidebar(!localShowSidebar)}>{left}</button>{sideBarBody}</div> 
           : <div className='hide'><button onClick= {() => setLocalShowSidebar(!localShowSidebar)}>{right}</button></div>
           }
              
        </div>
    )
}

 SideBar.prototype= {
    setShowSideBar: PropTypes.func,
    showSidebar: PropTypes.bool,
    position: PropTypes.string
    }
    SideBar.defaultPorps= {
    showSideBar: false,
    }
