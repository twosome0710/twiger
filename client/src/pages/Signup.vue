<template>
  <Home />
  <SignupModal />
</template>

<script>
import SignupModal from "@/components/signup/SignupModal.vue";
import Home from "./Home.vue";

export default {
  name: "Signup",
  components: {
    SignupModal,
    Home,
  },
};
</script>
