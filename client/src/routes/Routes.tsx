import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { PostForm } from "../components/PostForm";
import { Home } from "../containers/Home";

export const Routes = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post" component={PostForm} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);


