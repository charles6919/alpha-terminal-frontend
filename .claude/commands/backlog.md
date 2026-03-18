# Command: /backlog

## 목적

사용자가 Backlog Title을 입력하면  
Frontend Agile Backlog를 생성한다.

Backlog는 다음 두 가지 타입을 가진다.

- Behavior Backlog
- UI Backlog

이 Command는 다음 규칙을 사용한다.

.claude/skills/FRONTEND_BACKLOG_GENERATOR.md

---

## 중요 규칙 (Strict)

반드시 **Behavior Driven Backlog Generator Skill**을 사용한다.

다음 형식은 절대 생성하지 않는다.

- Given
- When
- Then
- Scenario
- Test Case
- Component specification
- Props 정의
- API 설계

이 Command는 **테스트 시나리오 생성 명령이 아니다.**

반드시 **Backlog 형식으로만 출력한다.**

---

## 사용 방법

/backlog <Backlog Title>

예시

/backlog 인증되지 않은 사용자가 게시물 리스트를 조회한다

또는

/backlog 게시물 리스트 페이지가 게시물 목록을 표시한다

---

## 동작 규칙

1. 사용자가 입력한 Backlog Title을 읽는다
2. Actor를 분석하여 Backlog Type을 결정한다

Actor가 다음일 경우

User Actor 또는 System Actor  
→ Behavior Backlog

UI Actor  
→ UI Backlog

3. Skill 규칙을 적용하여 Backlog를 생성한다

---

## 출력 형식

Backlog Type  
Behavior Backlog 또는 UI Backlog

Backlog Title  
<입력된 제목>

Success Criteria

- ...
- ...
- ...
- ...

Todo

1. ...
2. ...
3. ...
4. ...
5. ...

Todo는 **최대 5개까지만 작성한다.**

---

## Title 검증 규칙

Title은 반드시 다음 구조여야 한다.

Actor + 행동 + 대상

Actor는 다음 중 하나여야 한다.

### User Actor

- 인증된 사용자
- 인증되지 않은 사용자
- 관리자
- 시스템 관리자
- 게스트 사용자

### System Actor

- 애플리케이션
- 시스템
- 백엔드 서버
- API 서버

### UI Actor

- 로그인 페이지
- 게시물 리스트 페이지
- 회원가입 화면
- 관리자 대시보드

---

## 규칙 위반 처리

Title이 규칙을 만족하지 않으면  
Backlog를 생성하지 않고 다음 가이드를 출력한다.

Backlog Title이 규칙을 만족하지 않습니다.

Backlog Title은 다음 형식을 따라야 합니다.

Actor + 행동 + 대상

예

인증된 사용자가 게시물을 생성한다  
인증되지 않은 사용자가 게시물 리스트를 조회한다  
게시물 리스트 페이지가 게시물 목록을 표시한다