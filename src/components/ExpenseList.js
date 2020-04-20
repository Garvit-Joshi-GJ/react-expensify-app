import React from 'react';
import{ connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from'../selecters/expenses';

const ExpenseList = (props)=>{
    return(
    <div>
    <h1>Expense List</h1>
    
    {props.expenses.map((expense)=>{
        return (
            <ExpenseListItem 
            key={expense.id}
            {...expense}/>
        )
    })}
    </div>
    )
};

// OR!!
// const ExpenseList = (props)=>(
//     <div>
//     <h1>Expense List</h1>
//     {props.expenses.length}
//     </div>
//     );

const mapStateToProps =(state)=>{
    return{
        expenses : selectExpenses(state.expenses,state.filters)
        
    };
}

export default connect(mapStateToProps)(ExpenseList);
   
// OR we can call connect like this

// const ConnectedExpenseList = connect((state)=>{
// return {
//  expenses: state.expenses
// };
// })(ExpenseList);

// export default ConnectedExpenseList;