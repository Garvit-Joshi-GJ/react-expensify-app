import React from 'react';
import{ connect } from 'react-redux';
import getExpensesTotal from '../selecters/expenses-total';
import numeral from 'numeral'
import selectExpenses from'../selecters/expenses';



const ExpenseSummary = ({expensesCount,expensesTotal})=>{
   const expenseWord = expensesCount ===1 ?'expense' : 'expenses';
 //   const noOfExp = props.expenses.length;
//    const total = getExpensesTotal(props.expenses)
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00') 
    return(
    <div>
   <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
   
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