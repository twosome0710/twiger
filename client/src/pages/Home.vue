<template>
  <section class="home_unauth">
    <div class="guide_area">
      <div class="logo_area">
        <img
          src="../assets/images/logo_blue.png"
          alt="트위저 로고"
          width="45"
          class="logo"
        />
      </div>
      <p class="introduction_text">지금 일어나고 있는 일</p>
      <p class="signup_text">오늘 트위터에 가입하세요.</p>
      <a href="/signup" class="signup_link">가입하기</a>
      <a href="/login" class="login_link">로그인</a>
    </div>
    <div class="background_area">
      <img
        src="../assets/images/logo_white.png"
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

<style>
.home_unauth {
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
}

.home_unauth .guide_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 45vw;
  padding: 36px;
}

.home_unauth .guide_area .introduction_text {
  margin: 48px 0;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8.4rem;
  letter-spacing: -1.2px;
}

.home_unauth .guide_area .signup_text {
  margin-bottom: 32px;
  font-size: 3.1rem;
  font-weight: 700;
  line-height: 3.6rem;
}

.home_unauth .guide_area .signup_link {
  display: block;
  max-width: 380px;
  min-width: 48px;
  height: 46px;
  border-radius: 24px;
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 46px;
  text-align: center;
}

.home_unauth .guide_area .signup_link:hover {
  text-decoration: none;
  background-color: #1a91da;
  transition: background-color 0.2s;
}

.home_unauth .guide_area .signup_link:focus {
  background-color: #1a91da;
  box-shadow: #8ed0f9 0 0 0 2px;
  outline: none;
  transition: background-color 0.2s box-shadow 0.2s;
}

.home_unauth .guide_area .login_link {
  display: block;
  max-width: 380px;
  min-width: 48px;
  height: 46px;
  margin-top: 20px;
  border: 1px solid #1da1f2;
  border-radius: 24px;
  color: #1da1f2;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 46px;
  text-align: center;
}

.home_unauth .guide_area .login_link:hover {
  text-decoration: none;
  background-color: rgba(29, 161, 242, 0.1);
  transition: background-color 0.2s;
}

.home_unauth .guide_area .login_link:focus {
  background-color: rgba(29, 161, 242, 0.1);
  box-shadow: #8ed0f9 0 0 0 2px;
  outline: none;
  transition: background-color 0.2s box-shadow 0.2s;
}

.home_unauth .background_area {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  padding: 32px;
  background: #74cafe
    url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png) no-repeat
    50% 50%;
  background-size: cover;
}

.home_unauth .background_area .logo {
  flex: 1;
  max-width: 400px;
}
</style>
