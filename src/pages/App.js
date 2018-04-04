import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Book from './pages/Book/index';

const Home = () => <Link to={`/book/test-book`}>test-book</Link>;

const NoMatch = () => <h1>404</h1>;

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book/:slug" component={Book} />
            <Route component={NoMatch} />
        </Switch>
    </Router>
);

export default App;
