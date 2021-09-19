<template>
  <Home />
  <SignupModal />
</template>

<script>
import SignupModal from "@/components/Signup/SignupModal.vue";
import Home from "./HomePage.vue";

export default {
  name: "Signup",
  components: {
    SignupModal,
    Home,
  },
};
</script>
