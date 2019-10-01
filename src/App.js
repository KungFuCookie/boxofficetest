import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import About from './views/About';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
