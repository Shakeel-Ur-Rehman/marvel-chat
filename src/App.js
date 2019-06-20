import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideBarRight from './components/SideBarRight';
import Messenger from './components/Messenger';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="container-fluid" style={{marginTop:"20px"}}>
        <div className="row">
          <div className="col-md-3">
        <Sidebar/>
        </div>
        <div className="col-md-6">
        <Messenger/>
        </div>
        <div className="col-md-3">
        <SideBarRight/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
