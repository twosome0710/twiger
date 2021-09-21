<template>
  <button
    :type="type"
    class="solid_btn"
    :class="{ loading }"
    :disabled="disabled || loading"
    @click="clickHandler"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "SolidButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    label: String,
    disabled: Boolean,
    loading: Boolean,
    clickHandler: Function,
  },
};
</script>

<style
  src="@/assets/scss/components/common/base-solid-button.scss"
  lang="scss"
  scoped
></style>
