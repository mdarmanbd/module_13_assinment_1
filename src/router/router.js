
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/Sidebar.vue'
import Protected from '../components/Protected.vue'
import Login from '../components/Login.vue'
import {authStore} from '../store/store'
import Admin from '../components/Admin.vue'


const routes = [
    {
        path: '/',
        components:
        {
            default:Home,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/about',
        components:
        {
            default:About,
            LeftSideBar:Sidebar
        }
    },
    {
        path:'/login',
        components:
        {
            default:Login,
            LeftSideBar:Sidebar
        }
    },
    {
        path:'/admin',
        components:
        {
            default:Admin,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/contact',
        components:
        {
            default:Contact,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/posts',
        components:
        {
            default:Post,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/posts/:id',
        components:
        {
            default:Posts,
            LeftSideBar:Sidebar
        },
        name:'post'
    },
    {
        path:'/protected',
        components:{
            default:Protected,
            LeftSideBar:Sidebar
        },
        meta:{
            requiresAut: true
        }
    }
]

// const isAuthenticated = () =>{
//     return localStorage.getItem('token')== '123'
// }

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAut && !authStore.isAuthenticated){
        next('/Login')
    }
    else{
        next()
    }
})


export default router