<template>
  <button
    type="submit"
    class="btn_submit"
    :disabled="disabled"
    @click="submitHandler"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    text: String,
    disabled: Boolean,
    submitHandler: Function,
  },
};
</script>

<style scoped>
@charset "utf-8";

.btn_submit {
  width: 100%;
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

.btn_submit[disabled] {
  opacity: 0.5;
  cursor: auto;
}

.btn_submit:hover {
  background-color: #1a91da;
  transition: background-color 0.2s;
}

.btn_submit[disabled]:hover {
  background-color: #1da1f2;
}

.btn_submit:focus {
  background-color: #1a91da;
  box-shadow: #8ed0f9 0 0 0 2px;
  outline: none;
  transition: background-color 0.2s box-shadow 0.2s;
}
</style>
