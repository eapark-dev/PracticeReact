 //react와 react-dom을 불러온다.
 //node의 모듈 시스템 사용
 const React = require('react');
 const ReactDom = require('react-dom');
//class가 여러개 생길 수도 있으니까 따로 class별로 분리해둔다.
//필요한 것만 가져올 수 있기 때문에 모듈시스템을 사용하면 효율적이다.
 const WordRelay = require('./WordRelay');
//  react전용 jsx문법으로 사용할 수 있다.
// jsx 파일을 만들면 react 전용으로 사용이 가능해 react 문법을 다 사용할수 있다.
ReactDOM.render(<WordRelay/>,document.querySelector('#root'));
 