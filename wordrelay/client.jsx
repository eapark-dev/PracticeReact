const React = require('react');
const ReactDom = require('react-dom');

//클래스별로 쪼개 가져오기
//모듈 시스템을 사용하면 필요한 것만 가져올 수 있어 효율적이다.
const WordRelay = require('./WordRelay');

//jsx 확장자명을 쓰면 react문법을 다 사용할 수 있음.
ReactDom.render(<WordRelay/>, document.querySelector('#root'));