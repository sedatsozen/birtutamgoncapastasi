import React, {Component} from "react";
import "../pages/Pages Stylesheets/galeri.css";

import Navbar from "../navbar.component";

import cake1 from "C:/Users/sedat/Desktop/Development/Web/birtutamgoncapastasi.com/birtutamgoncapastasi/src/images/cake.jpg";
import cake2 from "C:/Users/sedat/Desktop/Development/Web/birtutamgoncapastasi.com/birtutamgoncapastasi/src/images/cake-2.jpg";
import cake3 from "C:/Users/sedat/Desktop/Development/Web/birtutamgoncapastasi.com/birtutamgoncapastasi/src/images/cake-3.jpg";

export default class Galeri extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: [cake1, cake2, cake3, cake1, cake2, cake3] 
        }
    }

    componentDidMount(){
        fetch("http://localhost:9000/instagramAPI")
        .then(res => res.text())
        .then(res => this.setState({images: res}));
    }

    render(){
        return(
            <div >
                <Navbar />
                <div className="gallery-photo">
                    <h1>GALERİ</h1>
                </div>

                <div className="gallery-container">
                    <div className="gallery">
                        {this.state.images.map(image => <img src={image} />)}
                    </div>
                </div>
            </div>
        )
    }    
}