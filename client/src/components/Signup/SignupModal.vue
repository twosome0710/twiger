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
            type="submit"
            class="btn_submit"
            label="가입하기"
            :disabled="!isFormCompleted"
            :clickHandler="submitHandler"
            :loading="loading"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Input from "@/components/common/BaseInput.vue";
import InputBirth from "./SignupInputBirth.vue";
import SubmitButton from "@/components/common/BaseSolidButton.vue";
import { computed, ref } from "vue";

export default {
  name: "SignupModal",
  components: {
    Input,
    InputBirth,
    SubmitButton,
  },
  setup() {
    const name = ref("");

    const isNameCorrect = computed(() => {
      return 0 < name.value.length && name.value.length <= 50;
    });

    const inputNameHandler = (event) => {
      event.preventDefault();
      name.value = event.target.value;
    };

    const email = ref("");

    const isEmailCorrect = computed(() => {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      return email.value.length > 0 && re.test(email.value);
    });

    const isEmailError = computed(() => {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      return email.value.length > 0 && !re.test(email.value);
    });

    const inputEmailHandler = (event) => {
      event.preventDefault();
      email.value = event.target.value;
    };

    const password = ref("");

    const isPasswordCorrect = computed(() => {
      return 0 < password.value.length && password.value.length <= 50;
    });

    const inputPasswordHandler = (event) => {
      event.preventDefault();
      password.value = event.target.value;
    };

    const birth = ref("");

    const isBirthCorrect = ref(true);

    const emitBirth = (newBirth) => {
      birth.value = newBirth;
    };

    const emitIsBirthCorrect = (newIsBirthCorrect) => {
      isBirthCorrect.value = newIsBirthCorrect;
    };

    const isFormCompleted = computed(() => {
      return (
        isNameCorrect.value &&
        isEmailCorrect.value &&
        isPasswordCorrect.value &&
        isBirthCorrect.value
      );
    });

    const loading = ref(false);

    const submitHandler = async (event) => {
      event.preventDefault();
      const uri = `${process.env.VUE_APP_API_URI}/users`;
      const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        birth: birth.value,
      };
      console.log({ data });
      loading.value = true;
      try {
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
      } catch {
        alert("회원가입 실패");
      } finally {
        loading.value = false;
      }
    };

    return {
      name,
      isNameCorrect,
      inputNameHandler,
      email,
      isEmailCorrect,
      isEmailError,
      inputEmailHandler,
      password,
      isPasswordCorrect,
      inputPasswordHandler,
      birth,
      isBirthCorrect,
      emitBirth,
      emitIsBirthCorrect,
      isFormCompleted,
      loading,
      submitHandler,
    };
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
