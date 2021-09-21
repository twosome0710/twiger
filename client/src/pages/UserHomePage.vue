<template>
  <div class="wrap">
    <SideMenu />
    <main id="main" class="content_area user_home">
      <h2 class="title">홈</h2>
      <div class="container">
        <TweetForm />
      </div>
      <div class="container greeting_area">
        <p class="head_sentence">트위저에 오신 것을 환영합니다!</p>
        <p class="detail_sentence">
          전 세계에서 무슨 일이 일어나고 있는지 알아보기에 최적인 장소입니다.
          지금 팔로우할 사람과 주제를 찾아보세요.
        </p>
        <router-link to="/connect" class="link_start">
          시작해봅시다!
        </router-link>
      </div>
    </main>
  </div>
</template>
<script>
import SideMenu from "@/components/layout/TheSideMenu.vue";
import TweetForm from "@/components/Tweet/TweetForm.vue";

export default {
  name: "UserHome",
  components: { SideMenu, TweetForm },
};
</script>

<style src="@/assets/scss/pages/user-home.scss" lang="scss" scoped></style>
