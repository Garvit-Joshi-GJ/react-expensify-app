import filtersReducers from '../../reducers/filters';
import moment from 'moment';


test('should steup default filter values',()=>{
    const state = filtersReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should steup sortBy amount',()=>{
    const state = filtersReducers(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe(
        'amount'
    );
});

test('should steup sortBy date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action={type:'SORT_BY_DATE'};
    const state = filtersReducers(currentState,action);
    expect(state.sortBy).toBe(
        'date'
    );
});

test('should steup text filter',()=>{
    const text='this is test'
    const state = filtersReducers(undefined,{type:'SET_TEXT_FILTER',text});
    expect(state.text).toBe(
        text
    );
});

test('should steup START date filter',()=>{
    const date=moment();
    const state = filtersReducers(undefined,{type:'SET_START_DATE',date});
    expect(state.startDate).toEqual(
        date
    );
});

test('should steup END date filter',()=>{
    const date=moment().add(4,'day');
    const state = filtersReducers(undefined,{type:'SET_END_DATE',date});
    expect(state.endDate).toEqual(
        date
    );
});


