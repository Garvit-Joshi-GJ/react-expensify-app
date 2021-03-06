
import {createStore, combinedReducers, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose ;

export default ()=>{




const store= createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer,
        auth:authReducer
    }),
   composeEnhancers(applyMiddleware(thunk))
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

return store;
}



// const store= createStore(
//     combineReducers({
//         expenses:expensesReducer,
//         filters:filterReducer
//     }),

        // applyMiddleware(thunk)  // If we donot had devtools then this would work
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// return store;
// }