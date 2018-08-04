import React, { Component } from 'react';
import Share from './share/';
import './App.css';
class App extends Component {
  render() {
    const data = {
      title: 'react-share分享',
      URL: 'https://github.com/snowlu/react-share',
      coverImage: 'https://avatars2.githubusercontent.com/u/27633674?s=60&v=4'
    };
    return (
      <div className="App">
        <Share data={data} />
      </div>
    );
  }
}

export default App;
