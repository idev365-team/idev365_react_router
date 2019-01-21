import React from 'react'
import { withRouter } from 'react-router-dom'
import fakeAuth from './../api/fakeAuth'

const AuthButton = ({history})=>{
    return (
        fakeAuth.isAuthenticated 
        ? (
            <p>
                Welcome!{" "}
                <button
                onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) 
        : (
            <p>You are not logged in.</p>
        )
    )
}

export default withRouter(AuthButton)