<template>
  <header class="main_header">
    <div class="fixed_container">
      <h1 class="title">
        <router-link to="/home" class="link">
          <img
            src="@/assets/images/logo_blue.png"
            alt="트위저"
            width="30"
            class="twiger_logo"
          />
        </router-link>
      </h1>
      <nav class="nav_area">
        <div class="link_wrap">
          <router-link
            to="/home"
            class="link"
            :class="{ selected: isCurRouteName('UserHome') }"
          >
            <div class="container">
              <IconHomeActive class="icon_home_selected" />
              <IconHome class="icon_home" />
              홈
            </div>
          </router-link>
        </div>
        <div class="link_wrap">
          <router-link
            to="#"
            class="link"
            :class="{ selected: isCurRouteName('Explore') }"
          >
            <div class="container">
              <IconSharp class="icon_sharp" />탐색하기
            </div>
          </router-link>
        </div>
        <div class="link_wrap">
          <router-link
            to="#"
            class="link"
            :class="{ selected: isCurRouteName('Profile') }"
          >
            <div class="container">
              <IconProfile class="icon_profile" />프로필
            </div>
          </router-link>
        </div>
      </nav>
      <TweetButton type="button" class="btn_tweet">트윗하기</TweetButton>
      <div class="account_area">
        <button type="button" class="btn_account">
          <div class="profile_area">
            <img
              src="@/assets/images/default_profile.png"
              alt=""
              width="40"
              class="img_profile"
            />
          </div>
          <div class="name_area">
            <span class="text_name">유저 이름</span>
            <span class="text_id">@이메일 앞부분</span>
          </div>
          <IconDots class="icon_more" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import IconHome from "@/components/icons/IconHome.vue";
import IconHomeActive from "@/components/icons/IconHomeActive.vue";
import IconSharp from "@/components/icons/IconSharp.vue";
import IconProfile from "@/components/icons/IconProfile.vue";
import TweetButton from "@/components/common/BaseSolidButton.vue";
import IconDots from "@/components/icons/IconDots.vue";

import { useRoute } from "vue-router";

export default {
  name: "SideMenu",
  components: {
    IconSharp,
    IconHome,
    IconHomeActive,
    IconProfile,
    TweetButton,
    IconDots,
  },
  setup() {
    const route = useRoute();
    const isCurRouteName = (name) => {
      return route.name === name;
    };

    return {
      isCurRouteName,
    };
  },
};
</script>
