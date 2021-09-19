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

<style lang="scss" scoped>
@charset "utf-8";

.solid_btn {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 38px;
  border: 0;
  border-radius: 19px;
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &.loading {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #1da1f2;
    }

    &:after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top: 4px solid #fff;
      border-radius: 50%;
      animation: button-loading-spinner 1s ease infinite;
    }

    @keyframes button-loading-spinner {
      from {
        transform: rotate(0turn);
      }

      to {
        transform: rotate(1turn);
      }
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: auto;

    &:hover {
      background-color: #1da1f2;
    }
  }

  &:hover {
    background-color: #1a91da;
    transition: background-color 0.2s;
  }

  &:focus {
    background-color: #1a91da;
    box-shadow: #8ed0f9 0 0 0 2px;
    outline: none;
    transition: background-color 0.2s box-shadow 0.2s;
  }
}
</style>
