<template>
  <div class="birth_box">
    <div class="year">
      <label
        class="label_year"
        :class="{
          selected: isYearSelected,
          error: isYearError,
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
            :value="year"
            @focus="isYearSelected = true"
            @blur="isYearSelected = false"
            @input="inputYearHandler"
          />
        </div>
      </label>
    </div>
    <div class="month">
      <label
        for="month"
        class="label_month"
        :class="{
          selected: isMonthSelected,
          error: isMonthError,
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
            :value="month"
            @focus="isMonthSelected = true"
            @blur="isMonthSelected = false"
            @input="inputMonthHandler"
          />
        </div>
      </label>
    </div>
    <div class="day">
      <label
        class="label_day"
        :class="{ selected: isDaySelected, error: isDayError }"
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
            :value="day"
            @focus="isDaySelected = true"
            @blur="isDaySelected = false"
            @input="inputDayHandler"
          />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBirth",
  data: function () {
    return {
      isYearSelected: false,
      isMonthSelected: false,
      isDaySelected: false,
    };
  },
  props: {
    year: String,
    month: String,
    day: String,
    isYearError: Boolean,
    isMonthError: Boolean,
    isDayError: Boolean,
    inputYearHandler: Function,
    inputMonthHandler: Function,
    inputDayHandler: Function,
  },
};
</script>

<style>
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
  box-sizing: border-box;
}

.day .label_day .input_wrap .input_day:focus {
  outline: none;
}
</style>
