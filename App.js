
import React, { Component, useCallback } from 'react';
import './App.less';
import AddEmp from './Component/AddEmp';
import Home from './Component/Home';
import ReleaseEmp from './Component/RelesedEmp';
import { Route, BrowserRouter } from 'react-router-dom';
import Parent from './Component/Parent'
// import {Link} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={Home} />
          <Route path='/Parent' component={Parent} />
          <Route path='/AddEmp' component={AddEmp} />
          <Route path='/ReleaseEmp' component={ReleaseEmp} />

        </BrowserRouter>
        <div>
          {/* <Home></Home> */}
          {/* <AddEmp></AddEmp> */}
          {/* <AddEmp></AddEmp> */}
        </div>
      </div>
    )
  }
}

export default App;