Express를 사용한 ReactJS Template

https://velopert.com/1492 블로그의 예제를 따라 만듦.


babel build를 위해 babel-cli를 설치해줘야한다.

$ npm install -g babel-cli


디렉토리 구조.
<pre>
./
├── .babelrc                # babel 설정파일
├── build                   # 서버 빌드 디렉토리
├── package.json
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server                  # 서버 디렉토리 (ES6)
│    ├── main.js            # 서버 사이드 메인 스크립트
│    └── routes
│        └── posts.js       # 예제 라우터
├── src
│    ├── App.js             # App 컴포넌트
│    └── index.js           # 클라이언트 사이드 메인 스크립트
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일
</pre> 

실행.
<pre>
$ npm run build
$ npm run start or $ npm run development
</pre>
