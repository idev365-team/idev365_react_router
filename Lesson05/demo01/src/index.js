import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt,
} from 'react-router-dom'

const App =()=>{
    return (
        <Router>
           <React.Fragment>
           <ul>
                <li>
                    <Link to="/">Form</Link>
                </li>
                <li>
                    <Link to="/one">One</Link>
                </li>
                <li>
                    <Link to="/two">two</Link>
                </li>
            </ul>

            <Route exact path="/" component={Form}></Route>
            <Route path="/one" render={()=>(
                <h1>One</h1>
            )}></Route>
            <Route path="/two" render={()=><h1>Two</h1>}></Route>
           </React.Fragment>
        </Router>
    )
}


class Form extends React.Component {
    state={
        isBlocking:false,
    }
    render(){
        const { isBlocking } = this.state
        return (
            <form onSubmit={(event)=>{
                event.preventDefault()
                alert("进行后续的提交表单的行为")
            }}>
                <Prompt
                    when={isBlocking}
                    message="你确定要放弃这个表单，跳转到其他页面去吗？"
                ></Prompt>
                <label>
                    是否阻止跳转？
                    <p>
                        {isBlocking?"Yes,现在处于阻止模式":"No,现在不阻止"}
                    </p>
                    <input 
                        size="50" 
                        placeholder="请输入一些内容"
                        onChange={(event)=>{
                            this.setState({
                                isBlocking:event.target.value.length>0
                            })
                        }}
                    />
                </label>
                <input type="submit"/>
            </form>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector("#root"))