export default class HashRouter{
    constructor(){
        this.routers = {}
        window.addEventListener('hashchange',this.load.bind(this),false)
    }

    register(hash, callback){
        this.routers[hash] = callback
    }

    registerIndex(callback){
        this.routers['index'] = callback
    }

    load(){
        let hash = location.hash,hander
        if(!hash){
            hander = this.routers.index
        }else{
            hander = this.routers[hash]
        }
        hander.call(this)
    }
    
}
