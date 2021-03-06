import React from 'react';
import ExpenseForm from './Expenseform';
import{connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage=(props)=>(


    <div>
    <div className='page-header'>
    <div className='content-container'>
    <h1 className ='page-header-title'>
    Add Expense
    </h1>
   
    </div>
    </div>
    
    <div className='content-container'>
    <ExpenseForm 
    onSubmit={(expense)=>{
    props.dispatch(startAddExpense(expense));
    props.history.push('/')
    }
}
    />
    </div>
    </div>
);

// const mapDispatchToProps = (dispatch)=>({
//     startAddExpense: (expense)=>dispatch(startAddExpense(expense))
// });

export default connect()(AddExpensePage);