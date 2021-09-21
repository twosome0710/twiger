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

<style
  src="@/assets/scss/components/tweet/tweet-form.scss"
  lang="scss"
  scoped
></style>
