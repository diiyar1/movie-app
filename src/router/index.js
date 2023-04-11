import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MoviesList from '../views/MoviesList.vue'
import MovieDetail from '../views/MovieDetail.vue'
import DarkMode from '../views/DarkMode.vue'
import Search from '../views/Search.vue'
import LogIn from '../views/LogIn.vue'
import Carousel from '../slideImages/Carousel.vue'
import Slide from '../slideImages/Slide.vue'






const routes = [{
        path: '/',
        name: 'home',
        component: Home,

    },
    {
        path: '/MoviesList',
        name: 'MoviesList',
        component: MoviesList,

    },

    {
        path: '/movie/:id',
        name: 'MovieDetail',
        component: MovieDetail,
        props: true
    },
    {
        path: '/darkMode',
        name: 'DarkMode',
        component: DarkMode,

    },
    {
        path: '/search',
        name: 'search',
        component: Search,

    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: LogIn,

    },
    {
        path: '/Carousel',
        name: 'Carousel',
        component: Carousel,

    },
    {
        path: '/Slide',
        name: 'Slide',
        component: Slide,

    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router