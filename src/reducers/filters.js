import moment from 'moment';
const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
   }
   
export default (state=filterReducerDefaultState,action)=>{
       switch(action.type){
           case 'SET_TEXT_FILTER':
               console.log('value of text in reducer'+action.text)
           return{
               ...state,
             text:action.text
           }
           case 'SORT_BY_DATE':
               return{
                   ...state,
                   sortBy:'date'
               }
           case 'SORT_BY_AMOUNT':
               return{
                   ...state,
                   sortBy:'amount'
               }
           case 'SET_START_DATE':
               console.log('filters reducers..'+action.date);
               return{
                   ...state,
                   startDate:action.startDate
               }
               case 'SET_END_DATE':
                   return{
                       ...state,
                       endDate:action.endDate
                   }
           default:
               return state;
       }
   }