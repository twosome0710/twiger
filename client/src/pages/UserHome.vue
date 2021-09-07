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
import SideMenu from "@/components/common/SideMenu.vue";
import TweetForm from "@/components/tweet/TweetForm.vue";

export default {
  name: "UserHome",
  components: { SideMenu, TweetForm },
};
</script>

<style lang="scss">
@charset "utf-8";

.user_home {
  .title {
    padding: 0 16px;
    border-bottom: 1px solid #eff3f4;
    font-size: 2rem;
    line-height: 53px;
  }

  .container + .container {
    border-top: 1px solid #eff3f4;
  }

  .greeting_area {
    padding: 32px 132px;

    .head_sentence {
      color: #0f1419;
      font-size: 3.1rem;
      font-weight: 800;
      line-height: 3.6rem;
    }

    .detail_sentence {
      margin-top: 8px;
      color: #536471;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2rem;
    }

    .link_start {
      display: inline-block;
      width: 174px;
      height: 52px;
      margin-top: 28px;
      border-radius: 26px;
      background-color: #1da1f2;
      color: #fff;
      font-size: 1.7rem;
      font-weight: 700;
      line-height: 52px;
      text-align: center;

      &:hover {
        text-decoration: none;
        background-color: #1a91da;
        transition: background-color 0.2s;
      }

      &:focus {
        background-color: #1a91da;
        box-shadow: #8ed0f9 0 0 0 2px;
        outline: none;
        transition: background-color 0.2s box-shadow 0.2s;
      }
    }
  }
}
</style>
