<template>
  <div
    class="signup_modal_overlay"
    @click="
      clickYearHandler($event);
      clickMonthHandler($event);
      clickDayHandler($event);
    "
  >
    <div class="signup_modal">
      <form action="post">
        <div class="signup_form">
          <div class="logo_area">
            <img
              src="../assets/images/logo_blue.png"
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
              label-name="이름 (필수)"
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
              label-name="이메일 (필수)"
              :required="true"
              :value="email"
              :correct="isEmailCorrect"
              :error="isEmailError"
              :inputHandler="inputEmailHandler"
            />
            <Input
              type="password"
              class="input_password"
              label-name="패스워드 (필수)"
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
              <div class="birth_box">
                <div class="year">
                  <label
                    class="label_year"
                    :class="{
                      selected: year.selected,
                      error: year.error,
                    }"
                  >
                    <div class="text_wrap">
                      <span class="text">년(4자리)</span>
                    </div>
                    <div class="input_wrap">
                      <input
                        type="text"
                        id="year"
                        class="input_year"
                        maxlength="4"
                        v-model="year.value"
                        @focus="year.selected = true"
                        @blur="year.selected = false"
                        @input="inputYearHandler"
                      />
                    </div>
                  </label>
                </div>
                <div class="month">
                  <label
                    for="month"
                    class="label_month"
                    v-bind:class="{
                      selected: month.selected,
                      error: month.error,
                    }"
                  >
                    <div class="text_wrap">
                      <span class="text">월</span>
                    </div>
                    <div class="input_wrap">
                      <input
                        type="text"
                        id="month"
                        class="input_month"
                        maxlength="2"
                        v-model="month.value"
                        @focus="month.selected = true"
                        @blur="month.selected = false"
                        @input="inputMonthHandler"
                      />
                    </div>
                  </label>
                </div>
                <div class="day">
                  <label
                    class="label_day"
                    v-bind:class="{ selected: day.selected, error: day.error }"
                  >
                    <div class="text_wrap">
                      <span class="text">일</span>
                    </div>
                    <div class="input_wrap">
                      <input
                        type="text"
                        id="day"
                        class="input_day"
                        maxlength="2"
                        v-model="day.value"
                        @focus="day.selected = true"
                        @blur="day.selected = false"
                        @input="inputDayHandler"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn_submit"
            :disabled="!isFormCompleted"
            @click="submitHandler"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Input from "./Input.vue";

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

function clickYearHandler(event) {
  event.preventDefault();
  const labelYear = event.target.closest(".label_year");
  if (labelYear) {
    labelYear.querySelector(".input_year").focus();
  }
}

function inputYearHandler(event) {
  event.preventDefault();
  const re = /\d{4}/;
  if (this.year.value.length > 0 && !re.test(this.year.value)) {
    this.year.correct = false;
    this.year.error = true;
  } else {
    this.year.correct = true;
    this.year.error = false;
  }
}

function clickMonthHandler(event) {
  event.preventDefault();
  const labelMonth = event.target.closest(".label_month");
  if (labelMonth) {
    labelMonth.querySelector(".input_month").focus();
  }
}

function inputMonthHandler(event) {
  event.preventDefault();
  const re = /^(0?[1-9]|1[0-2])$/;
  if (this.month.value.length > 0 && !re.test(this.month.value)) {
    this.month.correct = false;
    this.month.error = true;
  } else {
    this.month.correct = true;
    this.month.error = false;
  }
}

function clickDayHandler(event) {
  event.preventDefault();
  const labelDay = event.target.closest(".label_day");
  if (labelDay) {
    labelDay.querySelector(".input_day").focus();
  }
}

function inputDayHandler(event) {
  event.preventDefault();
  const re = /^(0?[1-9]|[12][0-9]|3[01])$/;
  if (this.day.value.length > 0 && !re.test(this.day.value)) {
    this.day.correct = false;
    this.day.error = true;
  } else {
    this.day.correct = true;
    this.day.error = false;
  }
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

export default {
  name: "SignupModal",
  components: {
    Input,
  },
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      year: {
        value: "",
        selected: false,
        correct: true,
        error: false,
      },
      month: {
        value: "",
        selected: false,
        correct: true,
        error: false,
      },
      day: {
        value: "",
        selected: false,
        correct: true,
        error: false,
      },
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
        this.year.correct &&
        this.month.correct &&
        this.day.correct
      );
    },
    birth() {
      if (this.year.value && this.month.value && this.day.value) {
        const zeroPadMonth = this.month.value.padStart(2, "0");
        const zeroPadDay = this.day.value.padStart(2, "0");
        return `${this.year.value}-${zeroPadMonth}-${zeroPadDay}`;
      }
      return null;
    },
  },
  methods: {
    inputNameHandler,
    inputEmailHandler,
    inputPasswordHandler,
    clickYearHandler,
    inputYearHandler,
    clickMonthHandler,
    inputMonthHandler,
    clickDayHandler,
    inputDayHandler,
    submitHandler,
  },
};
</script>

<style>
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

.signup_modal .signup_form .input_area .birth_wrap .birth_box {
  display: table;
  table-layout: fixed;
  width: 100%;
  margin-top: 16px;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_box .year {
  display: table-cell;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year.error {
  border-color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year
  .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year.selected
  .text_wrap {
  color: #1da1f2;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year.error
  .text_wrap {
  color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year
  .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year
  .input_wrap
  .input_year {
  display: block;
  width: 100%;
  border: 0;
  box-sizing: border-box;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .year
  .label_year
  .input_wrap
  .input_year:focus {
  outline: none;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_box .month {
  display: table-cell;
  padding-left: 12px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month.error {
  border-color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month
  .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month.selected
  .text_wrap {
  color: #1da1f2;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month.error
  .text_wrap {
  color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month
  .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month
  .input_wrap
  .input_month {
  display: block;
  width: 100%;
  border: 0;
  box-sizing: border-box;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .month
  .label_month
  .input_wrap
  .input_month:focus {
  outline: none;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_box .day {
  display: table-cell;
  padding-left: 12px;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_box .day .label_day {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day.error {
  border-color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day
  .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day.selected
  .text_wrap {
  color: #1da1f2;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day.error
  .text_wrap {
  color: #e0245e;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day
  .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day
  .input_wrap
  .input_day {
  display: block;
  width: 100%;
  border: 0;
  box-sizing: border-box;
}

.signup_modal
  .signup_form
  .input_area
  .birth_wrap
  .birth_box
  .day
  .label_day
  .input_wrap
  .input_day:focus {
  outline: none;
}

.signup_modal .signup_form .btn_submit {
  width: 100%;
  margin-top: 100px;
  border: 0;
  border-radius: 19px;
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  cursor: pointer;
}

.signup_modal .signup_form .btn_submit:disabled {
  opacity: 0.5;
  cursor: auto;
}
</style>
