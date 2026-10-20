# CLAUDE.md — 클래스로(Classro) 회사 소개 홈페이지

> 팀 공통 규칙입니다. 작업 전 반드시 읽고 따르세요.

## 1. 프로젝트 개요
- 목표: 가상 회사 **클래스로(Classro)** 의 회사 소개 홈페이지 제작
- 콘텐츠 기준: `docs/00_회사소개.md` (회사 정보·수치는 이 문서만 사용, 임의 생성 금지)
- 기술 스택: 정적 파일만 사용 (HTML / CSS / Vanilla JS)
  - 프레임워크·빌드 도구·서버 코드 사용 금지
- 배포: Netlify (`main` 브랜치 기준 정적 배포)

## 2. 역할과 소유권
| 영역 | 담당 | 규칙 |
| --- | --- | --- |
| `CLAUDE.md` | PM | 수정은 PM 승인 후 |
| `DESIGN.md` | 현우 | 모든 스타일은 DESIGN.md를 따름. 타인 직접 수정 금지 |
| 헤더 (`components/header/`) | 시우 | 헤더 전체 제작·수정은 헤더 담당만. 다른 사람은 가져다 쓰기만 |
| 공통 CSS (`css/common.css`) | 시우 | DESIGN.md 기준으로 작성. 담당자 외 수정 금지 |
| 공통 JS (`js/common.js`) | 시우 | 담당자 외 수정 금지 |
| 각 페이지 (`*.html`, `css/pages/`, `js/pages/`) | 각 페이지 담당 | 본인 페이지 파일만 수정 |

- 타인 소유 파일 수정이 필요하면 → Issue로 요청, 담당자가 반영

## 3. 작업 순서
1. **공통 작업 먼저**: 헤더 · 공통 CSS · 공통 JS를 각 담당자가 완성 → `main`에 merge
2. **페이지 작업**: 공통 작업이 `main`에 반영된 뒤 `main`에서 브랜치를 따서 시작

### 공통 파일 보호 규칙
- 페이지 작업 중에는 `components/header/`, `css/common.css`, `js/common.js` **수정 금지**
- 공통 스타일을 바꾸고 싶으면 공통 파일이 아닌 **본인 페이지 CSS에서 덮어쓰기**
  - 덮어쓰기는 페이지 전용 클래스로 범위를 좁혀서 (예: `.about-page .title`)
- 공통 파일 자체에 문제가 있으면 → Issue 생성 후 해당 담당자가 수정
- PR에 공통 파일 변경이 포함되어 있으면 리뷰어는 승인하지 않음

## 4. 페이지 구성
| 페이지 | 파일 | 담당 |
| --- | --- | --- |
| 메인 | `index.html` | 시우 |
| 회사소개 | `about.html` | 현우 |
| 클래스 예약 | `booking.html` | 재민 |
| 오시는 길 | `location.html` | 지영 |
| Q&A | `qna.html` | 서영 |

- 모든 페이지는 공통 헤더(`components/header/`)를 사용
- 페이지 간 링크는 상대 경로 사용 (예: `./about.html`)

## 5. 디렉토리 구조
```
/
├── CLAUDE.md
├── DESIGN.md
├── index.html
├── about.html
├── booking.html
├── location.html
├── qna.html
├── components/header/   # 헤더 담당 전용
├── css/
│   ├── common.css       # 공통 스타일 (공통 CSS 담당)
│   └── pages/           # 페이지별 CSS (예: about.css)
├── js/
│   ├── common.js        # 공통 스크립트 (공통 JS 담당)
│   └── pages/           # 페이지별 JS (예: booking.js)
├── assets/              # 이미지·아이콘
└── docs/00_회사소개.md
```

## 6. 코딩 규칙
- 색상·폰트·간격은 DESIGN.md 토큰만 사용 (하드코딩 금지)
- 파일·클래스명: kebab-case
- 반응형(모바일 우선) 필수

## 7. GitHub 협업 규칙
### 브랜치
- `main`: 배포용(Netlify), 직접 push 금지
- 작업 브랜치: 담당 페이지명 또는 작업명으로 간단하게
  - 예: `about`, `booking`, `header`, `design-guide`
- 브랜치명은 **영어 소문자 + 하이픈**만 사용 (한글 금지)

### 커밋 메시지
- 형식: `타입: 내용` (예: `feat: 회사 소개 섹션 추가`)
- 타입: feat / fix / docs / style / refactor / chore

### Issue
- 작업 시작 전 Issue 생성 → 본인 assign
- 라벨: `feature` `bug` `design` `header` `docs`

### Pull Request
- `작업 브랜치 → main`으로 PR (merge 시 Netlify 자동 배포)
- PR 본문에 관련 Issue 연결 (`Closes #번호`)
- 리뷰어 최소 1명 승인 후 merge
- 헤더·DESIGN.md 관련 변경은 해당 담당자 리뷰 필수
- PR은 작게, 기능 단위로

### 충돌 방지
- 작업 전 `git pull origin main`
- 공통 파일(CLAUDE.md, DESIGN.md, 헤더, common.css, common.js)은 담당자만 수정
- 충돌 발생 시 혼자 해결하지 말고 해당 파일 담당자와 상의

## 8. Claude 작업 시 지시
- UI 작업 시 공통 스킬 `/ui-ux-pro-max` 사용 (단, DESIGN.md와 충돌 시 DESIGN.md 우선)
- 요청받은 담당 영역 외 파일은 수정하지 말 것
- 페이지 작업 시 공통 파일(헤더, `common.css`, `common.js`)은 **읽기만** 하고 절대 수정하지 말 것. 변경이 필요하면 페이지 CSS/JS에서 처리하거나 Issue 작성을 제안할 것
- 스타일 작업 전 DESIGN.md 먼저 확인
- 헤더는 새로 만들지 말고 `components/header/` 를 사용
- 커밋 메시지는 7장 컨벤션을 따를 것
