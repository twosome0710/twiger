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
  data: function () {
    return {
      year: {
        value: "",
        selected: false,
      },
      month: {
        value: "",
        selected: false,
      },
      day: {
        value: "",
        selected: false,
      },
    };
  },
  computed: {
    isYearCorrect() {
      const re = /\d{4}/;
      return (
        (this.year.value.length === 0 &&
          this.month.value.length === 0 &&
          this.day.value.length === 0) ||
        (re.test(this.year.value) &&
          this.year.value <= new Date().getFullYear())
      );
    },
    isMonthCorrect() {
      const re = /^(0?[1-9]|1[0-2])$/;
      return (
        (this.year.value.length === 0 &&
          this.month.value.length === 0 &&
          this.day.value.length === 0) ||
        (re.test(this.month.value) && !this.isYearCorrect) ||
        (re.test(this.month.value) &&
          this.isYearCorrect &&
          (this.month.value <= new Date().getMonth() + 1 ||
            this.year.value < new Date().getFullYear()))
      );
    },
    isDayCorrect() {
      const re = /^(0?[1-9]|[12][0-9]|3[01])$/;
      return (
        (this.year.value.length === 0 &&
          this.month.value.length === 0 &&
          this.day.value.length === 0) ||
        (re.test(this.day.value) && !this.isMonthCorrect) ||
        (re.test(this.day.value) &&
          this.isMonthCorrect &&
          isValidDate(this.year.value, this.month.value, this.day.value))
      );
    },
    birth() {
      if (!this.isYearCorrect || !this.isMonthCorrect || !this.isDayCorrect) {
        return "";
      }
      if (!this.year.value || !this.month.value || !this.day.value) {
        return "";
      }
      const zeroPadMonth = this.month.value.padStart("0", 2);
      const zeroPadDay = this.day.value.padStart("0", 2);
      return `${this.year.value}-${zeroPadMonth}-${zeroPadDay}`;
    },
    isBirthCorrect() {
      if (this.required) {
        return (
          this.isYearCorrect &&
          this.isMonthCorrect &&
          this.isDayCorrect &&
          this.birth.length > 0
        );
      }
      return this.isYearCorrect && this.isMonthCorrect && this.isDayCorrect;
    },
  },
  methods: {
    inputHandler(event) {
      event.preventDefault();
      this.emitBirth(this.birth);
      this.emitIsBirthCorrect(this.isBirthCorrect);
    },
  },
};
</script>

<style scoped>
@charset "utf-8";

.birth_box {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.birth_box .year {
  display: table-cell;
}

.birth_box .year .label_year {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.birth_box .year .label_year.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.birth_box .year .label_year.error {
  border-color: #e0245e;
}

.birth_box .year .label_year.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.birth_box .year .label_year .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.birth_box .year .label_year.selected .text_wrap {
  color: #1da1f2;
}

.birth_box .year .label_year.error .text_wrap {
  color: #e0245e;
}

.birth_box .year .label_year .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.birth_box .year .label_year .input_wrap .input_year {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  box-sizing: border-box;
}

.birth_box .year .label_year .input_wrap .input_year:focus {
  outline: none;
}

.signup_modal .signup_form .input_area .birth_wrap .birth_box .month {
  display: table-cell;
  padding-left: 12px;
}

.birth_box .month .label_month {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.birth_box .month .label_month.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.birth_box .month .label_month.error {
  border-color: #e0245e;
}

.birth_box .month .label_month.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.birth_box .month .label_month .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.birth_box .month .label_month.selected .text_wrap {
  color: #1da1f2;
}

.birth_box .month .label_month.error .text_wrap {
  color: #e0245e;
}

.birth_box .month .label_month .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.birth_box .month .label_month .input_wrap .input_month {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  box-sizing: border-box;
}

.birth_box .month .label_month .input_wrap .input_month:focus {
  outline: none;
}

.birth_box .day {
  display: table-cell;
  padding-left: 12px;
}

.birth_box .day .label_day {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.birth_box .day .label_day.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.birth_box .day .label_day.error {
  border-color: #e0245e;
}

.birth_box .day .label_day.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.birth_box .day .label_day .text_wrap {
  position: absolute;
  padding: 8px 8px 0;
  color: #536471;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.birth_box .day .label_day.selected .text_wrap {
  color: #1da1f2;
}

.birth_box .day .label_day.error .text_wrap {
  color: #e0245e;
}

.birth_box .day .label_day .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.birth_box .day .label_day .input_wrap .input_day {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  box-sizing: border-box;
}

.day .label_day .input_wrap .input_day:focus {
  outline: none;
}
</style>
