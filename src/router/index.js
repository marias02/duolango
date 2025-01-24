import {createWebHistory, createRouter} from "vue-router";
// import { useStore } from "@/store";

import HomeView from "../views/HomeView.vue"
import LessonView from "../views/LessonView.vue"
import LessonSummary from '../views/LessonSummary.vue'

const routes = [
    {
        path: "/", 
        name: 'HomeView',
        component: HomeView, 
    },
    {
        path: "/lesson/:id", 
        name: 'LessonView',
        component: LessonView,
        props: true
    },
    {
        path: '/lesson/:id/summary',
        name: 'LessonSummary',
        component: LessonSummary,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;