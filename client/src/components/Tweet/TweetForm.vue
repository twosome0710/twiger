<template>
  <form>
    <div class="tweet_form">
      <router-link to="#" class="profile_link">
        <img
          src="@/assets/images/default_profile.png"
          alt="유저이름, id"
          width="48"
          height="48"
          class="img"
        />
      </router-link>
      <div class="input_area">
        <div class="input_tweet_wrap">
          <div
            id="tweet_placeholder"
            class="placeholder"
            v-show="tweet.length === 0"
            @click.prevent="clickPlaceholderHandler"
          >
            무슨 일이 일어나고 있나요?
          </div>
          <div
            role="textbox"
            contenteditable="true"
            aria-multiline="true"
            aria-labelledby="tweet_placeholder"
            class="input_tweet"
            ref="inputTweetElement"
            @input="inputTweetHandler($event)"
          ></div>
        </div>
        <div class="btn_area">
          <SubmitButton
            class="submit_btn"
            label="트윗하기"
            :disabled="!(0 < tweet.length && tweet.length <= 280)"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SubmitButton from "@/components/common/BaseSolidButton.vue";

import { ref } from "vue";

export default {
  name: "TweetForm",
  components: { SubmitButton },
  setup() {
    const inputTweetElement = ref(null);
    const clickPlaceholderHandler = () => {
      inputTweetElement.value.focus();
    };

    const tweet = ref("");
    const inputTweetHandler = (event) => {
      tweet.value = event.target.textContent;
    };

    return {
      inputTweetElement,
      clickPlaceholderHandler,
      tweet,
      inputTweetHandler,
    };
  },
};
</script>

<style lang="scss">
@charset "utf-8";

.tweet_form {
  display: flex;
  padding: 8px 16px 12px;

  .profile_link {
    position: relative;
    width: 48px;
    height: 48px;
    margin-right: 12px;
    border-radius: 50%;

    &:focus {
      outline: none;
      box-shadow: rgb(142, 205, 248) 0 0 0 2px;
      transition: box-shadow 0.2s;
    }

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

    .img {
      border-radius: 50%;
    }
  }

  .input_area {
    width: 100%;

    .input_tweet_wrap {
      position: relative;
      width: 506px;
      min-height: 2.4rem;
      padding: 12px 0;
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.4rem;
      box-sizing: border-box;

      .placeholder {
        position: absolute;
        right: 0;
        left: 0;
        color: #6e767d;
      }

      .input_tweet {
        &:focus {
          outline: none;
        }
      }
    }

    .btn_area {
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;
    }

    .submit_btn {
      display: block;
      width: 94px;
      height: 36px;
    }
  }
}
</style>
