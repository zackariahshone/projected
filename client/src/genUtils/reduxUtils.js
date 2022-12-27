import {store} from '../appstore/store';

export const directReducer =(action, data,type)=>{
    store.dispatch(action(
        {
            type:type || null, 
            data
        }
    ))
}