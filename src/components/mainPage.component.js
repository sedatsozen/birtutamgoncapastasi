import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

import Home from "../components/home.component";
import Galeri from "../components/pages/galeri.page";
import Hakkimda from "../components/pages/hakkimda.page";
import Iletisim from "../components/pages/iletisim.page";
import OzelDers from "../components/pages/ozelDers.page";
import YoneticiGiris from "../components/pages/yoneticiGiris.page";
import Siparis from "../components/pages/siparis.page";

export default class MainPage extends Component{
    render(){
        return(
            <div className="main">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/galeri" component={Galeri}></Route>
                        <Route path="/hakkimda" component={Hakkimda}></Route>
                        <Route path="/iletisim" component={Iletisim}></Route>
                        <Route path="/ozelDers" component={OzelDers}></Route>
                        <Route path="/yoneticiGiris" component={YoneticiGiris}></Route>
                        <Route path="/siparis" component={Siparis}></Route>
                    </Switch>
                </Router>
            </div>         
        )
    }
}
