# Skill: Frontend Backlog Generator

## 목적

Backlog Title을 입력하면 **행동 기반 Frontend Agile Backlog**를 생성한다.

Frontend Backlog는 다음 두 가지 타입을 가진다.

- Behavior Backlog
- UI Backlog

출력 구조는 다음을 따른다.

Backlog Type  
Backlog Title  
Success Criteria  
Todo

이 Skill은 **Behavior Driven Backlog 생성기**이며  
구현 아키텍처는 **CLAUDE.md의 규칙을 따른다.**

---

# Backlog Type

Backlog는 반드시 다음 두 가지 중 하나여야 한다.

## Behavior Backlog

사용자 행동 또는 시스템 동작을 처리하는 로직 Backlog

예

- 데이터 요청
- 상태 처리
- 인증 처리
- API 호출
- 상태 관리

---

## UI Backlog

사용자 인터페이스 표시 및 상호작용 Backlog

예

- 화면 표시
- UI 구성
- 사용자 입력 처리
- UI 상태 표시

---

# Backlog Title 규칙

Backlog Title은 반드시 다음 구조를 따른다.

Actor + 행동 + 대상

---

# Actor 규칙

Actor는 다음 세 가지 중 하나여야 한다.

---

# User Actor

사용자 행동을 표현할 때 사용한다.

예

- 인증된 사용자
- 인증되지 않은 사용자
- 관리자
- 시스템 관리자
- 게스트 사용자

권한 상태가 없는 **"사용자"** 는 사용할 수 없다.

---

# System Actor

시스템 동작을 표현할 때 사용한다.

예

- 애플리케이션
- 시스템
- 백엔드 서버
- API 서버

---

# UI Actor

UI 표시 동작을 표현할 때 사용한다.

예

- 로그인 페이지
- 게시물 리스트 페이지
- 회원가입 화면
- 관리자 대시보드

---

# Backlog Title 예시

## Behavior Backlog

인증된 사용자가 게시물을 생성한다  
인증되지 않은 사용자가 게시물 리스트를 조회한다  
애플리케이션이 API 서버에 게시물 데이터를 요청한다

---

## UI Backlog

로그인 페이지가 로그인 입력 폼을 표시한다  
게시물 리스트 페이지가 게시물 목록을 표시한다  
회원가입 화면이 회원가입 입력 폼을 표시한다

---

# 잘못된 Title 예시

다음 Title은 생성하지 않는다.

사용자가 게시물을 생성한다  
게시물 생성 기능 구현  
게시판 API 개발  
인증 기능 개발

이 경우 다음 가이드를 출력한다.

Backlog Title이 규칙을 만족하지 않습니다.

Backlog Title은 다음 형식을 따라야 합니다.

Actor + 행동 + 대상

예

인증된 사용자가 게시물을 생성한다  
게시물 리스트 페이지가 게시물 목록을 표시한다

---

# Success Criteria 작성 규칙

Success Criteria는 **행동 성공 여부를 판단할 수 있어야 한다.**

Backlog Type에 따라 작성 방식이 다르다.

---

# Behavior Backlog Success Criteria

다음 정보를 반드시 포함해야 한다.

- 입력 정보
- 시스템 처리
- 출력 정보

또한 반드시 **관찰 가능한 결과**로 작성한다.

구성

입력 조건  
사용자가 전달하는 요청 정보

시스템 처리  
시스템이 수행하는 로직

출력 결과  
사용자가 받는 응답 데이터

---

# UI Backlog Success Criteria

UI Backlog는 다음 기준으로 작성한다.

- 화면 표시
- 사용자 입력 가능 여부
- UI 상태 표시
- 사용자 피드백

모든 결과는 **사용자가 화면에서 관찰 가능한 상태**여야 한다.

예

- 로그인 페이지가 이메일 입력 필드를 표시한다
- 로그인 페이지가 비밀번호 입력 필드를 표시한다
- 로그인 버튼이 화면에 표시된다
- 입력 오류가 발생하면 오류 메시지가 표시된다

---

# Todo 작성 규칙

Todo는 **행동 구현 단위 작업**으로 작성한다.

Todo는 다음 기준을 따른다.

- 기능 구현 중심
- 행동 단위 구현
- UI 동작 구현

Todo는 **최대 5개까지만 작성한다.**

---

# Todo 금지 규칙

다음 항목은 Todo로 작성하면 안 된다.

Controller 작성  
Service 작성  
Repository 작성  
DTO 작성  
Adapter 작성  
Infrastructure 작성

Frontend에서는 다음도 금지한다.

Component 작성  
Hook 작성  
Store 작성

Todo는 반드시 **행동 구현 작업**이어야 한다.

예

- 게시물 리스트 조회 요청을 구현한다
- 게시물 리스트 UI를 화면에 표시한다
- 로그인 입력 검증 로직을 구현한다

---

# 출력 형식

출력은 반드시 다음 형식을 따른다.

Backlog Type  
Behavior Backlog 또는 UI Backlog

Backlog Title  
<입력된 제목>

Success Criteria

- ...
- ...
- ...

Todo

1. ...
2. ...
3. ...
4. ...
5. ...

Todo는 필요한 만큼만 작성하며  
**5개를 초과할 수 없다.**

---

# 최종 규칙

Backlog Title은 반드시 **Actor + 행동 + 대상 구조**여야 한다.

Actor는 다음 중 하나여야 한다.

- User Actor
- System Actor
- UI Actor

Backlog는 반드시 **Behavior Backlog 또는 UI Backlog**여야 한다.

Success Criteria는 **관찰 가능한 결과**여야 한다.

Todo는 **행동 구현 단위로 작성한다.**

Todo는 **최대 5개까지만 작성한다.**