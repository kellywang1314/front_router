export default class HistoryRouter{
    constructor(){
        this.routers = {}
        this.listenPopState()
        this.listenLink()
    }

    register(path, callback){
        this.routers[path] = callback
    }

    registerIndex(callback){
        this.routers['/'] = callback
    }

    //用于处理视图未找到的情况
    registerNotFound(callback){
        this.routers['404'] = callback
    }
    //用于处理异常情况
    registerError(callback){
        this.routers['error'] = callback
    }

    //跳转到path
    pushstate(path){
        history.pushState({path},null,path)
        this.dealPathHandler(path)
    }

    //替换为path
    replace(path){
        let allpath = location.pathname+ path
        history.replaceState({path},null,path)
        this.dealPathHandler(path)
    }

    //监听popstate,前进后退
    listenPopState(){
        window.addEventListener('popstate',(e)=>{
            let state = e.state || {},
                path = state.path || '';
            this.dealPathHandler(path)
        },false)
    }
    //组织a链接的默认行为，让他走pushstate
    listenLink(){
        window.addEventListener('click',(e)=>{
            let dom = e.target
            if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                e.preventDefault()
                this.pushstate(dom.getAttribute('href'))
            }
        },false)
    }
    dealPathHandler(path){
        let hander
        if(!this.routers.hasOwnProperty(path)){
            hander = this.routers['404'] || function(){}
        }else{
            hander = this.routers[path]
        }
        try{
            hander.call(this)
        }catch(e){
            console.log(e)
            hander = this.routers['error'] || function(){}
            hander.call(this)
            
        }
       
    }
    load(){
        let path = '/'
        this.dealPathHandler(path)
    }
}