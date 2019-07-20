import HashLoad from "./hash/index"
import HistoryLoad from './history/index'
if(location.href.indexOf('hash')!==-1){
    HashLoad()
}else{
    HistoryLoad()
}

