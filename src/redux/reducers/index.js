import { combineReducers } from "redux";
import { addSubscriptionReducer, getSubscriptionReducer } from "./subscriptionReducer";

const reducers = combineReducers({
    allSubscription: addSubscriptionReducer,
    getSubscription: getSubscriptionReducer
})

export default reducers