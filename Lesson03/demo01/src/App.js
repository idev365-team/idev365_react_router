import React,{Fragment} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import AuthButton from './components/AuthButton';
import NavMenu from './components/NavMenu';
import Public from './pages/Public';
import Protected from './pages/Protected';
import Login from './pages/Login';
import PrivateRouter from './components/PrivateRoute';

const App=()=>{
    return (
        <Router>
            <Fragment>
                <AuthButton/>
                <NavMenu/>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRouter path="/protected" component={Protected}/>
            </Fragment>
        </Router>
    )
}

export default App