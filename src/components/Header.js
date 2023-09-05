import React from "react";
import { NavLink } from 'react-router-dom';

const Header = (props) =>{
    return(
        <header>
            <div className="d-flex justify-content-between">
                <p className="pageTitle">{props.title}</p>
                <div>
                    <NavLink to={props.button1.path}>
                        <button className="btn-primary" onClick={props.button1.onClick}>
                            {props.button1.name}
                        </button>
                    </NavLink>
                    <NavLink to={props.button2.path}>
                        <button id={props.button2.id} className="btn-danger" onClick={props.button2.onClick}>
                            {props.button2.name}
                        </button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;