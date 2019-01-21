import React,{ Component } from 'react'
import { withRouter,Route,Redirect } from 'react-router-dom'
import fakeAuth from './../api/fakeAuth'

function PrivateRouter({ component:Component,...rest }){
    
    return (
        <Route
            {...rest}
            render={
                props=>fakeAuth.isAuthenticated 
                    ? (<Component {...props}/>)
                    : (
                        <Redirect 
                            to={{
                                pathname:"/login",
                                state:{
                                    from:props.location
                                }
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRouter