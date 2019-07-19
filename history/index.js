import HistoryRouter from './history'
export default function HistoryLoad(){
    let router = new HistoryRouter()
    let container = document.getElementById('container')
    //注册首页回调函数
    router.registerIndex(()=> container.innerHTML = '我是首页')
    //注册其他视图回调函数
    router.register('/page1',()=> container.innerHTML = '我是page1')
    router.register('/page2',()=> container.innerHTML = '我是page2')
    router.register('/page3',()=> container.innerHTML = '我是page3')

    //主动触发history.pushState()
    let btn = document.getElementById('btn')
    if(btn){
        btn.onclick = () => router.pushstate('/page2')
    }
    //加载视图
    router.load()
}    
