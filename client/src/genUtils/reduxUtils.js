import {store} from '../appstore/store';

export const directReducer =(action, data,type)=>{
    console.log('reducer directed');
    
    store.dispatch(action(
        {
            type:type || null, 
            data
        }
    ))
}