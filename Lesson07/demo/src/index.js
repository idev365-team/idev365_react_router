import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Link,Redirect,Switch } from 'react-router-dom'


const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
];

const find=(id)=>{
    return PEEPS.find(p=>p.id==id)
}

const Person =(props)=>{
    console.log("Person.props->",props)
    const id = props.match.params.id;
    const person = find(id)
    
    return (
        <div>
            <h1>{person.name}'s Friends</h1>
            <ul>
                {person.friends.map((fid,index)=>{
                    let friend = find(fid)
                    return <li>
                        <Link to={`${props.match.url}/${fid}`}>{friend.name}</Link>
                    </li>
                })}
            </ul>
            <Route path={`${props.match.url}/:id`} component={Person}/>
        </div>
    )
}
  

const App = ()=>{
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/1"></Redirect>
                <Route path="/:id" component={Person}/>
            </Switch>
            
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))

