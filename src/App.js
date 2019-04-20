import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

import ava1 from './ava1.jpg';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Vic" avatar={ava1} caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          <Post nickname="OG" avatar={ava1} caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

          {/* more posts */}
        </section>
      </div>

    )
  }
}

export default App;