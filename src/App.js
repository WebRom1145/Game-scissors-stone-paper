import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import MainApp from './components/Main';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}

export default App;
