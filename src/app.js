import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selecters/expenses';
import {firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
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

    let hasRendered= false;
    const renderApp = ()=>{
        if(!hasRendered){
            ReactDOM.render(jsx,document.getElementById('app'));
            hasRendered=true;
        }
    }

 ReactDOM.render(<LoadingPage/>,document.getElementById('app'));

 firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
                renderApp();
                if(history.location.pathname==='/'){
                    history.push('/dashboard');
                }
        });
            }else{
                store.dispatch(logout());
                renderApp();
        history.push('/')
   
    }
   });









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

