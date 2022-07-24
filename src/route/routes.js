import Home from '../components/Home/Home.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Notepad from '../pages/Notepad/Notepad.vue'
import Archive from '../pages/Archive/Archive.vue'
import Listing from '../pages/Listing/Listing.vue'
import About from '../pages/About/About.vue'
import AddArchive from '../pages/AddArchive/AddArchive.vue'
const routes = [{
        path: '',
        name: 'ShouYe',
        component: Home,
        redirect: '/HomePage',
    },
    {
        path: '/HomePage',
        name: 'ShouYeNeiRong',
        component: HomePage,
        meta: {
            title: '首页内容'
        }
    },
    {
        path: '/Notepad',
        name: 'JiShiBen',
        component: Notepad
    },
    {
        path: '/Archive',
        name: 'GuiDang',
        component: Archive
    },
    {
        path: '/Listing',
        name: 'QinDan',
        component: Listing
    },
    {
        path: '/About',
        name: 'GuanYu',
        component: About
    },
    {
        path: '/AddArchive',
        name: 'TianJiaWenZhang',
        component: AddArchive
    }
]
export default routes