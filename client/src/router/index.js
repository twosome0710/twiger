import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Signup from "@/pages/Signup.vue";
import Login from "@/pages/Login.vue";
import UserHome from "@/pages/UserHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "UserHome",
    component: UserHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
