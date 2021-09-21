<template>
  <div class="user_summary">
    <router-link to="#" class="link">
      <div class="profile_area">
        <img
          src="@/assets/images/default_profile.png"
          alt=""
          width="48"
          class="img"
        />
      </div>
      <div class="info_area">
        <div class="follow_area">
          <div class="name_area">
            <div role="button" tabindex="0" class="nickname">
              {{ user.nickname }}
            </div>
            <div class="user_id">@{{ user.userId }}</div>
          </div>
          <div class="btn_area">
            <SolidButton label="팔로우" class="btn_follow" />
          </div>
        </div>
        <p class="introduction" v-show="fluent">{{ user.introduction }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import SolidButton from "@/components/common/BaseSolidButton.vue";

export default {
  name: "UserSummary",
  props: {
    fluent: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    SolidButton,
  },
};
</script>

<style
  src="@/assets/scss/components/user/user-summary.scss"
  lang="scss"
  scoped
></style>
