import React from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom'
import "./index.css"

const PageRed=()=><div className="page pageRed">Red</div>
const PageGreen=()=><div className="page pageGreen">Green</div>
const PageBlue=()=><div className="page pageBlue">Blue</div>
const PagePink=()=><div className="page pagePink">Pink</div>

const NavMenu=()=>{
    return (
        <ul className="menu">
            <li>
                <Link to="/red">Red</Link>
            </li>
            <li>
                <Link to="/green">Green</Link>
            </li>
            <li>
                <Link to="/blue">Blue</Link>
            </li>
            <li>
                <Link to="/pink">Pink</Link>
            </li>
        </ul>
    )
}


const App = ()=>{
    return (
        <Router>
            <React.Fragment>
                <NavMenu/>
                <Route
                    render={
                        ({location})=>(
                            <TransitionGroup>
                                <CSSTransition
                                     key={location.key}
                                     classNames="fade"
                                     timeout={300}
                                >
                                    <Switch location={location}>
                                        <Redirect exact from="/" to="/red"/>
                                        <Route path="/red" component={PageRed}/>
                                        <Route path="/green" component={PageGreen}/>
                                        <Route path="/blue" component={PageBlue}/>
                                        <Route path="/pink" component={PagePink}/>
                                    </Switch>    
                                </CSSTransition>                    
                            </TransitionGroup>
                        )
                    }
                ></Route>
            </React.Fragment>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))

