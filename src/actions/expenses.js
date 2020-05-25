import uuid from 'uuid';
import database from '../firebase/firebase'
// Add Expense

export const addExpense=(expense)=>({
    type:'ADD_EXPENSE',
    expense
})

export const startAddExpense=(expensesData={})=>{
    return (dispatch)=>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0 
        }= expensesData
        const expense ={description,note,amount,createdAt};
      return   database.ref('expenses').push(expense).then((ref)=>{
         dispatch(addExpense({
             id:ref.key,
             ...expense
         }))   
        });
    }
}

//REMOVE_EXPENSE
export const removeExpense = ({
    id
}={})=>({
    type:'REMOVE_EXPENSE',
    id
    
})

//EDIT_EXPENSE
export const editExpense =(
    id,
    updates
={})=>{
  
return {
    type:'EDIT_EXPENSE',
        id,
        updates
}
}