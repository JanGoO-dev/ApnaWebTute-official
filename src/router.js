import { createWebHistory, createRouter } from 'vue-router'

// Import Views/Page
import ApnaHome from './pages/ApnaHome.vue'
import ApnaAbout from './pages/ApnaAbout.vue'
import ApnaContact from './pages/ApnaContact.vue'
import ApnaPostRead from './pages/ApnaPostRead.vue'
import ApnaBlog from './pages/ApnaBlog.vue'

const history = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: ApnaHome
    },
    {
        path: '/blog',
        name: 'Blog',
        component: ApnaBlog
    },
    {
        path: '/post',
        name: 'Blog Post',
        component: ApnaPostRead
    },
    {
        path: '/about',
        name: 'About',
        component: ApnaAbout
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ApnaContact
    }
]

const router = createRouter({ history, routes })

export default router