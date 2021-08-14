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
          class="submit_btn"
          text="로그인"
          :disabled="email.length === 0 || password.length === 0"
          :submitHandler="submitHandler"
        />
      </div>
    </form>
    <div class="link_area">
      <router-link to="/signup" class="signup_link">트위저 가입</router-link>
    </div>
  </section>
</template>

<script>
import Input from "@/components/common/Input.vue";
import SubmitButton from "@/components/common/SubmitButton.vue";
import router from "@/router";
import { ref } from "vue";

export default {
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

    async function submitHandler(event) {
      event.preventDefault();
      const uri = `${process.env.VUE_APP_API_URI}/users/token`;
      const data = {
        email: email.value,
        password: password.value,
      };
      const response = await fetch(uri, {
        method: "post",
        mode: "cors",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/login");
      } else {
        alert("회원가입 실패");
      }
    }

    return {
      email,
      inputEmailHandler,
      password,
      inputPasswordHandler,
      submitHandler,
    };
  },
};
</script>

<style>
@charset "utf-8";

.login_section {
  max-width: 368px;
  margin: 20px auto;
}

.login_section .title {
  margin-top: 32px;
  font-size: 3.1rem;
  font-weight: 700;
}

.login_section .login_form .email_input {
  margin-top: 24px;
}

.login_section .login_form .password_input {
  margin-top: 24px;
}

.login_section .login_form .submit_btn {
  margin-top: 24px;
  line-height: 46px;
  border-radius: 23px;
}

.login_section .link_area {
  margin-top: 32px;
  text-align: center;
}

.login_section .signup_link {
  color: #1b95e0;
}

.login_section .signup_link:focus {
  outline: none;
  text-decoration: underline;
}
</style>
