import uuid from 'uuid';
import database from '../firebase/firebase'
// Add Expense

export const addExpense=(expense)=>({
    type:'ADD_EXPENSE',
    expense
})

export const startAddExpense=(expensesData={})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        const {
            description='',
            note='',
            amount=0,
            createdAt=0 
        }= expensesData
        const expense ={description,note,amount,createdAt};
      return   database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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

export const startRemoveExpense =({id}={})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        return  database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
         dispatch(removeExpense({id}));   
        })
}
   
};


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

export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        return  database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
         dispatch(editExpense(id,updates));   
        })
} 
}

// SET_EXPENSES

export const setExpenses=(expenses)=>({
type: 'SET_EXPENSES',
expenses
});

// export const startSetExpenses;
    // 1. Fetch All expenses data once 
    // 2. Parse that data into an array
    // 3. dispatch SET_EXPENSES
  
export const startSetExpenses=()=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        return  database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
        const expenses =[];
        snapshot.forEach((childSnapshot) => {
       
          expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          });
         
        });

        dispatch(setExpenses(expenses));
    });
}
   
};
