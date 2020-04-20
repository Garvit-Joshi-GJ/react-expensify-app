import {createStore, combinedReducers, combineReducers} from 'redux';
import uuid from 'uuid';   // to set a universally unique ID


//ADD_EXPENSE
const addExpense=({
    description='',
    note='',
    amount='',
    createdAt=0 
}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({
    id
}={})=>({
    type:'REMOVE_EXPENSE',
    id
    
})

//EDIT_EXPENSE
const editExpense =(
    id,
    updates
={})=>{
  
return {
    type:'EDIT_EXPENSE',
        id,
        updates
}
}
//SET_TEXT_FILTER

const setTextFilter=(text)=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    }
}

//SORT_BY_DATE

const sortByDate= ()=>{
    return {
        type:'SORT_BY_DATE'
    }
}
//SORT_By_AMOUNT
const sortByAmount= ()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
//SET_START_DATE
const setStartDate=(date)=>{
return{
    type:'SET_START_DATE',
    date
}
}
//SET_END_DATE


const setEndDate=(date)=>{
    return{
        type:'SET_END_DATE',
        date
    }
    }




// Expenses Reducer
const expensesReducerDefaultState=[];

const expensesReducer=(state=expensesReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,     // Array spread operator
                action.expense
            ];
            case 'REMOVE_EXPENSE':
                return state.filter(({id})=>{
              return id!== action.id;      
                })
            case 'EDIT_EXPENSE':
                return state.map((expense)=>{
                    if(expense.id===action.id){
                        return{
                            ...expense,
                            ...action.updates
                        }
                    }else{
                        return expense;
                    }
                });

        default:
            return state;
    }
};

//Filters Reducer

const filterReducerDefaultState={
 text:'',
 sortBy:'date',
 startDate:undefined,
 endDate:undefined
}

const filterReducer= (state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return{
            ...state,
          text:action.text
        }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }
            case 'SET_END_DATE':
                return{
                    ...state,
                    endDate:action.date
                }
        default:
            return state;
    }
}
//Get Visible Expenses
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch =typeof startDate !=='number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch= typeof text !=='string' || expense.description.toUpperCase().indexOf(text.toUpperCase())!=-1;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
        return a.createdAt<b.createdAt? 1:-1;
        } else if(sortBy==='amount'){
        return a.amount<b.amount?1:-1;
        }
    }
    )
}

// store creation

const store= createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(VisibleExpenses);
});
const expenseOne=store.dispatch(addExpense({description:'RENT',amount:100, createdAt:1000}));
const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:1000,createdAt:11000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// //console.log(expenseOne);
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter('Cofee'));
// store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//  store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());
const demoState={
    expenses:[{
        id:'sadsfdgf',
        description: 'January Rent',
        note:'This was the final paymrnt for the address',
        amount :56782,
        createdAt:0
    }],

    filters:{
        text:'rent',
        sortBy:'amount',// date or amount
        startDate:undefined,
        endDate:undefined
    }

};

//console.log(store.getState());


//OBJECT SPREAD Operator : it is a functionality of Babel
// const user={
//     name:'Joe',
//     age:10
// };

// console.log({
// ...user, lo cation :'Philly',
// age:102 
// });