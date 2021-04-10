const path = require('path');
 
 module.exports = {
    name : 'word-replay-setting',
    mode : 'development' , //실서비스 : production
    devtool : 'eval' ,
    resolve: { //확장ㅈ명
      extensions: ['.js','.jsx']
    },
    entry : {  //확장자명은 따로 필요없음.
       app : ['./client'], //client.jsx가 wordRelay를 불러오고 있기 때문에 webpack에서 알아서 불러옴 , 따로 작성 필요없음.
    }, //입력 
    module: {
       rules: [
          {
            test : /\.jsx?/, //jsx파일에 rule을 적용하겠다.
            loader: 'babel-loader',
            option: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
               plugins: ['@babel/plugin-proposal-class-properties'],
            },
         }
      ],
   }, //entry 파일을 읽고 모듈을 적용해서 output으로 뺀다.

    output : {
      path: path.join(__dirname, 'dist'), //현재 폴더안에 들어있는 dist , 현재폴더 안에 /dist
      filename : 'app.js'
    }, //출력

 };