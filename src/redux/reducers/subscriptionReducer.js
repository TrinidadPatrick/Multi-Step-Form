import {actionTypes} from '../constant/actionTypes'

const subscriptionInitialState = {
    subscriptions : [

        
        
]
}

const getSubscriptionInitialState = {
    
}

export const addSubscriptionReducer = (state = subscriptionInitialState,{type,payload}) =>{
    switch(type){
        case actionTypes.SET_SUBSCRIPTIONS:
            return {...state, subscriptions:payload};
            default:
                return state;
    }
}

export const getSubscriptionReducer= (state=getSubscriptionInitialState,{type,payload}) =>{
    switch(type){
        case actionTypes.GET_SUBSCRIPTION:
            return {...state, ...payload};
            default:
                return state;
    }
}