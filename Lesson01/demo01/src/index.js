import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from "react-router-dom"

function NavMenu(props){
    console.log("NavMenu->props->",props)
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
        </ul>
    )
}

const Home=(props)=>{
    console.log("Home->props",props)
    return (
        <h2>Home</h2>
    )
}
const About=()=><h2>About</h2>

function Topics(props) {
    console.log("Topics-->props",props)
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${props.match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={props.match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }

  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }

function BasicExample(){
    return (
        <Router>
            <div>
                <NavMenu/>
                <hr/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/topics" component={Topics}></Route>
            </div>
        </Router>
    )
}

ReactDOM.render(<BasicExample />, document.getElementById('root'));
