# twiger

트위터 클론 코딩

## 빌드 버전

- node: v14.17.3, npm: v6.14.13

## 프로젝트 설정

### 커밋 템플릿 설정

root 디렉토리에서 다음 명령어 실행

```
$ git config commit.template .gitmessage.txt
```

설정 후 `git commit -m` 말고 `git commit` 명령어로 커밋 할 때 확인 가능

### 기타

- 호환성, 커밋 diff 이슈로 인해 반드시 파일 마지막은 개행
    - VSCODE endline 자동 개행 설정 방법: setting.json에서 `"files.insertFinalNewline": true` 추가 (거의 대부분 프로젝트에서 이렇게 하니까 User에서 설정해도 상관 없음)

## client 설정

### HOW TO DO

1. 라이브러리 설치

```
npm install
```

### 실행 가능 명령어
    - `npm run dev`: 개발용 서버(localhost:3000) 실행. 소스코드 수정시 자동으로 리로딩.
    - `npm start`: 빌드된 정적 파일로 서버 실행.
    - `npm run build`: 배포용 정적 파일 빌드.
    - `npm run lint`: linting, formatting 체크.
    - `npm run lint:fix`: linting, formatting 후 자동 수정.

### 현황
    - next.js, typescript, eslint(문법 체크), prettier(코드 포맷팅) 설정

### 디렉토리

```
client/
    - src/ // 모든 소스코드는 src/ 하위에서 작업
        - components/ // UI들을 컴포넌트화해서 pages에서 import해서 사용
        - interfaces/ // typescript 관련 type이나 interface 관리
        - pages/ // 만들어질 웹 페이지
        - utils/ // 유틸
    - .eslintrc // eslint 관련 설정
    - .prettierrc // prettier 관련 설정
    - tsconfig.json // typescript 관련 설정
    - next-env.d.ts // next.js 관련 타입
    - package.json // 설치한 라이브러리나 실행 스크립트 관련 목록
    - package-lock.json // 설치된 라이브러리에 따라 자동 생성 (건들이지 말 것)
    - .gitignore // client 디렉토리 하위에만 유효한 .gitignore (최상위의 .gitignore은 OS니 에디터 관련만 따로 설정해서 다름)
```

### linting & formatting 관련 추가 설정

파일 저장시 linting & foramtting을 자동으로 해주려면 vscode 내에서 다음 설정을 추가

1. prettier 확장 설치
2. 환경 설정에서 User 또는 Workspace에서 settings.json 열기 (User에서 설정하면 전체 에디터에 영향을 주기 때문에 Workspace에서 하길 추천)
3. 다음 설정이 없으면 추가

```
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```
