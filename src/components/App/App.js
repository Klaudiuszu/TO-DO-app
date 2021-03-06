import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import FAQ  from '../FAQ/FAQ';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        className={styles.switchWrapper}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path='/search/:value' component={SearchResultsContainer} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>  
);

export default App;