import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>

                <div className="content">
                    <Route exact path="/" render={() => (
                        <Redirect to="/profile"/>
                    )}/> {/*In case of a default URL redirect to profile*/}
                    <Route render={() => <Profile postsData={props.postsData}/>} path='/profile'/>
                    <Route exact component={Dialogs} path='/dialogs' />
                    <Route component={News} path='/news' />
                    <Route component={Music} path='/music' />
                    <Route component={Settings} path='/settings' />
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;



