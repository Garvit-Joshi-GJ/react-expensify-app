import {startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
expensesData[id]={id,description,note,amount,createdAt};
    })
    database.ref('expenses').set(expensesData).then(()=>done());
})

test('using Remove expense action Object',()=>{
const action = removeExpense({id:'123abc'});
expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'                            // toBe => ===
                                            // toEqual => not compares the type, just compares normally        
});

});

test('SHould setUp remove Expense from Fire base ',(done)=>{
const store = createMockStore({});
const id =expenses[2].id;
store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type:'REMOVE_EXPENSE',
        id
    });
    return database.ref(`expense/${id}`).once('value');
}).then((snapshot)=>{
expect(snapshot.val()).toBeFalsy();
done();
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


test('should edit expense from fire Base',()=>{
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = {amount :100001};
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions= store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
           });
           return database.ref(`expense/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    })
})

test('Using Add Expense with provided expense ',()=>{

const action = addExpense(expenses[2]);
expect(action).toEqual({
    type:'ADD_EXPENSE',
expense:{
    ...expenses[2],
    id:expect.any(String)      // expects any string value
}
});
});


test('should add expenses to database and store',(done)=>{
        const store = createMockStore({});

            const expenseData={
                description:'',
                amount:0,
                note:'',
                createdAt:0
            };
        store.dispatch(startAddExpense(expenseData)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'ADD_EXPENSE',
                expense:{
                    id:expect.any(String) ,
                    ...expenseData
                }
            });

            // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            //     expect(snapshot.val()).toEqual(expenseData);                                  
            //     done();
            // })
// wE CAN ALSO WRITE IT USING PROMIS CHANINING
  
              return  database.ref(`expenses/${actions[0].expense.id}`).once('value');


        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);                                  
            done();
          });
});  

test('should add expenses with default values to database and store',(done)=>{
    const store = createMockStore({});

    const expenseData={
        description:'MOuse',
        amount:1220,
        note:'this is best',
        createdAt:1000
    };
store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String) ,
            ...expenseData
        }
    });

    // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
    //     expect(snapshot.val()).toEqual(expenseData);                                  
    //     done();
    // })
// wE CAN ALSO WRITE IT USING PROMIS CHANINING

      return  database.ref(`expenses/${actions[0].expense.id}`).once('value');


}).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);                                  
    done();
  });
});
// test('setup Add expense with default value',()=>{
// const action = addExpense();
// expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//        id:expect.any(String),
//        description:'',
//        note:'',
//        amount:0,
//        createdAt:0
//     }
// })
// })

test('should setup set Expenses action Object with data',()=>{
const action = setExpenses(expenses);
expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
})
})

test('should fetch expenses',()=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
const actions =store.getActions();
expect(actions[0]).toEqual({
    type:'SET_EXPENSES',
    expenses
});
done();
    });
})