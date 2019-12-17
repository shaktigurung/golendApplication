import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Years from './Years/Years';
import VehicleList from './VehicleList/VehicleList';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import './App.css';

const App = () => {
    
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component = {Years} />
                    <Route exact path="/years" component = {Years} />
                    <Route exact path="/:vehicles" component = {VehicleList} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
    
}

export default App ;