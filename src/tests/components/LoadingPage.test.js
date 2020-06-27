 import React from 'react';
 import {shallow} from 'enzyme';
 import LoadingPage from '../../components/LoadingPage';

//  test('should render Loading ',()=>{
//      const wrapper = shallow(<LoadingPage />);
//      expect(wrapper).toMatchSnapshot();
//  })

const add = (a,b)=> a+b;
const generateGreeting=(name='Annonymous')=>`Hello ${name}!`;
test('should add two numbers',()=>{
const result =add(3,4);

expect(result).toBe(7);
});