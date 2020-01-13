import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
    return (
        <Router>
            <div className="App container">
                <header className="App-header">
                    <h1 className="App-title">App</h1>
                    <Link to="/" className="btn btn-primary">
                        Home
                    </Link>{" "}
                    <Link to="/otherpage" className="btn btn-primary">
                        Other Page
                    </Link>
                </header>
                <div>
                    <Route exact path="/" component={Fib} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>
            </div>
        </Router>
    );
}

export default App;
