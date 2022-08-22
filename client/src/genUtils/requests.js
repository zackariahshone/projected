//all requests stored here

// import { get } from "jquery"


//let hit the back end

export const getData = async () =>{
    fetch('/api/getTheBackEnd',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: `{
           "Id": 78912,
           "Customer": "Jason Sweet",
           "Quantity": 1,
           "Price": 18.00
          }`,
        })
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