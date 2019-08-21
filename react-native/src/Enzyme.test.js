import 'react-native';
import React from 'react';
import TestComponent from './TestComponent'


import {shallow} from 'enzyme';


test('renders correctly', () => {
  const tree = shallow(<TestComponent />);
  console.log(tree.text())
});