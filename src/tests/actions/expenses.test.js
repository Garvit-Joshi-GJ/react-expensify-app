import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('using Remove expense action Object',()=>{
const action = removeExpense({id:'123abc'});
expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'                            // toBe => ===
                                            // toEqual => not compares the type, just compares normally        
});
});


test('using edit expense Object',()=>{
const action= editExpense('123abc',{note:'Hello Garvit'});
expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
   note:'Hello Garvit'
    }
})
})

test('Using Add Expense with provided expense ',()=>{
const expenseData={
    description:'Rent',
    amount:109500,
    createdAt:1000,
    note:'this was the last month rent'
};
const action = addExpense(expenseData);
expect(action).toEqual({
    type:'ADD_EXPENSE',
expense:{
    ...expenseData,
    id:expect.any(String)      // expects any string value
}
});
});

test('setup Add expense with default value',()=>{
const action = addExpense();
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
       id:expect.any(String),
       description:'',
       note:'',
       amount:0,
       createdAt:0
    }
})
})
