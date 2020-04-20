 import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';
 test('Using set Start Date Filter Object',()=>{
     const action = setStartDate(moment(0));
        expect(action).toEqual({
           type:'SET_START_DATE',
           startDate:moment(0)
        });
 });

 test('Using set End Date Filter Object',()=>{
   const action = setEndDate(moment(0));
      expect(action).toEqual({
         type:'SET_END_DATE',
         endDate:moment(0)
      });
});

test('testing sortByDate',()=>{
   const action = sortByDate();
   expect(action).toEqual({
      type:'SORT_BY_DATE'
   });
});

test('testing sortByAmount',()=>{
   const action = sortByAmount();
   expect(action).toEqual({
      type:'SORT_BY_AMOUNT'
   });
});

test('testing set Text Filter',()=>{
   const action = setTextFilter('abc');
   expect(action).toEqual({
      type:'SET_TEXT_FILTER',
      text:'abc'
   })
})

test('testing set Text Filter',()=>{
   const action = setTextFilter();
   expect(action).toEqual({
      type:'SET_TEXT_FILTER',
      text:''
   })
})
