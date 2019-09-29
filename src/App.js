import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import PageSearch from './pages/PageSearch';
import PageSearchResults from './pages/PageSearchResults';

import {
  PAGE_DEFAULT,
  PAGE_INFORMATION,
  PAGE_RESULTS,
  PAGE_SEARCH,
} from './constants/routes';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={ PAGE_RESULTS } component={ PageSearchResults } />
          <Route path={ PAGE_SEARCH } component={ PageSearch } />
          <Route path={ PAGE_INFORMATION } component={ PageSearch } />
          <Route path={ PAGE_DEFAULT } component={ PageSearch } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
