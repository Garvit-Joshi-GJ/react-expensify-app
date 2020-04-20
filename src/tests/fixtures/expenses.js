import moment from 'moment'

export default [{
    id:'1',
    description:'Gun',
    note:'',
    amount:195,
    createdAt:0
},
{
    id:'2',
    description:'GEM',
    note:'',
    amount:200,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:'Credit Card Expense',
    note:'',
    amount:300,
    createdAt:moment(0).add(4,'days').valueOf()
}]
