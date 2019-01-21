import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './index.css'

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/cloth",
      sidebar: () => <div>cloth!</div>,
      main: () => <h2>cloth</h2>
    },
    {
      path: "/computer",
      sidebar: () => <div>computer!</div>,
      main: () => <h2>computer</h2>
    }
  ];

const App = ()=>{
    return (
        <Router>
            <>
                <div className="menuContainer">
                    <ul className="menu">
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/cloth">衣服</Link></li>
                        <li><Link to="/computer">电脑</Link></li>
                    </ul>
                    {routes.map((route,index)=><Route 
                        key={`side-bar-${index}`} 
                        path={route.path} 
                        exact={route.exact}
                        render={route.sidebar}
                    /> )}
                </div>
                <div className="main">
                    {routes.map((route,index)=><Route 
                        key={`side-bar-${index}`} 
                        path={route.path} 
                        exact={route.exact}
                        render={route.main}
                    /> )}
                </div>
            </>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
