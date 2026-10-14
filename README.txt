주지원 개인 프로필 웹사이트

로컬 실행
1. Node.js 22 이상이 설치된 환경에서 이 폴더를 터미널로 엽니다.
2. npm start (또는 npm run dev)
3. http://127.0.0.1:3000 으로 접속합니다.
4. 종료하려면 Ctrl+C를 누릅니다.

외부 패키지가 없으므로 npm install은 필요하지 않습니다.
다른 포트 사용: PORT=3001 npm start (macOS/Linux)
HTML/CSS/JavaScript 수정 후 브라우저를 새로고침하면 반영됩니다.
서버는 실행 위치와 관계없이 public 폴더만 제공합니다.

폴더 구조
public/
  index.html           시작 페이지
  styles.css           기존 디자인 CSS
  script.js            기존 페이지 기능
  assets/              이미지 및 예시 이력서
server.cjs             Node.js 기본 모듈을 사용하는 로컬 정적 서버
package.json           실행 명령 (의존성 없음)
vercel.json            정적 배포 설정
source.css             기존 CSS 생성용 소스 (실행 시 필요 없음)
tailwind.config.cjs    기존 CSS 생성 설정 (public/index.html 참조)
stitch_modern_personal_portfolio_website/    보존된 Stitch 원본

Vercel 정적 배포
프로젝트 루트는 package.json과 vercel.json이 있는 현재 폴더로 지정하세요.
Framework Preset: Other
Build Command: 비워 둠
Install Command: 비워 둠
Output Directory: public
위 설정은 vercel.json에 저장되어 있습니다.
Vercel에서는 npm start 또는 Node.js 서버를 실행하지 않고 public 파일만 정적으로 제공합니다.
실제 배포는 아직 수행하지 않았습니다.
공식 설정 문서: https://vercel.com/docs/project-configuration/vercel-json

기존 디자인과 페이지 기능은 변경하지 않았습니다.
Google Fonts와 Material Symbols는 기존과 동일하게 온라인으로 불러옵니다.

수정 안내
이름, 소개, 전문 분야, 프로젝트 제목, 이메일은 제공된 정보를 반영했습니다. 사진, 경력·성과 수치, 프로젝트 세부 설명과 링크는 예시입니다.
프로젝트 카드는 example.com 예시 URL로 연결됩니다. public/index.html의 project-card 링크를 실제 URL로 변경하세요.
이메일 변경 시 public/index.html과 public/script.js의 aczacz1014@gmail.com을 모두 변경하세요.
소셜 링크는 서비스 홈페이지이며 이력서는 예시 텍스트 파일입니다.
문의 양식은 기본 메일 앱의 작성창을 엽니다. 메일 앱에서 직접 전송해야 합니다.

