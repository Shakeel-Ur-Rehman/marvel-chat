import React from 'react';
import Header from './components/Header';
import {Route,BrowserRouter,Switch} from "react-router-dom"
import Conversations from './containers/Conversations';
import Members from "./containers/Members"
import LiveScritps from "./containers/LiveScripts"
import Login from "./containers/Login"
import  Profile from "./containers/Profile"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Conversations}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/conversations" component={Conversations}/>
      <Route exact path="/members" component={Members}/>
      <Route exact path="/livescripts" component={LiveScritps}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
