import React from 'react';
import{ connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from'../selecters/expenses';

const ExpenseList = (props)=>{
    return(
    <div className='content-container'>
    <div className='list-header'>
    <div className='show-for-mobile'>Expenses</div>
    <div className='show-for-desktop'>Expense</div>
    <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
    {
        props.expenses.length ===0 ? (
            <div>
            <span className ='list-item list-item--message'>No Expenses</span>
            </div>
        ):(
        props.expenses.map((expense)=>{
        return (
            <ExpenseListItem 
            key={expense.id}
            {...expense}/>
        )
    })
        )
}
</div>
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