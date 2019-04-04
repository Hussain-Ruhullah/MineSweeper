// src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders 1 <Hello /> component', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />)
  expect(hello).toHaveLength(1);
});

it('updates the couter on button click', () => {
  const hello = enzyme.mount(<Hello name='Daniel'/>);
  const button = hello.find('button');
  button.at(1).simulate('click');
  //expect(hello.state().currentEnthusiasm).toBe(2);
  console.log('hiiiii',hello.state())
});

it('renders props correctly', () => {
  const hello = enzyme.mount(<Hello name='Daniel' />);
  expect(hello.props().name).toBe('Daniel');
});

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});