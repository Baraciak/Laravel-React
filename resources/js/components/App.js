import React, { Component } from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import history from "./History";
import axios from "axios";
import TaskDescription from "./utils/TaskDescription/TaskDescription";
import Header from "./utils/Header/Header";
import Posts from "./utils/Posts/Posts"
require("@babel/polyfill");

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePath: "/"
        }

        this.history = history;

        this.routes = [
            {
                path: "/",
                name: "Task Description",
                Component: TaskDescription
            },
            {
                path: "/posts",
                name: "Posts List",
                Component: Posts
            }
        ];
    }

    handlePathChange = (path) => {
        this.setState({activePath: path})
    }


    render() {
        const {
            activePath
        } = this.state;

        return (
            <React.Fragment>
                <Router history={history}>
                    <Header activePath={activePath} onPathChange={this.handlePathChange} routes={this.routes} />
                    <Switch>
                        {this.routes.map(({ path, name, Component }, index) => {
                            return(
                                <Route key={index} exact path={path}>
                                    <Component />
                                </Route>
                            )
                        })}
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;

