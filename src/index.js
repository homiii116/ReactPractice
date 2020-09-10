import { createElement } from 'react';
import ReactDOM from 'react-dom';
import AppWithProps from './App.WithProps';

const RootReactElement = createElement(AppWithProps, { word: '世界' }, null); //App componentをReact要素にする。

ReactDOM.render(
  RootReactElement,
  document.getElementById('root'));
