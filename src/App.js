import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
        <Sidebar/>
        </div>
        <div className="col-md-3">
        <Sidebar/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
