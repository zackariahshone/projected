//all requests stored here
import { directReducer } from "./reduxUtils"

// import { get } from "jquery"


//let hit the back end



export const getData = (route,method,body) =>{
    if(method.toLowerCase() !== 'get'){
            fetch(route,{
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)||'',
            })
        }else{
            fetch(route,{
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }) .then(response=>response.json()).then(data=>{

            })
        }
}

export const getweatherData = async ()=>{
    fetch('/getweather',{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
}

