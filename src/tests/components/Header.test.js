// react test renderer
import React from 'react';
import {shallow} from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// test('should render Header correctly ',()=>{
    
//     const wrapper = shallow(<Header />);
//     expect(wrapper.find('h1').length).toBe(1);
//     // const renderer = new ReactShallowRenderer();
//     // renderer.render(<Header />);
//     // expect(renderer.getRenderOutput()).toMatchSnapshot();
// })



 

const add = (a,b)=> a+b;
const generateGreeting=(name='Annonymous')=>`Hello ${name}!`;
test('should add two numbers',()=>{
const result =add(3,4);

expect(result).toBe(7);
});