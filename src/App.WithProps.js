import { createElement, Component} from 'react'

class AppWithProps extends Component {

  render() {
    const word = this.props.word //親要素から渡されたPropsからプロパティを読み込む。
    const h1 = createElement('h1', null, `Hello${word}`);
    return h1;
  }
}

export default AppWithProps;