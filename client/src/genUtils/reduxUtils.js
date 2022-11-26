import { useDispatch } from 'react-redux';
import {store} from '../appstore/store';
// login({ value: true, type: 'login' })

export const directReducer =(action, data,type)=>{
    store.dispatch(action(
        {
            type:type || null, 
            data
        }
    ))
}