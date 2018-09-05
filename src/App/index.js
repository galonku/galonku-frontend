import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import LoginMerchants from '../Pages/Login/Merchants'
import LoginUsers from '../Pages/Login/Users'
import RegisterMerchants from '../Pages/Register/Merchants'
import RegisterUsers from '../Pages/Register/Users'
import TransactionUser from '../Pages/Transaction/Users/Initial'
import OrderStatus from '../Pages/Transaction/Users/OrderStatus'
import TransactionMerchant from '../Pages/Transaction/Merchant/Close'
import OpenOrderMerchant from '../Pages/Transaction/Merchant/Open'
import SettingsMerchant from '../Pages/Transaction/Merchant/Settings'
import OrderDetail from '../Pages/Transaction/Merchant/OrderDetail'
import MerchantReview from '../Pages/Transaction/Merchant/Review'

import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/merchants/register" component={RegisterMerchants} />
            <Route path="/merchants/login" component={LoginMerchants} />
            <Route path="/merchants/open" component={OpenOrderMerchant} />
            <Route path="/merchants/order-details" component={OrderDetail} />
            <Route path="/merchants/close" component={TransactionMerchant} />
            <Route path="/merchants/settings" component={SettingsMerchant} />
            <Route path="/merchants/order-review" component={MerchantReview} />

            <Route path="/users/transaction/status" component={OrderStatus} />
            <Route path="/users/register" component={RegisterUsers} />
            <Route path="/users/login" component={LoginUsers} />
            <Route path="/users/transaction" component={TransactionUser} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
