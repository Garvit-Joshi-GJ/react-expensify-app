import React from 'react';
import{ connect } from 'react-redux';
import getExpensesTotal from '../selecters/expenses-total';
import numeral from 'numeral'
import selectExpenses from'../selecters/expenses';
import {Link} from 'react-router-dom';


const ExpenseSummary = ({expensesCount,expensesTotal})=>{
   const expenseWord = expensesCount ===1 ?'expense' : 'expenses';
 //   const noOfExp = props.expenses.length;
//    const total = getExpensesTotal(props.expenses)
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00') 
    return(
    <div className = 'page-header'>
      <div className='content-container'>
      <h1 className = 'page-header__title'>Viewing <span> {expensesCount} </span> {expenseWord} totalling <span>{formattedExpenseTotal} </span></h1>
      <div className ="page-header__actions">
        <Link className='button' to="/create">Add Expense</Link>
      </div>
      </div>
    </div>
    )
};

const mapStateToProps =(state)=>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return{
        expensesCount : visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)

        
    };
}




export default connect(mapStateToProps)(ExpenseSummary);