import React from "react";
import { Login, Home } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={createStore(reducers)}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
