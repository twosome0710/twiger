<template>
  <ul class="user_list">
    <li class="item" v-for="(user, idx) of users" :key="idx">
      <UserSummary :user="user" />
    </li>
  </ul>
</template>

<script>
import UserSummary from "./UserSummary.vue";

export default {
  name: "UserList",
  components: { UserSummary },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@charset "utf-8";
</style>
