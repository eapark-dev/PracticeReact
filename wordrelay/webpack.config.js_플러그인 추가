//webpack은 webpack.config.js 에서 모두 설정한다.
//node에서 경로를 쉽게 조작하기 위해 path라는 함수를 준다.
const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //webpack의 변경을 하면 핫리로딩을 해준다. 기존 데이터를 유지하면서 새로고침 해준다.

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스에서는 : production 으로 써야함 
    devtool: 'eval',
    resolve: { 
        extensions: ['.js','.jsx'] //확장자명을 가져오는 옵션
    },
    //중요
    entry: {
        app: ['./client'], //이미 client.jsx에서 wordrelay를 불러오기 때문에 client만 사용해도 된다. , 확장자명 따로 쓰지 않아도 된다.
    }, //입력
    module: { //모듈을 적용해서 output으로 보낸다.
        rules: [
          {
            test: /\.jsx?/, //js 파일과 jsx 파일의 rule을 적용한다.
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties','react-refresh/babel'],
            },
          },
        ],
      },
    plugins: [
      new RefreshWebpackPlugin()
    ],
    output: {
       path: path.join(__dirname,'dist'), //현재 폴더경로에서 dist를 가져온다.
       filename: 'app.js',
        publicPath: '/dist/',
    }, //출력
    devServer: {
      publicPath: '/dist/', //소스코드의 변경점이 생기면 자동으로 dev 스크립트를 인식한다.
      hot:true,
    },
};