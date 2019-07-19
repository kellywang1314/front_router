export default class HashRouter{
    constructor(){
        this.routers1 = {}
        window.addEventListener('hashchange',this.load.bind(this),false)
    }

    register(hash, callback){
        this.routers1[hash] = callback
    }

    registerIndex(callback){
        this.routers1['index'] = callback
    }

    load(){
        let hash = location.hash,hander
        if(!hash){
            hander = this.routers1.index
        }else{
            hander = this.routers1[hash]
        }
        hander.call(this)
    }
    
}
