# DESIGN.md — 클래스로(Classro) 디자인 시스템

> 담당: 현우 · 모든 페이지의 시각 스타일은 이 문서를 따릅니다. 수정은 담당자만 합니다.
> 이 문서는 **시각 요소(분위기·색상·글꼴·간격·컴포넌트·사진)** 만 다룹니다. 페이지별 구성·섹션 설계는 각 페이지 담당이 정합니다.
> `/ui-ux-pro-max` 스킬과 이 문서가 충돌하면 **이 문서가 우선**합니다 (CLAUDE.md 8장).

---

## 0. 레퍼런스와 값의 출처

- 레퍼런스: [Ferio](https://ferio.so/) ([Land-book 페이지](https://land-book.com/websites/100714-ferio-a-curated-image-library-for-modern-creatives))
- **Ferio에서 그대로 가져온 값**: 색상 10개, 산세리프 사용, 사진 중심 카드형 레이아웃, 보이는 테두리, 대문자 이탤릭 사진 캡션, `01 / 05` 형태의 카운터, 짧고 단정한 문구 톤
- **우리 팀이 정한 값**: 폰트(Pretendard), 간격·모서리·그림자 수치, 상태 색상(오류·성공), 진한 포인트색. Ferio의 정확한 수치는 공개 자료로 확인되지 않아, 분위기에 맞춰 정했습니다.

---

## 1. 디자인 콘셉트

**"동네 공방의 손맛을, 잘 큐레이션된 사진집처럼"**

| 키워드 | 시각적으로 이렇게 표현 |
| --- | --- |
| 따뜻함 | 순백 대신 따뜻한 회백색 배경, 흑갈색 글자, 흙·나무·가죽을 닮은 탄(tan) 계열 |
| 큐레이션 | 넓은 여백, 사진이 주인공, 한 화면에 요소를 적게 |
| 단정함 | 얇은 1px 테두리, 작은 모서리, 그림자 최소화, 장식 대신 정렬로 질서 만들기 |
| 신뢰 | 일정한 버튼 모양·위치, 높은 글자 대비 |

**하지 않을 것**: 원색·네온 컬러, 그라데이션 배경, 큰 그림자, 둥근 알약형 카드, 이모지 아이콘, 과한 애니메이션

---

## 2. 색상 (Color)

### 2-1. 기본 팔레트 (Ferio 원본 10색)

| 토큰 | HEX | 역할 |
| --- | --- | --- |
| `--color-ink-900` | `#18140A` | 기본 글자, 주요 버튼 배경, 다크 섹션 배경 |
| `--color-ink-800` | `#231909` | 주요 버튼 hover |
| `--color-gray-700` | `#585850` | 보조 글자(설명, 메타 정보) |
| `--color-gray-600` | `#7D7B73` | 비활성 글자·아이콘 (본문 글자로는 사용 금지) |
| `--color-gray-500` | `#9C9B92` | 플레이스홀더 아이콘, 다크 배경 위 보조 글자 |
| `--color-gray-300` | `#C3C4C0` | 기본 테두리, 구분선 |
| `--color-paper-50` | `#F9F9F8` | 페이지 기본 배경 |
| `--color-tan-600` | `#86755C` | 포인트(장식·큰 글자·아이콘) |
| `--color-tan-400` | `#A49A83` | 보조 포인트, 다크 배경 위 캡션 |
| `--color-tan-200` | `#D2C0A2` | 강조 배경 면(칩 선택, 배지), 다크 배경 위 강조 |

### 2-2. 추가 색상 (팀이 정한 값)

| 토큰 | HEX | 역할 | 이유 |
| --- | --- | --- | --- |
| `--color-white` | `#FFFFFF` | 카드·입력창 배경 | 회백색 배경 위에서 면을 구분 |
| `--color-tan-700` | `#6B5A41` | 포인트 **글자**(링크, 강조 텍스트) | `tan-600`은 대비가 4.5:1에 못 미쳐 글자용 진한 버전 추가 |
| `--color-tan-100` | `#EFE8DC` | 아주 옅은 강조 배경(안내 박스, hover 면) | 넓은 면에 쓸 옅은 탄색 |
| `--color-error` | `#A8432F` | 오류 메시지·테두리 | 팔레트와 어울리는 벽돌색 |
| `--color-success` | `#3F6B47` | 완료·성공 표시 | 채도 낮은 올리브 그린 |

### 2-3. 역할 토큰 (실제 코드에서는 이것을 사용)

| 역할 토큰 | 값 |
| --- | --- |
| `--bg-page` | `--color-paper-50` |
| `--bg-surface` | `--color-white` |
| `--bg-subtle` | `--color-tan-100` |
| `--bg-inverse` | `--color-ink-900` |
| `--text-primary` | `--color-ink-900` |
| `--text-secondary` | `--color-gray-700` |
| `--text-disabled` | `--color-gray-600` |
| `--text-accent` | `--color-tan-700` |
| `--text-inverse` | `--color-paper-50` |
| `--border-default` | `--color-gray-300` |
| `--border-strong` | `--color-ink-900` |
| `--accent` | `--color-tan-600` |

### 2-4. 대비 검증 (WCAG 2.1 AA, 직접 계산한 값)

본문 글자는 **4.5:1 이상**, 18px 굵게·24px 이상 큰 글자와 아이콘은 **3:1 이상**이 기준입니다.

| 글자색 / 배경 | 대비 | 사용 |
| --- | --- | --- |
| ink-900 / paper-50 | 17.44 | ✅ 모든 글자 |
| gray-700 / paper-50 | 6.81 | ✅ 보조 글자 |
| tan-700 / paper-50 | 6.30 | ✅ 포인트 글자·링크 |
| tan-600 / paper-50 | 4.23 | ⚠️ 큰 글자·아이콘만 |
| gray-600 / paper-50 | 4.02 | ⚠️ 큰 글자·비활성만 |
| error / paper-50 | 5.68 | ✅ 오류 문구 |
| success / paper-50 | 5.85 | ✅ 성공 문구 |
| paper-50 / ink-900 | 17.44 | ✅ 다크 섹션 글자 |
| tan-200 / ink-900 | 10.32 | ✅ 다크 섹션 강조 글자 |
| gray-500 / ink-900 | 6.58 | ✅ 다크 섹션 보조 글자 |

**규칙**: `gray-500`, `gray-300`, `tan-400`, `tan-200`은 밝은 배경 위 **글자색으로 사용 금지**.

---

## 3. 글꼴 (Typography)

### 3-1. 폰트

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");

--font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
```

- 사용 굵기: **400(Regular) · 500(Medium) · 600(SemiBold) · 700(Bold)** 4가지만
- 숫자(가격·날짜·인원)는 `font-variant-numeric: tabular-nums;` 로 자릿수 정렬

### 3-2. 글자 크기 단계 (모바일 → 데스크톱 1024px 이상)

| 토큰 | 모바일 | 데스크톱 | 굵기 | 줄간격 | 자간 | 용도 |
| --- | --- | --- | --- | --- | --- | --- |
| `--text-display` | 36px | 64px | 700 | 1.15 | -0.03em | 첫 화면 대표 문구(페이지당 1개) |
| `--text-h1` | 30px | 48px | 700 | 1.2 | -0.025em | 페이지 제목 |
| `--text-h2` | 24px | 36px | 700 | 1.25 | -0.02em | 섹션 제목 |
| `--text-h3` | 20px | 24px | 600 | 1.35 | -0.01em | 카드·블록 제목 |
| `--text-body-lg` | 17px | 18px | 400 | 1.65 | -0.005em | 리드 문단 |
| `--text-body` | 15px | 16px | 400 | 1.65 | 0 | 본문 |
| `--text-small` | 13px | 14px | 400/500 | 1.5 | 0 | 메타 정보, 도움말 |
| `--text-caption` | 12px | 12px | 500 | 1.4 | 0.08em | 영문 대문자 캡션·라벨 |

### 3-3. 글꼴 규칙

- **영문 캡션 스타일 (Ferio 시그니처)**: 사진 위 카테고리 라벨, 섹션 오버라인(제목 위 작은 글자)에만 사용
  `text-transform: uppercase; font-style: italic; letter-spacing: 0.08em; font-size: var(--text-caption);`
  예: `POTTERY`, `BAKING`, `LEATHER`, `FLOWER`, `DRAWING`, `PERFUME`
- 한글에는 이탤릭을 쓰지 않습니다(한글 이탤릭은 글자가 기울어 깨져 보임).
- 본문 한 줄 길이는 최대 **40자 내외(약 640px)**.
- 제목은 2줄을 넘지 않게 작성합니다.

---

## 4. 간격·레이아웃 (Spacing & Layout)

### 4-1. 간격 단위 (4px 기준)

| 토큰 | 값 | 용도 예 |
| --- | --- | --- |
| `--space-1` | 4px | 아이콘과 글자 사이 |
| `--space-2` | 8px | 칩 사이, 라벨과 입력창 사이 |
| `--space-3` | 12px | 카드 내부 요소 사이 |
| `--space-4` | 16px | 모바일 좌우 여백, 버튼 내부 |
| `--space-5` | 24px | 카드 내부 여백, 그리드 간격 |
| `--space-6` | 32px | 블록 사이 |
| `--space-7` | 48px | 섹션 제목과 내용 사이(데스크톱) |
| `--space-8` | 64px | 섹션 사이(모바일) |
| `--space-9` | 96px | 섹션 사이(태블릿) |
| `--space-10` | 128px | 섹션 사이(데스크톱) |

### 4-2. 화면 크기 기준점 (모바일 우선)

| 이름 | 최소 너비 | 컨테이너 좌우 여백 | 그리드 |
| --- | --- | --- | --- |
| mobile | 0 | 16px | 4칸 |
| tablet | 768px | 32px | 8칸 |
| desktop | 1024px | 48px | 12칸 |
| wide | 1440px | 48px | 12칸, 최대 너비 고정 |

- `--container-max: 1280px` / 그리드 간격 `--grid-gap: 24px` (모바일 16px)
- 섹션 위아래 여백: 모바일 64px → 태블릿 96px → 데스크톱 128px

### 4-3. 레이아웃 원칙

- 기본 정렬은 **왼쪽 정렬**. 가운데 정렬은 짧은 대표 문구와 하단 CTA 블록에만 사용
- 섹션 구분은 배경색 변화보다 **여백과 1px 구분선**을 우선 사용
- 다크 섹션(`--bg-inverse`)은 페이지당 최대 1개(주로 하단 CTA나 푸터)

---

## 5. 형태 (Radius · Border · Shadow)

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--radius-sm` | 4px | 칩, 배지, 체크박스 |
| `--radius-md` | 8px | 버튼, 입력창, 카드 |
| `--radius-lg` | 12px | 큰 이미지 블록, 모달 |
| `--radius-full` | 999px | 원형 아이콘 버튼, 상태 점 |
| `--border-width` | 1px | 모든 테두리 기본 |
| `--shadow-sm` | `0 1px 2px rgba(24, 20, 10, 0.06)` | 드롭다운 |
| `--shadow-md` | `0 8px 24px rgba(24, 20, 10, 0.08)` | 모달, 하단 고정 바 |

- **테두리로 면을 나누고, 그림자는 화면 위에 떠 있는 요소에만** 씁니다 (Ferio의 "Visible Borders" 성격).
- 카드에는 기본 그림자를 넣지 않습니다.

---

## 6. 사진 규칙 (Imagery)

| 항목 | 규칙 |
| --- | --- |
| 비율 | 클래스 카드 **4:5**(세로), 와이드 배너 **16:9**, 정사각형 썸네일 **1:1** — 이 3가지만 |
| 톤 | 따뜻한 자연광, 손과 재료가 보이는 장면, 채도 살짝 낮게. 차가운 형광등·과한 보정 금지 |
| 피사체 | 완성품만보다 **만드는 과정(손·도구·재료)** 위주 |
| 모서리 | 카드 안 사진은 `--radius-md`, 단독 큰 사진은 `--radius-lg` |
| 캡션 | 사진 왼쪽 아래 16px 안쪽, 영문 대문자 이탤릭 캡션 스타일, 흰 글자 + 아래쪽 어두운 그라데이션(`linear-gradient(to top, rgba(24,20,10,.55), transparent 50%)`)으로 대비 확보 |
| 사진 위 글자 | 캡션·짧은 제목만. 긴 문장은 사진 위에 올리지 않음 |
| 처리 | `object-fit: cover;` 고정, 사진 로딩 전 배경 `--color-tan-100` |
| 대체 텍스트 | 모든 사진에 `alt` 필수 (예: "물레 위에서 그릇을 빚는 손") |
| 파일 | `assets/`에 WebP 권장, 카드용 가로 800px·배너용 1920px 이내 |

---

## 7. 아이콘 (Iconography)

- 선형(outline) 아이콘 한 종류만 사용, 선 굵기 **1.5px**, 크기 **20px / 24px**
- 권장 세트: Lucide (SVG를 `assets/icons/`에 저장해서 사용)
- 색은 글자색을 따라감(`currentColor`)
- 이모지는 UI 아이콘으로 사용 금지

---

## 8. 컴포넌트 (Components)

> 모든 컴포넌트는 위 토큰만 사용합니다. 아래 수치는 공통 CSS 작성 기준입니다.

### 8-1. 버튼 (Button)

| 종류 | 배경 | 글자 | 테두리 | 용도 |
| --- | --- | --- | --- | --- |
| Primary | ink-900 | paper-50 | 없음 | 페이지의 가장 중요한 행동(예약하기) — **한 화면에 1개** |
| Secondary | 투명 | ink-900 | 1px ink-900 | 보조 행동 |
| Ghost / Text | 투명 | ink-900 | 없음, 밑줄 | 더보기, 전체보기 |
| Inverse | paper-50 | ink-900 | 없음 | 다크 섹션 위 Primary |

| 크기 | 높이 | 좌우 여백 | 글자 |
| --- | --- | --- | --- |
| Large | 56px | 28px | 16px / 600 |
| Medium (기본) | 48px | 24px | 15px / 600 |
| Small | 36px | 16px | 14px / 500 |

- 모서리 `--radius-md`, 아이콘 포함 시 아이콘-글자 간격 8px, 화살표(→)는 오른쪽에
- 상태
  - Hover: Primary는 `ink-800`, Secondary는 배경 `tan-100`
  - Focus: `outline: 2px solid var(--color-tan-600); outline-offset: 2px;`
  - Pressed: `transform: scale(0.98)`
  - Disabled: 배경 `gray-300`, 글자 `gray-600`, `cursor: not-allowed`
  - Loading: 글자 대신 스피너, 버튼 너비 유지
- **예약 CTA 규칙**: "예약하기" 버튼은 모든 페이지에서 Primary · 같은 문구 · 같은 크기(Large). 모바일에서는 하단 고정 바로 표시 가능(배경 white, 위쪽 1px 테두리, `--shadow-md`)

### 8-2. 헤더 (Header) — 시각 기준만, 제작은 헤더 담당

- 높이: 모바일 56px / 데스크톱 72px, 배경 `--bg-page`, 아래 1px `--border-default`
- 스크롤 시 상단 고정, 배경 `rgba(249,249,248,0.9)` + `backdrop-filter: blur(8px)`
- 로고 왼쪽, 메뉴 가운데 또는 오른쪽, Primary(Small) "예약하기" 오른쪽 끝
- 메뉴 글자 `--text-body` / 500, 현재 페이지는 글자 `ink-900` + 아래 2px 밑줄, 나머지는 `gray-700`
- 모바일: 햄버거 아이콘(24px, 터치 영역 44px) → 전체 화면 메뉴, 메뉴 항목 `--text-h2` 크기로 크게

### 8-3. 푸터 (Footer)

- 배경 `--bg-inverse`, 글자 `--text-inverse`, 보조 글자 `gray-500`
- 위아래 여백 64px(모바일) / 96px(데스크톱)
- 열 제목은 영문 캡션 스타일(`tan-200`), 링크는 `--text-small`
- 맨 아래 1px 구분선(`rgba(249,249,248,0.15)`) + 저작권 표기

### 8-4. 섹션 제목 (Section Header)

```
[오버라인]  영문 캡션 스타일, tan-700   예: CLASSES
[제목]      --text-h2, ink-900
[설명]      --text-body-lg, gray-700, 최대 640px
[오른쪽]    (선택) Ghost 버튼 "전체보기 →"
```
- 오버라인-제목 8px, 제목-설명 16px, 섹션 제목-내용 32px(모바일) / 48px(데스크톱)

### 8-5. 클래스 카드 (Class Card)

- 구조: 사진(4:5) → 카테고리 캡션 → 제목 → 메타(지역 · 소요시간) → 가격
- 배경 없음(사진 + 글자만) 또는 `--bg-surface` + 1px 테두리 + 내부 여백 16px 중 **프로젝트 전체에서 하나만 선택: 배경 없음 방식 사용**
- 사진-글자 간격 12px, 제목 `--text-h3`(최대 2줄, 넘치면 말줄임), 메타 `--text-small` gray-700, 가격 `--text-body` 700 + tabular-nums
- Hover(데스크톱): 사진 `transform: scale(1.03)` (사진 영역 밖으로 넘치지 않게 `overflow: hidden`), 제목 밑줄
- 그리드: 모바일 2열 / 태블릿 3열 / 데스크톱 4열

### 8-6. 정보 카드 (Info Card)

- 텍스트 위주 카드(특징, 교통편, 연락처 등)
- 배경 `--bg-surface`, 1px `--border-default`, `--radius-md`, 내부 여백 24px
- 상단 아이콘(24px, `tan-600`) → 제목(`--text-h3`) → 설명(`--text-body`, gray-700)

### 8-7. 칩 / 필터 (Chip)

- 높이 36px, 좌우 14px, `--radius-sm`, `--text-small` 500
- 기본: 배경 투명 + 1px `--border-default`, 글자 ink-900
- 선택: 배경 `tan-200`, 테두리 `tan-600`, 글자 ink-900
- 칩 사이 8px, 모바일은 가로 스크롤(스크롤바 숨김)

### 8-8. 배지 (Badge)

- 높이 24px, 좌우 8px, `--radius-sm`, `--text-caption`(대문자 아님, 이탤릭 아님)
- 종류: 기본(`tan-100` 배경 + `tan-700` 글자), 강조(`ink-900` 배경 + paper-50 글자), 마감(`gray-300` 배경 + `gray-700` 글자)

### 8-9. 입력폼 (Form)

| 요소 | 기준 |
| --- | --- |
| 라벨 | 입력창 위, `--text-small` 600 ink-900, 필수 항목은 라벨 뒤 `*`(tan-700) |
| 입력창 | 높이 48px, 좌우 16px, 배경 white, 1px `--border-default`, `--radius-md`, 글자 16px(모바일 확대 방지) |
| 플레이스홀더 | gray-600 |
| Focus | 테두리 `ink-900` + `box-shadow: 0 0 0 3px rgba(134,117,92,0.25)` |
| 오류 | 테두리 `--color-error`, 아래 오류 문구 `--text-small` error색 + 아이콘 |
| 도움말 | 입력창 아래 4px, `--text-small` gray-700 |
| 체크박스·라디오 | 20px, 선택 시 ink-900 채움, 라벨까지 클릭 영역 |
| 셀렉트 | 입력창과 같은 모양, 오른쪽 chevron 아이콘 |
| 수량 조절(인원) | `−` / 숫자 / `+` 한 묶음, 높이 48px, 버튼 48×48 |

- 라벨-입력창 8px, 항목 사이 24px

### 8-10. 날짜 선택 (Date Picker)

- 날짜 칸 44×44px 이상, 글자 `--text-body` tabular-nums
- 오늘: 1px ink-900 테두리 / 선택: ink-900 배경 + paper-50 글자 / 선택 불가: gray-600 + 취소선 없이 흐리게 / 잔여석 적음: 아래 tan-600 점(4px)

### 8-11. 단계 표시 (Stepper)

- `01 / 03` 형식 숫자 카운터(Ferio 캐러셀 카운터에서 가져옴) + 현재 단계 이름
- 아래 2px 진행 막대: 완료 구간 ink-900, 남은 구간 gray-300

### 8-12. 아코디언 (Accordion)

- 항목 사이 1px `--border-default` 구분선(위·아래), 카드 테두리 없음
- 질문: 높이 최소 64px, `--text-body-lg` 600, 오른쪽 `+` 아이콘 → 열리면 45° 회전(`×`)
- 답변: `--text-body` gray-700, 위 0 / 아래 24px 여백
- 열림·닫힘 애니메이션 200ms

### 8-13. 탭 (Tab)

- 글자 `--text-body` 500, 선택 탭은 ink-900 + 아래 2px ink-900 밑줄, 나머지 gray-700
- 탭 목록 아래 1px `--border-default`, 모바일은 가로 스크롤

### 8-14. 캐러셀 (Carousel)

- 오른쪽 위 또는 아래에 `01 / 05` 카운터(`--text-small`, tabular-nums) + 이전/다음 원형 아이콘 버튼(44px, 1px 테두리)
- 모바일은 손가락으로 넘기기(scroll-snap), 다음 카드가 살짝 보이도록 카드 너비 85%

### 8-15. 지도 블록 (Map)

- 지도는 `--radius-lg` + 1px 테두리, 비율 16:9(모바일 4:3)
- 지도 이미지/임베드 위에는 글자를 올리지 않고, 주소·교통편은 아래 정보 카드로 분리
- 지도는 흑백에 가까운 스타일 권장(가능한 경우), 마커는 ink-900

### 8-16. 안내 박스 (Notice)

- 배경 `--bg-subtle`(tan-100), 왼쪽 3px `tan-600` 선, 내부 여백 16px 20px, `--radius-sm`
- 오류 안내는 왼쪽 선만 `--color-error`

### 8-17. 숫자 강조 (Stat)

- 숫자 `--text-h1` 700 tabular-nums, 단위는 `--text-h3` 500
- 아래 설명 `--text-small` gray-700, 숫자 사이 세로 1px 구분선
- 숫자는 반드시 `docs/00_회사소개.md`의 값만 사용 (CLAUDE.md 1장)

### 8-18. 빈 상태·오류 상태 (Empty / Error)

- 가운데 정렬, 아이콘 32px(gray-600) → 제목 `--text-h3` → 설명 gray-700 → Secondary 버튼
- 무엇이 비었는지 + 다음 행동을 함께 안내

---

## 9. 움직임 (Motion)

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--duration-fast` | 150ms | hover, 색 변화 |
| `--duration-base` | 200ms | 아코디언, 메뉴 열림 |
| `--duration-slow` | 400ms | 스크롤 시 섹션 등장 |
| `--ease-out` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 기본 |

- 스크롤 등장 효과는 아래에서 16px 올라오며 투명도 0→1, **한 번만**
- `transform`과 `opacity`만 움직임(레이아웃 흔들림 방지)
- `@media (prefers-reduced-motion: reduce)` 에서는 모든 움직임 끔

---

## 10. 문구 톤 (Voice)

- Ferio처럼 **짧고 단정하게**: 한 문장 한 메시지, 명사형·단문 위주
  - 예: "손으로 만드는 하루." / "가까운 공방, 바로 예약." / "고르고, 정하고, 만나요."
- 버튼은 동사로 끝냄: "예약하기", "클래스 보기", "문의하기"
- 과장 표현(최고·완벽·혁신) 금지, 회사 수치는 회사소개 문서 값만

---

## 11. 접근성 체크리스트

- [ ] 글자 대비: 본문 4.5:1, 큰 글자·아이콘 3:1 이상 (2-4 표 기준)
- [ ] 터치 영역: 모든 클릭 요소 **44×44px 이상**
- [ ] 키보드: Tab으로 모든 요소 이동 가능, focus 표시(`tan-600` 2px outline) 절대 제거 금지
- [ ] 색만으로 정보 전달 금지 (오류는 색 + 아이콘 + 문구)
- [ ] 모든 사진 `alt`, 장식용 이미지는 `alt=""`
- [ ] 제목 순서(h1 → h2 → h3) 건너뛰지 않기, 페이지당 h1 1개
- [ ] 입력창마다 `<label>` 연결
- [ ] 줌 200%에서도 가로 스크롤 없음

---

## 12. 공통 CSS 변수 (common.css 작성 기준)

```css
:root {
  /* Color — palette */
  --color-ink-900: #18140A;
  --color-ink-800: #231909;
  --color-gray-700: #585850;
  --color-gray-600: #7D7B73;
  --color-gray-500: #9C9B92;
  --color-gray-300: #C3C4C0;
  --color-paper-50: #F9F9F8;
  --color-white: #FFFFFF;
  --color-tan-700: #6B5A41;
  --color-tan-600: #86755C;
  --color-tan-400: #A49A83;
  --color-tan-200: #D2C0A2;
  --color-tan-100: #EFE8DC;
  --color-error: #A8432F;
  --color-success: #3F6B47;

  /* Color — roles */
  --bg-page: var(--color-paper-50);
  --bg-surface: var(--color-white);
  --bg-subtle: var(--color-tan-100);
  --bg-inverse: var(--color-ink-900);
  --text-primary: var(--color-ink-900);
  --text-secondary: var(--color-gray-700);
  --text-disabled: var(--color-gray-600);
  --text-accent: var(--color-tan-700);
  --text-inverse: var(--color-paper-50);
  --border-default: var(--color-gray-300);
  --border-strong: var(--color-ink-900);
  --accent: var(--color-tan-600);

  /* Typography (mobile) */
  --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  --text-display: 36px;
  --text-h1: 30px;
  --text-h2: 24px;
  --text-h3: 20px;
  --text-body-lg: 17px;
  --text-body: 15px;
  --text-small: 13px;
  --text-caption: 12px;

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --space-9: 96px; --space-10: 128px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: 16px;
  --grid-gap: 16px;
  --section-gap: var(--space-8);
  --header-height: 56px;

  /* Shape */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 999px;
  --border-width: 1px;
  --shadow-sm: 0 1px 2px rgba(24, 20, 10, 0.06);
  --shadow-md: 0 8px 24px rgba(24, 20, 10, 0.08);

  /* Motion */
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 400ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
    --grid-gap: 24px;
    --section-gap: var(--space-9);
  }
}

@media (min-width: 1024px) {
  :root {
    --text-display: 64px;
    --text-h1: 48px;
    --text-h2: 36px;
    --text-h3: 24px;
    --text-body-lg: 18px;
    --text-body: 16px;
    --text-small: 14px;
    --container-padding: 48px;
    --section-gap: var(--space-10);
    --header-height: 72px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 변경 이력

| 날짜 | 내용 | 작성 |
| --- | --- | --- |
| 2026-10-20 | 최초 작성 | 현우 |
