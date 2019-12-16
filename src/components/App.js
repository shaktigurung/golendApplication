import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Years from './Years/Years';
import Vehicles from './Vehicles/Vehicles';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component = {Years} />
                        <Route exact path="/years" component = {Years} />
                        <Route exact path="/vehicles" component = {Vehicles} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App ;