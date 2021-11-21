import React from 'react'
//import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import Search from './Components/Search'
import './index.css'
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(<BrowserRouter>
    <Route exact path="/" render={() => (<App/>)}></Route>
    <Route path="/Search" render={() => (<Search/>)}></Route>
</BrowserRouter>, document.getElementById('root'))
