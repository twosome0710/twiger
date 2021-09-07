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
import SolidButton from "@/components/common/SolidButton.vue";

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

<style lang="scss">
.user_summary {
  .link {
    display: flex;
    padding: 16px;

    &:hover,
    &.hover {
      background-color: rgba(0, 0, 0, 0.03);
      text-decoration: none;
      transition: background-color 0.2s;
    }

    &:focus {
      background-color: rgba(0, 0, 0, 0.03);
      box-shadow: #8ecdf8 0 0 0 2px inset;
      outline: none;
      transition: background-color 0.2s box-shadow 0.2s;
    }

    .profile_area {
      flex: 0 0 48px;
      overflow: hidden;
      position: relative;
      height: 48px;
      margin-right: 12px;
      border-radius: 50%;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid rgba(0, 0, 0, 0.07);
        border-radius: 50%;
      }

      &:hover:after {
        background-color: rgba(26, 26, 26, 0.15);
        transition: background-color 0.2s;
      }
    }

    .info_area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .follow_area {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name_area {
          min-width: 0;

          .nickname {
            overflow: hidden;
            color: #0f1419;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2rem;
            white-space: nowrap;

            &:hover {
              text-decoration: underline;
            }

            &:focus {
              text-decoration: underline;
              outline: none;
            }
          }

          .user_id {
            overflow: hidden;
            color: #536471;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2rem;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .btn_area {
          flex: 0 0 76px;
          margin-left: 12px;
          height: 32px;

          .btn_follow {
            display: block;
            height: 100%;
            background-color: #0f1419;
            font-size: 1.4rem;

            &:hover {
              background-color: #272c30;
              transition: background-color 0.2s;
            }

            &:focus {
              background-color: #272c30;
              outline: none;
              box-shadow: rgb(135, 138, 140) 0 0 0 2px;
              transition: background-color 0.2s box-shadow 0.2s;
            }
          }
        }
      }
    }

    .introduction {
      padding-top: 4px;
      color: #0f1419;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
}
</style>
