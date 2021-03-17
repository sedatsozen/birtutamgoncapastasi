import React, {Component} from "react";
import "../stylesheets/mainPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../stylesheets/fontawesome/css/all.css";

import Navbar from "./navbar.component";
import DropDown from "./dropdown.component";
import {Carousel} from "react-responsive-carousel";

import cookingVideo from "../images/cooking-video.mp4";
import cake1 from "../images/cake.jpg";
import cake2 from "../images/cake-2.jpg";
import cake3 from "../images/cake-3.jpg";

const images = [
    {id: 1, src: cake1},
    {id: 2, src: cake2},
    {id: 3, src: cake3},
];

export default class Home extends Component{
    constructor(props){
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);

        this.state = ({
            dropDownState: false
        });
    }

    render(){
        let dropDown;

        if(this.state.dropDownState){
            dropDown = <DropDown/>;
        }else{
            dropDown = "";
        }

        return (
            <div>
                <Navbar toggleDropDown={this.toggleDropDown} dropDownState={this.state.dropDownState} />
                {dropDown}
                <video width="320" height="240" autoPlay muted loop><source src={cookingVideo} type="video/mp4" /></video>

                <div className="main-display-container">
                    <div className="main-display">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nec tortor non pharetra.</h2>
                        <p>
                            Etiam luctus augue in nulla scelerisque, interdum facilisis leo tempus. 
                            Integer volutpat mauris ut vulputate dapibus. Etiam eleifend, magna sit amet pretium euismod, nunc neque molestie leo, 
                            eu viverra augue diam ac ligula.
                        </p>

                        <Carousel showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight>
                            {images.map(image => <img src={image.src} alt={image.id} />)}
                        </Carousel>
                    </div>
                </div>

                <div className="footer">
                    <i class="fas fa-birthday-cake fa-3x"></i>
                    <p>Copyright © 2020, Bir Tutam Gonca Pastası</p>
                </div>
            </div>
        )
    }

    toggleDropDown(){
        this.setState({
            dropDownState: !this.state.dropDownState
        })
    }
}