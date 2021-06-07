import React from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Login from './Components/Login'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contacts from './Components/Contacts'
function App (){
  return (
  <div>
  <BrowserRouter basename='/TOP-Record-Store'>
      <Header />
      <Switch>
          <Route path='/callback' component={Search} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  </div>

)

}

export default App;