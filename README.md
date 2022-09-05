# ✔️ Fruitte Store

## 📌 프로젝트 소개

Fruitte의 스토어 사용자, 관리자 리뉴얼 개발

사용자 : 상단 Client 카테고리 <br/>
관리자 : 상단 Admin 카테고리

## 📌 배포

https://fruitte-renewal-fe-5.netlify.app/
<br />

## 📌 팀원 소개

<br/>

<table align="center">
<tr >
<td align="center"><a href="https://github.com/LoggingCo"><img  src="https://avatars.githubusercontent.com/LoggingCo" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/sming0112"><img src="https://avatars.githubusercontent.com/sming0112" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/YSBINN"><img src="https://avatars.githubusercontent.com/YSBINN" width="100%" height="50%" /></a></td>
<td align="center"><a href="https://github.com/Leejha"><img src="https://avatars.githubusercontent.com/Leejha" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/vnfdusdl"><img src="https://avatars.githubusercontent.com/vnfdusdl" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/seriparkdev"><img src="https://avatars.githubusercontent.com/seriparkdev" width="100%"  height="50%"/></a></td>
</tr>
<tr>
<td align="center"><b>김성용</b></td>
<td align="center"><b>성민규</b></td>
<td align="center"><b>임상빈</b></td>
<td align="center"><b>이재하</b></td>
<td align="center"><b>김초연</b></td>
<td align="center"><b>박세리</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

## 📌프로젝트 과정 소개

[Git전략](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/Git-%EC%A0%84%EB%9E%B5)

[커밋 컨벤션 및 코딩 컨벤션](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
├─assets
│  ├─client
│  └─img
├─components
│  ├─admin
│  │  ├─login
│  │  ├─prod
│  │  │  ├─prodImage
│  │  │  │  └─dropZone
│  │  │  ├─prodinfo
│  │  │  │  ├─detail
│  │  │  │  └─image
│  │  │  └─table
│  │  └─prodList
│  ├─client
│  │  ├─footer
│  │  ├─header
│  │  ├─orders
│  │  └─productList
│  └─common
│      ├─button
│      ├─input
│      └─layout
│          └─adminLayout
│              ├─header
│              └─side
│                  ├─list
│                  └─profile
├─hooks
├─mocks
├─pages
│  ├─admin
│  └─client
│      ├─main
│      ├─order
│      ├─orders
│      └─prodDetail
├─services
│  ├─admin
│  └─client
├─styles
└─utils
```

</details>

## 📌기술 스택

![](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📌기능 목록 명세

### ✔ MSW(Mock Service Worker)을 활용한 가상 데이터 API 적용

-   MSW를 활용하여 Mock Data를 주고 받을 수 있도록 최대한 실무 환경에 적용 가능하도록 Mock Rest Server 서비스하였습니다.

    -   MSW 적용 목록 <br/>

        -   사용자

            -   상품 전체 조회 (GET: /api/goods&page=?)
            -   상품 상세조회(주문내역 조회) (GET: /api/goods/:goodsId)

        -   관리자

            -   관리자 로그인 (POST: /api/admin/user)
            -   관리자 상품관리 목록 조회 (GET: /api/admin/goods&page=?)
            -   관리자 상품꽌리 노출 수정 (PUT: /api/admin/goods/:goodsId/showflag)
            -   관리자 상품관리 목록 삭제 (DELETE /api/admin/goods/:goodsId)

### ✔ fakeJS를 활용한 유연한 Mock Data 구현

-   fakerJs를 활용하여 MSW를 이용한 Mock Data 통신 시 실제 데이터 환경과 비슷하게 구축하여 매번 다른 정보를 받아올 수 있도록 하였습니다. 이는 페이지네이션과 관련하여 실제 환경과 비슷한 데이터 통신을 구현할 수 있었습니다.

### ✔ 스토어 상품목록 조회

-   페이지당 최대 32개 상품까지 조회
-   상품을 클릭시 해당 상품 페이지 이동
-   페이지네이션을 이용하여 효율적인 페이지 탐색
-   좋아요와 리뷰 갯수 시각화에 따른 유저 경험 향상

### ✔ 스토어 상품 상세조회

-   상품 리스트 페이지에서 상품 클릭시 해당 상품 상세 페이지로 이동
-   구매하기 버튼 클릭시 해당 상품 정보를 session storage에 저장
    -   실제 구매 환경과 유사하게 구현

### ✔ 스토어 상품 주문

-   UI/UX를 기반으로 스토어 상품 주문 레이아웃을 구성하고 디자인을 함.
-   세션 스토리지에 담긴 주문내역 데이터를 기반으로 데이터 처리
-   주문하기를 누르면 주문 내역확인 페이지로 이동

### ✔ 스토어 상품 주문 내역확인

-   UI/UX를 기반으로 스토어 상품 주문 레이아웃을 구성하고 디자인을 함.
-   주문 내역을 컴포넌트로 분리하여 구성
-   msw를 사용하여 코드 내 axios로 목데이터를 가져옴

### ✔ 관리자 로그인 페이지

-   관리자는 관리자 계정으로 로그인할 수 있도록 구현하였습니다.
-   관리자 로그인

```shell
  ID: test
  PW: 1234
```

### ✔ 관리자 상품목록 등록 페이지

-   이미지 등록 시 드랍존을 구현하여 보다 편리하게 이미지 업로드가 가능하도록 하였습니다.
-   이미지 등록 시 최대 10개 미리보기를 구현하였습니다.
-   상품 옵션 및 상품 제공 공시를 유연하게 받아올 수 있도록 테이블로 추가할 수 있도록 하였습니다.

### ✔ 관리자 상품목록 관리 페이지

-   상품 전체 관리를 msw와 fakerJS를 활용하여 실제 데이터를 불러오는 것과 같도록 구현하였습니다.
-   상품 노출 비노출 상태 변경을 구현하였습니다.
-   상품 노출,비노출 변경시 노출 현재 상태를 확인할 수 있습니다.
-   상품 목록 삭제를 구현하여 상품관리 목록에서 삭제할 수 있습니다.
-   페이지네이션을 구현하여 페이지 클릭 시 다른 정보를 받아볼 수 있도록 구현하였습니다

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/wanted-pre-onboarding-frontend-6/Assign-2.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm run start
```
