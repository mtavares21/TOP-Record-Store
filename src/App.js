import React from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Login from './Components/Login'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App (){
  return (
  <div>
  <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/callback" component={Search} />
          <Route path='/' component={Login}></Route>
      </Switch>
    </BrowserRouter>
  </div>

)

}

export default App;