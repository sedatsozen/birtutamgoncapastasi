import React, {Component} from "react";
import "../stylesheets/dropDown.css";
import "../stylesheets/fontawesome/css/all.css";

import {Link} from "react-router-dom";

export default class DropDown extends Component{
    render(){
        return(
            <div>
                <div className="main-frame">
                        <Link to="/galeri" className="dropdown-item">Galeri</Link>
                        <Link to="/hakkimda" className="dropdown-item">Hakkımda</Link>
                        <Link to="/iletisim" className="dropdown-item">İletişim</Link>
                        <Link to="/ozelDers" className="dropdown-item">Özel Ders</Link>
                        <Link to="/yoneticiGiris" className="dropdown-item">Yönetici Giriş</Link>
                </div>
            </div>
        )
    }    
}