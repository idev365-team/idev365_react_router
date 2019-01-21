import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route ,Link, } from 'react-router-dom'

const NavBar=()=>{
    return (
        <ul>
            <li>
                <Link to="/">Form</Link>
            </li>
            <li>
                <Link to="/one">One</Link>
            </li>
            <li>
                <Link to="/two">Two</Link>
            </li>
        </ul>
    )
}

class Form extends React.Component{
    state={
        userName:""
    }
    hanleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state.userName)
    }
    
    render(){
        return (
            <form action="/login" onSubmit={this.hanleSubmit} >
                <h1>Form</h1>
                <h1>{this.state.userName}</h1>
                <label>
                    user:<input 
                            value={this.state.userName} 
                            onChange={
                                (event)=>this.setState({userName:event.target.value})
                            }

                            type="text" name="user"/>
                </label>
                
                <input type="submit"/>
            </form>
        )
    }   
}
const One=()=><h1>One</h1>
const Two=()=><h1>Two</h1>

const App = ()=>{
    return (
        <Router>
            <React.Fragment>
                <NavBar/>
                <Route exact path="/" component={Form}></Route>
                <Route path="/one" component={One}></Route>
                <Route path="/two" component={Two}></Route>
            </React.Fragment>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))
