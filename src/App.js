import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Crypto from './components/Crypto'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Switch>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route exact path="/crypto">
                            <Crypto/>
                        </Route>
                        <Route exact path="/cryptoss/:coinId">
                            <CryptoDetails/>
                        </Route>
                        <Route exact path="/news">
                            <News/>
                        </Route>
                    </Switch>
                </div>
            </Layout>
        </div>

        <div className='footer'>

        </div>

    </div>
  )
}

export default App