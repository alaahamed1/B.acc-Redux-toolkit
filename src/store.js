
import { configureStore } from '@reduxjs/toolkit'


import accountReducer from './features/accounts/accountSlice'
import customerReducer from './features/customers/customerSlice'
// import {customerReducer} is wrong becouse of export default 


// const rootReducer =combineReducers({
//   account:accountReducer,
//   customer:customerReducer
// })
// const store = createStore(rootReducer,composeWithDevTools (applyMiddleware(thunk)));

const store = configureStore({
  reducer:{
    account : accountReducer,
    customer:customerReducer,
  },
})

export default store;

















// store.dispatch(deposite(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(1000,'By a Car'));
// store.dispatch(payLoan());

// console.log(store.getState());

// you can write action name as variable name once instead of write it in reducer and action func.
// const ACCOUNT_DEPOSITE = "ACCOUNT_DEPOSITE" ; in separate file but that's no longer exist




// store.dispatch(createCustomer('alaa','45685'))
    
// store.dispatch(updateName('alaakk'))
// console.log(store.getState())
