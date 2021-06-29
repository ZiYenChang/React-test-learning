import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Article1 from './components/articles/Article1';
import Article2 from './components/articles/Article2';
import Article3 from './components/articles/Article3';
import Article4 from './components/articles/Article4';
import RankingBox from './components/RankingBox';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
          <Header/>
          <Article1/>
        <Switch>
          <Route exact path='/' component={Article1}/>
          <Route path='/article2' component={Article2}/>
          <Route path='/article3' component={Article3}/>
          <Route path='/article4' component={Article4}/>
        </Switch>
        < RankingBox />
          <Footer/>
      </Router>
    </>
  );
}

export default App;
