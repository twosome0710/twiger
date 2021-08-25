<template>
  <header class="main_header">
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
        <router-link to="/home" class="link">
          <div class="container"><IconHome class="icon_home" />홈</div>
        </router-link>
      </div>
      <div class="link_wrap">
        <router-link to="#" class="link">
          <div class="container"><IconSharp class="icon_sharp" />탐색하기</div>
        </router-link>
      </div>
      <div class="link_wrap">
        <router-link to="#" class="link">
          <div class="container">
            <IconProfile class="icon_profile" />프로필
          </div>
        </router-link>
      </div>
    </nav>
    <TweetButton type="button" label="트윗하기" class="btn_tweet" />
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
  </header>
</template>

<script>
import IconHome from "@/components/icons/IconHome.vue";
import IconSharp from "@/components/icons/IconSharp.vue";
import IconProfile from "@/components/icons/IconProfile.vue";
import TweetButton from "@/components/common/SolidButton.vue";
import IconDots from "@/components/icons/IconDots.vue";

export default {
  name: "SideMenu",
  components: { IconSharp, IconHome, IconProfile, TweetButton, IconDots },
};
</script>

<style lang="scss" scoped>
@charset "utf-8";

.main_header {
  width: 251px;
  height: 100%;
  padding: 0 12px;

  .title {
    padding: 2px 0;

    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;

      &:hover {
        background-color: rgba(29, 161, 242, 0.1);
        transition: background-color 0.2s;
      }

      &:focus {
        background-color: rgba(29, 161, 242, 0.1);
        outline: none;
        box-shadow: #8ecdf8 0 0 0 2px;
        transition: background-color 0.2s box-shadow 0.2s;
      }
    }
  }

  .nav_area {
    .link_wrap {
      font-size: 2rem;

      .link {
        display: inline-block;
        padding: 5px 0;

        .container {
          display: flex;
          padding: 12px 20px 12px 12px;
          border-radius: 25px;
          line-height: 26px;
        }

        &:hover {
          text-decoration: none;

          .container {
            background-color: rgba(15, 20, 25, 0.1);
            transition: background-color 0.2s;
          }
        }

        &:focus {
          outline: none;

          .container {
            box-shadow: #878a8c 0 0 0 2px;
            transition: box-shadow 0.2s;
          }
        }

        .icon_home,
        .icon_sharp,
        .icon_profile {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-right: 16px;
        }
      }
    }
  }

  .btn_tweet {
    width: 226px;
    height: 52px;
    margin-top: 16px;
    border-radius: 26px;
    font-size: 1.7rem;
  }

  .account_area {
    position: absolute;
    bottom: 0;
    margin: 12px 0;

    .btn_account {
      display: flex;
      align-items: center;
      width: 251px;
      height: 64px;
      padding: 12px;
      border: 0;
      border-radius: 32px;
      background-color: transparent;
      text-align: left;
      cursor: pointer;

      &:hover {
        background-color: rgba(15, 20, 25, 0.1);
        transition: background-color 0.2s;
      }

      &:focus {
        background-color: rgba(15, 20, 25, 0.1);
        outline: none;
        box-shadow: #878a8c 0 0 0 2px;
        transition: background-color 0.2s box-shadow 0.2s;
      }

      .profile_area {
        overflow: hidden;
        position: relative;
        width: 40px;
        height: 40px;
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
      }

      .name_area {
        width: 144px;
        padding: 0 12px;

        .text_name {
          display: block;
          overflow: hidden;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 2rem;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .text_id {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .icon_more {
        width: 19px;
        height: 19px;
      }
    }
  }
}
</style>
