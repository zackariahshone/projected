
const UTILS = {
    rmvEmpty: (obj)=>{
        Object.keys(obj).forEach(key=>{
            if(obj[key] === ''||obj[key].length === 0){
                delete obj[key]
            }
        })
        return obj
    }
    
}

module.exports = UTILS;