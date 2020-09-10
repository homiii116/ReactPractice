import { createElement, Component } from 'react'

class App extends Component {

  render() {
    const h1 = createElement('h1', null, 'Hello World');
    return h1;
  }
}

export default App;
