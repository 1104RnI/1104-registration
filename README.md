# 1104-registration

1104-registration은 https://1104.kr 사이트의 회원가입 시 추가 정보를 입력받기 위한 싱글 페이지 웹 애플리케이션입니다. 회원가입 절차의 일부로 사용자로부터 필요한 부가 정보를 수집하고, 서버로 전송하는 기능을 제공합니다.

1104-registration is a single-page web application for collecting additional information from users during the registration process on the https://1104.kr website. As part of the registration procedure, it collects necessary supplementary information from users and sends it to the server.

---

## 배포 버전 (Deployed Version)

현재 배포 중인 버전은 다음 링크에서 확인할 수 있습니다.
The currently deployed version can be accessed via the following link.

[1104-registration 배포 버전 (Deployed Ver.)](https://1104-registration.netlify.app)

---

## 주요 기능 (Key Features)

- 사용자 추가 정보 입력 폼 (User additional information input form)
- 입력 정보 유효성 검사 (Input data validation)
- 사용자 정보 서버로 전송 (Sending user information to the server)

---

## 설치 및 실행 방법 (Installation and Execution)

1. 레포지토리 클론 (Clone the repository)

```
git clone https://github.com/1104RnI/1104-registration.git
```

2. 패키지 설치 (Install packages)

```
cd 1104-registration
yarn install
```

3. 프로젝트 실행 (Run the project)

```
yarn start
```

---

## 사용 기술 및 프레임워크 (Technologies and Frameworks Used)

- TypeScript
- React
- Zustand (상태 관리) (State management)
- Axios (서버 통신) (Server communication)
- Framer Motion (애니메이션) (Animation)
- Styled Components (스타일링) (Styling)

---

## 파일 구조 (File Structure)

```
1104-registration/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── store/
│   └── App.tsx
└── README.md
```

---

## 테스트 및 빌드 방법 (Testing and Building)

- 테스트 실행 (Run tests)

```
yarn test
```

- 프로덕션 빌드 생성 (Create a production build)

```
yarn build
```

---

## 서버 통신 (Server Communication)

- 사용자가 입력한 정보는 Axios를 통해 서버 API로 전송됩니다. (User-entered information is sent to the server API via Axios.)
- 서버 응답에 따라 적절한 처리를 수행합니다. (Appropriate processing is performed according to the server response.)

---

## 라이선스 (License)

Copyright (c) 2024 1104 R&I. All rights reserved.

본 프로젝트에는 다음의 오픈 소스 라이브러리가 사용되었습니다:
(The following open source libraries were used in this project:)

- React (MIT 라이선스) (MIT License) - https://github.com/facebook/react/blob/main/LICENSE
- Axios (MIT 라이선스) (MIT License) - https://github.com/axios/axios/blob/master/LICENSE
- Framer Motion (MIT 라이선스) (MIT License) - https://github.com/framer/motion/blob/main/LICENSE.md
- Lottie React (MIT 라이선스) (MIT License) - https://github.com/airbnb/lottie-react/blob/master/LICENSE
- Styled Components (MIT 라이선스) (MIT License) - https://github.com/styled-components/styled-components/blob/main/LICENSE
- Zustand (MIT 라이선스) (MIT License) - https://github.com/pmndrs/zustand/blob/main/LICENSE
- Font Awesome Free (Font Awesome Free 라이선스) (Font Awesome Free License) - https://fontawesome.com/license/free

사용된 라이브러리의 라이선스 조건을 준수하며, 해당 라이브러리의 라이선스 및 저작권 고지는 프로젝트의 소스 코드 및 배포물에 포함되어 있습니다.
(The license terms of the used libraries are complied with, and the license and copyright notices of those libraries are included in the project's source code and distributions.)

---

## 개발자 정보 (Developer Information)

- 회사명 (Company): 1104 R&I
- 이메일 (Email): 1104.biz.kr@5010.tech
- 웹사이트 (Website): https://1104.kr
- 기여자 (Contributors):
  - ED (ed@5010.tech)
  - Jaden (jaden@5010.tech)
