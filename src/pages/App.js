import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/themes/default';

import Home from './pages/Home';
import Book from './pages/Book';

const NoMatch = () => <h1>404</h1>;

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/book/:slug" component={Book} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    </ThemeProvider>
);

export default App;
