import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../stylesheets/navbar.css";
import "../stylesheets/fontawesome/css/all.css";

export default class Navbar extends Component{
    render(){
        let symbol;
        if(this.props.dropDownState){
            symbol = <i class="fas fa-times fa-2x"></i>
        }else{
            symbol = <i class="fas fa-bars fa-2x"></i>
        }

        return(
            <div>
                <div className="top-container">
                    <div className="flexbox-container">
                        <div className="bars" onClick={() => this.props.toggleDropDown()}>{symbol}</div>
                        <div className="logo"><i class="fas fa-birthday-cake fa-3x"></i></div>
                        <div className="bag"><Link to="/siparis"><i class="fas fa-shopping-bag fa-2x"></i></Link></div>
                    </div>
                </div>
            </div>
        )
    }
}