<template>
  <section class="login_section">
    <img src="../assets/images/logo_blue.png" alt="트위저" width="40" />
    <h1 class="title">트위저 로그인</h1>
    <form>
      <div class="login_form">
        <Input
          class="email_input"
          type="email"
          placeholder="이메일"
          :value="email"
          :correct="email.length > 0"
          :inputHandler="inputEmailHandler"
          :autofocus="true"
        />
        <Input
          class="password_input"
          type="password"
          placeholder="패스워드"
          :value="password"
          :correct="password.length > 0"
          :inputHandler="inputPasswordHandler"
        />
        <SubmitButton
          type="submit"
          class="submit_btn"
          :disabled="email.length === 0 || password.length === 0 || loading"
          :clickHandler="submitHandler"
          :loading="loading"
        >
          로그인
        </SubmitButton>
      </div>
    </form>
    <div class="link_area">
      <router-link to="/signup" class="signup_link">트위저 가입</router-link>
    </div>
  </section>
</template>

<script>
import Input from "@/components/common/BaseInput.vue";
import SubmitButton from "@/components/common/BaseSolidButton.vue";
// import router from "@/router";
import { ref } from "vue";

export default {
  name: "Login",
  components: {
    Input,
    SubmitButton,
  },
  setup() {
    const email = ref("");

    function inputEmailHandler(event) {
      event.preventDefault();
      email.value = event.target.value;
    }

    const password = ref("");

    function inputPasswordHandler(event) {
      event.preventDefault();
      password.value = event.target.value;
    }

    const loading = ref(false);

    async function submitHandler(event) {
      event.preventDefault();
      const uri = `${process.env.VUE_APP_API_URI}/users/token`;
      const data = {
        email: email.value,
        password: password.value,
      };
      try {
        loading.value = true;
        const response = await fetch(uri, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          mode: "cors",
          body: JSON.stringify(data),
        });
        if (response.ok) {
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      } catch {
        alert("로그인 실패");
      } finally {
        loading.value = false;
      }
    }

    return {
      email,
      inputEmailHandler,
      password,
      inputPasswordHandler,
      loading,
      submitHandler,
    };
  },
};
</script>

<style src="@/assets/scss/pages/login.scss" lang="scss" scoped></style>
