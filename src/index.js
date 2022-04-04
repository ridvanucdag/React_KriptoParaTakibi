import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'
import 'antd/dist/antd.css'

ReactDom.render(
    <React.StrictMode>
    <Router>
        <Provider store={store}>
        <App/>
        </Provider>
    </Router>
    </React.StrictMode> , document.getElementById('root'))