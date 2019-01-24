import React from 'react'
import { StaticRouter,Route} from 'react-router-dom' 
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from './App'

const app = express()

app.get("*",(req,res)=>{
    let staticContent = {}
    let html = ReactDOMServer.renderToString(
        <StaticRouter>
            <App/>
        </StaticRouter>
    )
    res.status(staticContent.statusCode||200)
        .send(html)
})

app.listen(process.env.PORT || 3000)