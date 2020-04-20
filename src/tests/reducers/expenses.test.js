import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('should set def state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('should remove by ID',()=>{

    const state = expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:expenses[0].id});
    expect(state).toEqual([expenses[1],expenses[2]]);
})


test('should not remove by ID',()=>{

    const state = expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:'-1234'});
    expect(state).toEqual(expenses);
})
test('should add by ID',()=>{

    const state = expensesReducer(expenses,{type:'ADD_EXPENSE',expense:expenses[1]});
    expect(state).toEqual([...expenses,expenses[1]]);
})

test('should EDIT by ID',()=>{
    const amount =1234445;
    // const expense ={
    //     id:'14567',
    //     description:'test',
    //     note:'',
    //     amount:1905,
    //     createdAt:0
    // }
    const state = expensesReducer(expenses,{type:'EDIT_EXPENSE',id:expenses[1].id,updates:{amount}});
    expect(state[1].amount).toBe(amount);
})

test('should EDIT by ID',()=>{
    const amount =1234445;
  
    const state = expensesReducer(expenses,{type:'EDIT_EXPENSE',id:'-12345',updates:{amount}});
    expect(state).toEqual(expenses);
})


