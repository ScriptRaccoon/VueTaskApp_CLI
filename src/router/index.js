import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../views/TaskList.vue";
import TaskEdit from "../views/TaskEdit.vue";
import TaskCreate from "../views/TaskCreate.vue";

const routes = [
    {
        path: "/",
        name: "list",
        component: TaskList,
        props: true,
    },
    {
        path: "/create",
        name: "create",
        component: TaskCreate,
    },
    {
        path: "/edit/",
        redirect: "/",
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: TaskEdit,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
