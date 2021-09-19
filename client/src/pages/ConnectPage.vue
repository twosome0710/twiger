<template>
  <div class="wrap">
    <SideMenu />
    <main id="main" class="content_area">
      <div class="connect">
        <div class="title_area">
          <button type="button" class="btn_back" @click="goBack">
            <IconLeftArrow class="icon_back" />
            <span class="btn_text">뒤로 가기</span>
          </button>
          <h2 class="title">연결하기</h2>
        </div>
        <div class="recommend_area">
          <strong class="label">나를 위한 추천</strong>
          <UserList :users="users" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideMenu from "@/components/layout/TheSideMenu.vue";
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import UserList from "@/components/User/UserList.vue";

import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "Connect",
  components: {
    SideMenu,
    IconLeftArrow,
    UserList,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };

    const users = ref([
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test1",
        nickname: "테스트1",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
      {
        userId: "test2",
        nickname: "테스트2",
        introduction: "자기소개",
      },
    ]);

    return {
      goBack,
      users,
    };
  },
};
</script>

<style lang="scss">
@charset "utf-8";

.connect {
  .title_area {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 0 16px;
    border-bottom: 1px solid #eff3f4;
    background-color: #fff;
    z-index: 1;

    .btn_back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      margin-right: 20px;
      padding: 0;
      border: 0;
      background-color: transparent;
      cursor: pointer;

      .icon_back {
        width: 20px;
        height: 20px;
      }

      .btn_text {
        @include blind;
      }
    }

    .title {
      font-size: 2rem;
      line-height: 53px;
    }
  }

  .recommend_area {
    overflow-y: auto;
    .label {
      display: block;
      padding: 0 16px;
      color: #0f1419;
      font-size: 2rem;
      font-weight: 800;
      line-height: 48px;
    }
  }
}
</style>
