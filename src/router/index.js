import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../views/TaskList.vue";
import TaskUpdate from "../views/TaskUpdate.vue";
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
        path: "/edit/:id",
        name: "edit",
        component: TaskUpdate,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
