# 클래스로(Classro) 회사 소개 홈페이지

동네 공방의 원데이 클래스를 찾고 예약하는 가상 회사 **클래스로**의 소개 홈페이지입니다.
팀 실습용 프로젝트로, HTML · CSS · Vanilla JS만 사용합니다.

## 페이지

| 페이지 | 파일 | 담당 |
| --- | --- | --- |
| 메인 | `index.html` | 시우 |
| 회사소개 | `about.html` | 현우 |
| 클래스 예약 | `booking.html` | 재민 |
| 오시는 길 | `location.html` | 지영 |
| Q&A | `qna.html` | 서영 |

## 실행

빌드 없이 `index.html`을 브라우저로 열면 됩니다.
`main` 브랜치에 merge되면 Netlify에 자동 배포됩니다.

## 폴더 구조

```
├── *.html               # 페이지
├── components/          # 공통 헤더·푸터
├── css/common.css       # 공통 스타일
├── css/pages/           # 페이지별 스타일
├── js/pages/            # 페이지별 스크립트
├── assets/              # 이미지
└── docs/                # 회사 소개 자료
```

## 작업 규칙

- 팀 규칙: [CLAUDE.md](./CLAUDE.md)
- 디자인 기준: [DESIGN.md](./DESIGN.md)
- 작업 순서: Issue 생성 → 브랜치 생성 → 작업 → `main`으로 PR → 리뷰 1명 승인 후 merge
