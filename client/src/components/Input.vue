<template>
  <label
    class="label"
    :class="{
      selected,
      correct,
      error,
    }"
  >
    <div class="text_wrap">
      <span class="text">{{ placeholder }}</span>
    </div>
    <div class="input_wrap">
      <input
        :type="type"
        class="input"
        :value="value"
        :maxlength="maxLength"
        :required="required"
        :autofocus="autofocus"
        @focus="selected = true"
        @blur="selected = false"
        @input="inputHandler"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: "Input",
  data: function () {
    return {
      selected: this.autofocus,
    };
  },
  props: {
    type: String,
    value: String,
    correct: Boolean,
    error: Boolean,
    placeholder: String,
    maxLength: Number,
    required: Boolean,
    autofocus: Boolean,
    inputHandler: Function,
  },
};
</script>

<style>
.label {
  display: block;
  position: relative;
  border: 1px solid #cfd9de;
  border-radius: 4px;
  cursor: pointer;
}

.label.selected {
  border-color: #1da1f2;
  box-shadow: #1da1f2 0 0 0 1px;
}

.label.error {
  border-color: #e0245e;
}

.label.selected.error {
  border-color: #e0245e;
  box-shadow: #e0245e 0 0 0 1px;
}

.label .text_wrap {
  position: absolute;
  padding: 16px 8px 0;
  color: #536471;
  font-size: 1.7rem;
  line-height: 2.4rem;
}

.label.selected .text_wrap {
  padding-top: 8px;
  color: #1da1f2;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.label.correct .text_wrap {
  padding-top: 8px;
  font-size: 1.3rem;
  line-height: 1.6rem;
}

.label.selected.error .text_wrap {
  color: #e0245e;
}

.label .input_wrap {
  margin-top: 16px;
  padding: 12px 8px 8px;
}

.label .input_wrap .input {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  box-sizing: border-box;
}

.label .input_wrap .input:focus {
  outline: none;
}
</style>
