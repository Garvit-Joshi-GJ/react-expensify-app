import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selecters/expenses';
const store = configureStore();

//  const expenseOne=store.dispatch(addExpense({description:'Water Bill',amount:1000, createdAt:moment()}));
// const expenseThree=store.dispatch(addExpense({description:'Rent',amount:100, createdAt:3000}));

// const expenseTwo=store.dispatch(addExpense({description:'Gas Bill',amount:1010, createdAt:2000}));


// store.subscribe(()=>{
//     const state = store.getState();
//     const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters)
//     console.log(VisibleExpenses);
// });
// console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters));

 const jsx = (
     <Provider store = {store}>
     <AppRouter />
     </Provider>
  
 );
ReactDOM.render(jsx,document.getElementById('app'));









//---using props----
// const jsx=(
//         <div>
//            <IndecisionApp />
//         </div>
// );
// const User = (props)=>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age:</p>
//         </div>
//     )
// };

