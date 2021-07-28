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

2. dev server 실행(8080포트)

```{.bash}
$ npm run serve
```

3. 배포용 빌드

```{.bash}
$ npm run build
```

4. lint 실행

```{.bash}
$ npm run lint
```

### 디렉토리

```
client/
    - src/
        - assets/
            - styles/
            - images/
        - components/
        - router/
        - views/
        - main.js
    - public/
    - babel.config.js
    - package.json, package-lock.json
    - jsconfig.json
    - .browserslistrc
    - .eslintrc.js
    - .gitignore
```

- `src`: 작업한 소스코드 관리 디렉토리
    - `assets`: 정적 파일 관리 (이미지, CSS 등)
    - `components`: 여러 views에서 공통으로 재사용되는 컴포넌트 관리
    - `router`: 페이지 전환되는데 필요한 코드 정의
    - `views`: 페이지 관련 코드
    - `main.js`: 빌드 시작점
    - `babel.config.js`: Babel 설정
    - `package.json`, `package-lock.json`: 라이브러리 목록
    - `jsconfig.json`: vetur 확장에 필요한 설정 파일
    - `.browserlistrc`: transpiling할 때 지원할 브라우저 범위 정의
    - `.eslintrc.js`: Eslint 관련 설정 파일
    - `.gitignore`: client 디렉토리에 해당되는 별도의 `.gitignore`

### linting & formatting 관련 추가 설정

파일 저장시 linting & foramtting을 자동으로 해주려면 vscode 내에서 다음 설정을 추가

1. **prettier**, **eslint**, **vetur** 확장 설치
2. 취향에 맞게 User 또는 Workspace에 다음 코드 추가. User에 추가하면 Vscode 전체 설정. Worksapce에 추가하면 현재 프로젝트에만 적용.

```{.json}
{
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2
    }
    "eslint.workingDirectories": [
        { "mode": "auto" }
    ],
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true    // Vscode 하단 상태바에 eslint 확장 항시 표시용. 필요없으면 추가 안 해도 됨
}
```

3. 프로젝트 root의 `vetur.config.js`와 `client/jsconfig.json`는 **vetur** 확장의 최신 버전(v0.34.1)에서 한 레포지토리에 여러 프로젝트가 있을 때 설정을 잡지 못하는 문제 때문에 추가.

### 기타

- `@`는 `src` 디렉토리를 의미한다.

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

2. VSCODE 확장 **Python**, **Python for VSCode**, **Python Extension Pack**을 설치한다.

3. VSCODE의 workspace 설정(settings.json)에 다음 설정을 추가한다.

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

4. 다음 코드로 확인해본다.

```{.python}
def very_important_function(template: str, *variables, file: os.PathLike, engine: str, header: bool = True, debug: bool = False):
    """Applies `variables` to the `template` and writes to `file`."""
    with open(file, 'w') as f:
        ...
```

