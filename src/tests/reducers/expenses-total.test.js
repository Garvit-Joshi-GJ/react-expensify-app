import getExpensesTotal from '../../selecters/expenses-total';
import expenses from '../fixtures/expenses';



test('should get total',()=>{
    const total = getExpensesTotal(expenses);
    expect(total).toBe(695)
})


test('should get total',()=>{
    const exp=[];
    const total = getExpensesTotal(exp);
    expect(total).toBe(0)
})

test('should get total',()=>{
    const exp=[
        {
            id:'1',
            description:'Gun',
            note:'',
            amount:190,
            createdAt:0
        }
    ];
    const total = getExpensesTotal(exp);
    expect(total).toBe(190)
})
