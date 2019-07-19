import HashRouter from './hash.js'
export default function HashLoad(){
    let router = new HashRouter()
    let container = document.getElementById('container')
    //注册首页回调函数
    router.registerIndex(()=> container.innerHTML = '我是首页')

    //注册其他视图回到函数
    router.register('#/page1',()=> container.innerHTML = '我是page1')
    router.register('#/page2',()=> container.innerHTML = '我是page2')
    router.register('#/page3',()=> container.innerHTML = '我是page3')

    //加载视图
    router.load()
}

