//all requests stored here
import { directReducer } from "./reduxUtils"

export const getData = (route, method, body, action, type, headers) => {
    console.log(headers);
    if (method.toLowerCase() !== 'get') {
        fetch(route, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body) || '',
        })
    } else {
        fetch(route, {
            method: method,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(response => response.json()).then(data => {
            directReducer(action, data, type)
        })
    }
}


