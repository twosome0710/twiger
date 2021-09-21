import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import UserHomePage from "@/pages/UserHomePage.vue";
import ConnectPage from "@/pages/ConnectPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "UserHome",
    component: UserHomePage,
  },
  {
    path: "/connect",
    name: "Connect",
    component: ConnectPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
