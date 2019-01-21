import React from 'react'
import fakeAuth from './../api/fakeAuth'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    state = { redirectToReferrer:false };
    login = ()=>{
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer:true,
            })
        })
    }
    render(){
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state
        if(redirectToReferrer) return <Redirect to={from} />
        return (
            <div>
                <p>你必须要先登陆，才能访问 { from.pathname } </p>
                <button onClick={this.login}>登陆</button>
            </div>
        )
    }
}

export default Login