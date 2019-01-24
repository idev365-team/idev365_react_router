import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

const About = ()=><h1>About</h1>
const Company = ()=><h1>Company</h1>
const User = ({match})=><h1>User:{match.params.user}</h1>

const MenuBar = ()=>{
    return (
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/company">Company</Link>
            </li>
            <li>
                <Link to="/colin">Colin</Link>
            </li>
            <li>
                <Link to="/jimmy">Jimmy</Link>
            </li>
        </ul>
    )
}

const App = ()=>{
    return (
        <Router>
           <>
                <MenuBar/>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/company" component={Company} />
                    <Route path="/:user" component={User} />
                </Switch>
           </>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))