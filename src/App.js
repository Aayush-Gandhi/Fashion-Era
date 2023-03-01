import React from 'react';
import {Nav,Intro,Arrival,Brand,Trending,Review,Footer} from './components';
// import Home from './components/Home';
import './App.css';

function App() {
  return(
  <>
   <Nav />
   <Intro />
   <Arrival />
   <Brand />
   <Trending />
   <Review />
   <Footer />
   {/* <Home /> */}
  </>
  );
}
export default App;