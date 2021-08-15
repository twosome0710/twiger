<template>
  <div class="signup_modal_overlay">
    <div class="signup_modal">
      <form action="post">
        <div class="signup_form">
          <div class="logo_area">
            <img
              src="@/assets/images/logo_blue.png"
              alt="트위저"
              height="25"
              class="logo"
            />
          </div>
          <div class="input_area">
            <strong class="signup_guide_text">계정을 생성하세요</strong>
            <Input
              type="text"
              class="input_name"
              placeholder="이름 (필수)"
              :max-length="50"
              :required="true"
              :autofocus="true"
              :value="name"
              :correct="isNameCorrect"
              :inputHandler="inputNameHandler"
            />
            <Input
              type="email"
              class="input_email"
              placeholder="이메일 (필수)"
              :required="true"
              :value="email"
              :correct="isEmailCorrect"
              :error="isEmailError"
              :inputHandler="inputEmailHandler"
            />
            <Input
              type="password"
              class="input_password"
              placeholder="패스워드 (필수)"
              :required="true"
              :value="password"
              :correct="isPasswordCorrect"
              :inputHandler="inputPasswordHandler"
            />
            <div class="birth_wrap">
              <strong class="label_birth">생년월일</strong>
              <p class="info">
                이 정보는 공개적으로 표시되지 않습니다. 비즈니수, 반려동물 등
                계정 주제에 상관 없이 나의 연령을 확인하세요.
              </p>
              <InputBirth
                class="input_birth"
                :emitBirth="emitBirth"
                :emitIsBirthCorrect="emitIsBirthCorrect"
              />
            </div>
          </div>
          <SubmitButton
            class="btn_submit"
            text="가입하기"
            :disabled="!isFormCompleted"
            :submitHandler="submitHandler"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Input from "@/components/common/Input.vue";
import InputBirth from "@/components/common/InputBirth.vue";
import SubmitButton from "@/components/common/SubmitButton.vue";

function inputNameHandler(event) {
  event.preventDefault();
  this.name = event.target.value;
}

function inputEmailHandler(event) {
  event.preventDefault();
  this.email = event.target.value;
}

function inputPasswordHandler(event) {
  event.preventDefault();
  this.password = event.target.value;
}

async function submitHandler(event) {
  event.preventDefault();
  const uri = `${process.env.VUE_APP_API_URI}/users`;
  const data = {
    name: this.name,
    email: this.email,
    password: this.password,
    birth: this.birth,
  };
  console.log({ data });
  const response = await fetch(uri, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
  });
  if (response.ok) {
    router.push("/login");
  } else {
    alert("회원가입 실패");
  }
}

export default {
  name: "SignupModal",
  components: {
    Input,
    InputBirth,
    SubmitButton,
  },
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      birth: "",
      isBirthCorrect: true,
    };
  },
  computed: {
    isNameCorrect() {
      return 0 < this.name.length && this.name.length <= 50;
    },
    isEmailCorrect() {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      return this.email.length > 0 && re.test(this.email);
    },
    isEmailError() {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      return this.email.length > 0 && !re.test(this.email);
    },
    isPasswordCorrect() {
      return 0 < this.password.length && this.password.length <= 50;
    },
    isFormCompleted() {
      return (
        this.isNameCorrect &&
        this.isEmailCorrect &&
        this.isPasswordCorrect &&
        this.isBirthCorrect
      );
    },
  },
  methods: {
    inputNameHandler,
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    emitBirth(birth) {
      this.birth = birth;
    },
    emitIsBirthCorrect(isBirthCorrect) {
      this.isBirthCorrect = isBirthCorrect;
    },
  },
};
</script>

<style>
@charset "utf-8";

.signup_modal_overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.signup_modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.signup_modal .signup_form {
  overflow: hidden;
  width: 600px;
  padding: 0 32px 36px;
  border-radius: 16px;
  background-color: #fff;
}

.signup_modal .signup_form .logo_area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
}

.signup_modal .signup_form .input_area .signup_guide_text {
  display: block;
  font-size: 2.3rem;
  line-height: 2.8rem;
  margin-top: 16px;
}

.signup_modal .signup_form .input_area .input_name {
  margin-top: 28px;
}

.signup_modal .signup_form .input_area .input_email {
  margin-top: 28px;
}

.signup_modal .signup_form .input_area .input_password {
  margin-top: 28px;
}

.signup_modal .signup_form .input_area .birth_wrap {
  margin-top: 32px;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_label {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
}

.signup_modal .signup_form .input_area .birth_wrap .info {
  color: #536471;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
}

.signup_modal .signup_form .input_area .birth_wrap .input_birth {
  margin-top: 16px;
}

.signup_modal .signup_form .btn_submit {
  margin-top: 100px;
}
</style>
