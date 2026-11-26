// 웹앱 스토어 접속 설정. Firebase 는 게임 갤러리와 같은 프로젝트를 쓰고, 도움돼요는 appLikes 컬렉션에 따로 저장합니다.
// Firebase 웹 설정값은 공개되어도 되는 값입니다(접근 통제는 firestore.rules 가 합니다).
window.APP_CONFIG = {
  allowedDomain: "dongshin.ms.kr",
  playBase: "https://dongshin-app-2026-play.vercel.app/",
  firebase: {
    apiKey: "AIzaSyAQ_JXpQgeM54aj--KQ1lIQZJSY2S1FKfg",
    authDomain: "dongshin-game-2026.firebaseapp.com",
    projectId: "dongshin-game-2026",
    appId: "1:355943894723:web:008e36cfa8b6a45ba65c76"
  }
};
