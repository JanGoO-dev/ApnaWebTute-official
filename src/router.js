import { createWebHistory, createRouter } from 'vue-router'

// Import Views/Page
import ApnaHome from './pages/ApnaHome.vue'
import ApnaAbout from './pages/ApnaAbout.vue'

const history = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: ApnaHome
    },
    {
        path: '/about',
        name: "About",
        component: ApnaAbout
    }
]

const router = createRouter({ history, routes })

export default router