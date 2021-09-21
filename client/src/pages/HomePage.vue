<template>
  <section class="home_unauth">
    <div class="guide_area">
      <div class="logo_area">
        <img
          src="@/assets/images/logo_blue.png"
          alt="트위저 로고"
          width="45"
          class="logo"
        />
      </div>
      <p class="introduction_text">지금 일어나고 있는 일</p>
      <p class="signup_text">오늘 트위터에 가입하세요.</p>
      <router-link to="/signup" class="signup_link">가입하기</router-link>
      <router-link to="/login" class="login_link">로그인</router-link>
    </div>
    <div class="background_area">
      <img
        src="@/assets/images/logo_white.png"
        alt="트위저 로고"
        width="300"
        class="logo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style src="@/assets/scss/pages/home.scss" lang="scss" scoped></style>
