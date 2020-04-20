import {createStore} from 'redux';

// Action Generators -- functions that return action objects

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy //incrementBy:incrementBy  we can use this bt if both are same then we can return only one
});

// const incrementCount=(payload={})=>({
//     type:'INCREMENT',
//     incrementBy:typeof payload.incrementBy === 'number' ? payload.incrementBy :1
// });

const decrementCount =({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type:'RESET'
});

const setCount=({count=999}=0)=>({
    type:'SET',
    count
})

//REDUCER
//    1: Reducers are pure functions
//    2: Never change state or actions 
const countReducer=(state={count:0},action)=>{
    switch (action.type){
    case 'INCREMENT':
     //   const incrementBy= typeof action.incrementBy === 'number'? action.incrementBy:1;
        return{
            count:state.count+action.incrementBy
        };
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy:1;
        return{
            count:state.count-decrementBy
        };
    case 'RESET':
        return{
            count:0
        };
    case 'SET':
        return{
            count:action.count
        }
    default:
        return state;
    
    }
    
    };
 
    const store = createStore(countReducer)
    //***** Reducer ALTERNATE */
// const store = createStore((state={count:0},action)=>{
//     switch (action.type){
//     case 'INCREMENT':
//      //   const incrementBy= typeof action.incrementBy === 'number'? action.incrementBy:1;
//         return{
//             count:state.count+action.incrementBy
//         };
//     case 'DECREMENT':
//         const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy:1;
//         return{
//             count:state.count-decrementBy
//         };
//     case 'RESET':
//         return{
//             count:0
//         };
//     case 'SET':
//         return{
//             count:action.count
//         }
//     default:
//         return state;
    
//     }
    
//     });



const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());

});



// Actions  -> action is an object that gets sent to the store
//How to increment the count 
// How to reset the count

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });
store.dispatch(incrementCount({incrementBy:5}));



// store.dispatch({
//     type:'INCREMENT'
// });

store.dispatch(incrementCount());

//unsubscribe(); 
store.dispatch(decrementCount()); 
store.dispatch(decrementCount({decrementBy:10})); 

store.dispatch(resetCount());

store.dispatch(setCount({count:111}));

// store.dispatch({
//     type:'SET',
//     count:101
// })





