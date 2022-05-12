import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "./views/ErrorPage.vue";
import Home from "./views/Home.vue";

const routes = [
    { 
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue"),

    },
    {
        path: "/error",
        name: "ErrorPage",
        component: () => import("./views/ErrorPage.vue"),

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;