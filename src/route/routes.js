import Home from '../components/Home/Home.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Notepad from '../pages/Notepad/Notepad.vue'
import Archive from '../pages/Archive/Archive.vue'
import Listing from '../pages/Listing/Listing.vue'
import About from '../pages/About/About.vue'
import AddArchive from '../pages/AddArchive/AddArchive.vue'
import ViewArticles from '../pages/ViewArticles/ViewArticles.vue'
import NotepadContent from '../pages/NotepadContent/NotepadContent.vue'
import Login from '../pages/Login/Login.vue'
const routes = [{
        path: '',
        name: 'ShouYe',
        component: Home,
        redirect: '/HomePage',
        children: [
            {
                path: 'HomePage',
                name: 'ShouYeNeiRong',
                component: HomePage,
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'Notepad',
                name: 'JiShiBen',
                component: Notepad,
                meta: {
                    title: '记事本'
                }
            },
            {
                path: 'Archive',
                name: 'GuiDang',
                component: Archive,
                meta: {
                    title: '归档'
                }
            },
            {
                path: 'Listing',
                name: 'QinDan',
                component: Listing,
                meta: {
                    title: '清单'
                }
            },
            {
                path: 'About',
                name: 'GuanYu',
                component: About,
                meta: {
                    title: '关于'
                }
            },
            {
                path: 'NotepadContent',
                name: 'ChaKanJiShiBen',
                component:NotepadContent,
                meta: {
                    title: '查看记事本'
                }
            },
        ]
    },
    {
        path: '/AddArchive',
        name: 'TianJiaWenZhang',
        component: AddArchive,
        meta: {
            title: '写文章',
            cheakIsLogin:true
        }
    },
    {
        path: '/ViewArticles',
        name: 'KanWenZhang',
        component: ViewArticles,
        meta: {
            title: '看文章'
        }
    },
    {
        path: '/Login',
        name: 'DengLu',
        component: Login,
        meta: {
            title: '登录'
        }
    }

]
export default routes