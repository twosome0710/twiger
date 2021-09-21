<template>
  <div class="birth_box">
    <div class="year">
      <label
        class="label_year"
        :class="{
          selected: year.selected,
          error: !isYearCorrect,
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
            :required="required"
            @focus="year.selected = true"
            @blur="year.selected = false"
            @input="inputHandler"
          />
        </div>
      </label>
    </div>
    <div class="month">
      <label
        for="month"
        class="label_month"
        :class="{
          selected: month.selected,
          error: !isMonthCorrect,
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
            :required="required"
            @focus="month.selected = true"
            @blur="month.selected = false"
            @input="inputHandler"
          />
        </div>
      </label>
    </div>
    <div class="day">
      <label
        class="label_day"
        :class="{ selected: day.selected, error: !isDayCorrect }"
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
            :required="required"
            @focus="day.selected = true"
            @blur="day.selected = false"
            @input="inputHandler"
          />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

function isLeapYear(year) {
  const numYear = Number(year);
  return (numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0;
}

function isValidDate(year, month, day) {
  const today = new Date();
  const givenDate = new Date(`${year}-${month}-${day}`);

  if (Number(month) === 2) {
    if (isLeapYear(year) && Number(day) > 29) {
      return false;
    } else if (!isLeapYear(year) && Number(day) > 28) {
      return false;
    }
  } else if (givenDate > today) {
    return false;
  }
  return true;
}

export default {
  name: "InputBirth",
  props: {
    required: Boolean,
    emitBirth: Function,
    emitIsBirthCorrect: Function,
  },
  setup(props) {
    const year = reactive({
      value: "",
      selected: false,
    });

    const month = reactive({
      value: "",
      selected: false,
    });

    const day = reactive({
      value: "",
      selected: false,
    });

    const isYearCorrect = computed(() => {
      const re = /\d{4}/;
      return (
        (year.value.length === 0 &&
          month.value.length === 0 &&
          day.value.length === 0) ||
        (re.test(year.value) && year.value <= new Date().getFullYear())
      );
    });

    const isMonthCorrect = computed(() => {
      const re = /^(0?[1-9]|1[0-2])$/;
      return (
        (year.value.length === 0 &&
          month.value.length === 0 &&
          day.value.length === 0) ||
        (re.test(month.value) && !isYearCorrect.value) ||
        (re.test(month.value) &&
          isYearCorrect.value &&
          (month.value <= new Date().getMonth() + 1 ||
            year.value < new Date().getFullYear()))
      );
    });

    const isDayCorrect = computed(() => {
      const re = /^(0?[1-9]|[12][0-9]|3[01])$/;
      return (
        (year.value.length === 0 &&
          month.value.length === 0 &&
          day.value.length === 0) ||
        (re.test(day.value) && !isMonthCorrect.value) ||
        (re.test(day.value) &&
          isMonthCorrect.value &&
          isValidDate(year.value, month.value, day.value))
      );
    });

    const birth = computed(() => {
      if (
        !isYearCorrect.value ||
        !isMonthCorrect.value ||
        !isDayCorrect.value
      ) {
        return "";
      }
      if (!year.value || !month.value || !day.value) {
        return "";
      }
      const zeroPadMonth = month.value.padStart(2, "0");
      const zeroPadDay = day.value.padStart(2, "0");
      return `${year.value}-${zeroPadMonth}-${zeroPadDay}`;
    });

    const isBirthCorrect = computed(() => {
      if (props.required) {
        return (
          isYearCorrect.value &&
          isMonthCorrect.value &&
          isDayCorrect.value &&
          birth.value.length > 0
        );
      }
      return isYearCorrect.value && isMonthCorrect.value && isDayCorrect.value;
    });

    const inputHandler = (event) => {
      event.preventDefault();
      props.emitBirth(birth.value);
      props.emitIsBirthCorrect(isBirthCorrect.value);
    };

    return {
      year,
      month,
      day,
      isYearCorrect,
      isMonthCorrect,
      isDayCorrect,
      birth,
      isBirthCorrect,
      inputHandler,
    };
  },
};
</script>

<style
  src="@/assets/scss/components/signup/signup-input-birth.scss"
  lang="scss"
  scoped
></style>
