import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const Home = (props)=>{
    console.log("props-->",props)
    const queryString = decodeURIComponent(props.location.search)
    const arr = queryString.split("?")[1].split("=")
    const name = arr[0]
    const value = arr[1]
    return (
        <div>Hello,React Router! {name}:{value}</div>
    )
}

const App = ()=>{
    return (
        <Router>
            <Route path="/" component={Home}></Route>
        </Router>
    )
}

ReactDOM.render(
    <App/>
    ,document.getElementById("root"))