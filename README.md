# twiger

트위터 클론 코딩

## 빌드 버전

- node: v14.17.3, npm: v6.14.13
- python: v3.8.2

## 프로젝트 설정

### 커밋 템플릿 설정

root 디렉토리에서 다음 명령어 실행

```{.bash}
$ git config commit.template .gitmessage.txt
```

설정 후 `git commit -m` 말고 `git commit` 명령어로 커밋 할 때 확인 가능

### 기타

- 호환성, 커밋 diff 이슈로 인해 반드시 파일 마지막은 개행
    - VSCODE endline 자동 개행 설정 방법: setting.json에서 `"files.insertFinalNewline": true` 추가 (거의 대부분 프로젝트에서 이렇게 하니까 User에서 설정해도 상관 없음)

## client 설정

### HOW TO DO

1. 라이브러리 설치

```{.bash}
$ cd client
$ npm install
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

1. **prettier** 확장 설치
2. 환경 설정에서 User 또는 Workspace에서 settings.json 열기 (User에서 설정하면 전체 에디터에 영향을 주기 때문에 Workspace에서 하길 추천)
3. 다음 설정이 없으면 추가

```{.json}
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

## server 설정

### HOW TO DO

로컬 환경에 파이썬이 우선 설치되어 있다고 가정하고 진행한다.

1. 가상 환경 설정

virtualenv로 가상환경 설정을 한다.

```{.bash}
$ pip install virtualenv
$ pip3 install virtualenv     // python2가 설치된 경우 
```

```{.bash}
$ cd server
$ virtualenv venv --python=python3.8.2
$ source venv/bin/activate
```

2. 라이브러리 설치

```{.bash}
$ pip install -r requirements.txt
```

3. 서버 실행

```{.bash}
$ python manage.py runserver
```

### Python 코드 스타일, linting 설정

VSCODE 기준으로 설정한다. formatter로는 black, linter로 pylint를 사용한다. formatter와 linter를 설정하고 파일이 저장될 때 해당 스타일과 문법 체크를 하고 자동으로 맞는 포맷으로 변환해준다.

1. black, pylint를 가상환경에 설치한다. requirement.txt에 있으므로 이미 설치되어 있으면 넘어간다. (가상환경이 활성화된 상태로 가정한다.)

```{.bash}
$ pip install -r requirements.txt
```

3. VSCODE 확장 **Python**, **Python for VSCode**, **Python Extension Pack**을 설치한다.



2. VSCODE의 workspace 설정(settings.json)에 다음 설정을 추가한다.

```{.json}
{
    "python.formatting.provider": "black",
        "[python]": {
            "editor.formatOnSave": true
    },
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true,
    "python.linting.lintOnSave": true,
}
```

3. 다음 코드로 확인해본다.

```{.python}
def very_important_function(template: str, *variables, file: os.PathLike, engine: str, header: bool = True, debug: bool = False):
    """Applies `variables` to the `template` and writes to `file`."""
    with open(file, 'w') as f:
        ...
```

