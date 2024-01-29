import { actionTypes } from "../constant/actionTypes";

export const addSubscription = (subscriptions) => {
    return {
        type : actionTypes.SET_SUBSCRIPTIONS,
        payload : subscriptions
    }
}

export const getSubscription = (subscription) => {
    return {
        type : actionTypes.GET_SUBSCRIPTION,
        payload : subscription
    }
}