import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Post } from "../components/Post";
import { Home } from "../containers/Home";

export const Routes = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post" component={Post} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);


