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
import { ref } from "vue";

export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
    correct: {
      type: Boolean,
      required: true,
    },
    error: Boolean,
    placeholder: {
      type: String,
      required: true,
    },
    maxLength: Number,
    required: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    inputHandler: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const selected = ref(props.autofocus);

    return {
      selected,
    };
  },
};
</script>

<style
  src="@/assets/scss/components/common/base-input.scss"
  lang="scss"
  scoped
></style>
