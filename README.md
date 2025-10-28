<div align="center">

# 🎥 Bound  
### _A Minimalist YouTube Clone with Limited Viewing Experience_

> **Node.js**, **Express**, **MongoDB**, 그리고 **ES6** 를 이용한
> 10개의 영상을 보면 영상이 자동으로 삭제되는 “한정된 영상 공유 플랫폼”  

🔗 **Live Demo:** [youtube-clone-bound-2025.fly.dev](https://youtube-clone-bound-2025.fly.dev/)

</div>

---

## 📖 Table of Contents
- [📚 프로젝트 개요](#-프로젝트-개요)
- [🧠 제작 동기](#-제작-동기)
- [⚙️ 기술 스택](#️-기술-스택)
- [💡 주요 기능](#-주요-기능)
- [🧩 프로젝트 구조](#-프로젝트-구조)
- [🏗️ 아키텍처 개요 (MVC)](#️-아키텍처-개요-mvc)
- [🔄 데이터 흐름] (#-데이터-흐름)

---

## 🖼️ Preview

<div align="center">
<details>
  <summary>🖼️ Watch Preview</summary>
  
### landing page
<img width="700" alt="스크린샷 2025-10-28 오전 11 45 07" src="https://github.com/user-attachments/assets/1e1e130e-a14b-4e6a-9592-460d9f02cbf2" />

### /videos
<img width="700" alt="스크린샷 2025-10-28 오전 11 49 23" src="https://github.com/user-attachments/assets/4c211df8-095d-45bc-8b9d-260fa05c59c8" />
videos 상세 및 댓글
<img width="700" alt="스크린샷 2025-10-28 오후 4 27 31" src="https://github.com/user-attachments/assets/b76f6267-2616-48a5-8949-2a5f372b96de" />

### /videos/upload
<img width="700" alt="youtube-clone-bound-2025 fly dev_videos_upload" src="https://github.com/user-attachments/assets/2841ee05-103f-4821-9302-93e519bc70bb" />

### /videos/{video_num}/edit
<img width="700" alt="스크린샷 2025-10-28 오후 4 29 50" src="https://github.com/user-attachments/assets/43c8e8e3-6cd8-471c-9305-855f4d6a1c72" />

### /users
<img width="700" alt="스크린샷 2025-10-28 오후 4 31 03" src="https://github.com/user-attachments/assets/74f9627b-0bf6-4893-931a-4d49090c327a" />

### /users/edit
<img width="700" alt="스크린샷 2025-10-28 오후 4 31 51" src="https://github.com/user-attachments/assets/4fdc5f33-39c0-43e1-bbfe-b87fed315b58" />



</details>
</div>


## 📚 프로젝트 개요

**Bound**는 단순한 유튜브 클론형태를 넘어,
시청 제한이 있는 **새로운 형태의 영상 공유 플랫폼**을 목표로 합니다.  
시청자가 10개의 영상을 보면 해당 영상이 자동 삭제되며,  
“한정된 콘텐츠 경험”을 제공합니다.

---

## 🧠 제작 동기

자바스크립트에 대한 **이해도 확장**과  
직접적인 **풀스택 개발 경험**을 목표로 시작한 프로젝트입니다.  
라우팅, 세션 관리, 데이터베이스 모델링을 직접 구현하며  
서버 사이드 로직의 흐름을 깊게 이해할 수 있었습니다.

---

## ⚙️ 기술 스택

<div align="center">

### 🧩 Backend  
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

### 💅 Frontend  
![Pug](https://img.shields.io/badge/Pug-FFD43B?style=for-the-badge&logo=pug&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

### 🧰 Dev Tools  
![Webpack](https://img.shields.io/badge/Webpack-1C78C0?style=for-the-badge&logo=webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

</div>

---

## 💡 주요 기능

| 기능 | 설명 |
|------|------|
| 🔑 **로그인 / 회원가입** | 일반 계정 + GitHub OAuth 로그인 지원 |
| 🎥 **영상 업로드** | 로컬 업로드 및 카메라 촬영 기능 |
| 🔍 **검색 기능** | 영상 제목 기반 검색 |
| ⏳ **자동 삭제 시스템** | 영상이 10회 이상 시청되면 자동 삭제 |
| 👤 **프로필 관리** | “Bound”된 시청 횟수 및 업로드 내역 확인 |
| 💬 **댓글 기능** | 영상별 댓글 작성 및 삭제 가능 |

---

## 🧩 프로젝트 구조

```plaintext
src/
├── server.js         # Express 서버 설정 및 실행
├── routers/          # 라우팅 로직 (root, user, video, api)
│   ├── rootRouter.js
│   ├── userRouter.js
│   ├── videoRouter.js
│   └── apiRouter.js
├── controllers/      # 요청 처리 로직 (비즈니스 로직)
│   ├── userController.js
│   └── videoController.js
├── models/           # Mongoose 스키마 정의
├── views/            # Pug 템플릿 파일
├── middlewares.js    # 인증 / 업로드 등 공통 미들웨어
└── assets/           # 정적 파일 (CSS, JS, 이미지)
```

## 🏗️ 아키텍처 개요 (MVC)

Model — 데이터 관리 (MongoDB, Mongoose)
View — UI 렌더링 (Pug)
Controller — 비즈니스 로직 처리
Router — URL 경로 분리 및 Controller 호출


## 🔄 데이터 흐름

```plaintext
Client Request
  ↓
Middleware (session, morgan, auth 등)
  ↓
Router (userRouter / videoRouter 등)
  ↓
Controller (비즈니스 로직 처리)
  ↓
Model (DB 조회 및 수정)
  ↓
Controller → View (Pug 렌더링)
  ↓
Client Response
```

