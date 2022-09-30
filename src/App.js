/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { UseAuth } from './components/UseAuth';
function App() {
    // eslint-disable-next-line no-unused-vars
    const [foodType, setFoodType] = useState();

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/about'>About (public)</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard (Private)</Link>
                    </li>

                    <li>
                        <Link to='/signup'>UseAuth (public) </Link>
                    </li>
                    <li>
                        <Link to='/login'>Login (public) </Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout (public) </Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route
                        exact
                        path='/'>
                        <Home />
                    </Route>
                    <PublicRoute path='/about'>
                        <About />
                    </PublicRoute>
                    <PrivateRoute path='/dashboard'>
                        <Dashboard />
                    </PrivateRoute>
                    <PublicRoute path='/signup'>
                        <UseAuth />
                    </PublicRoute>
                    <PrivateRoute path='/logout'>
                        <Logout />
                    </PrivateRoute>
                    <PublicRoute path='/login'>
                        <Login />
                    </PublicRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
