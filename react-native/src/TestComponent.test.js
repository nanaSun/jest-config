import 'react-native';
import React from 'react';
import TestComponent from './TestComponent'


import renderer from 'react-test-renderer';


test('renders correctly', () => {
  const tree = renderer.create(<TestComponent />);
  expect(tree.toJSON()).toMatchSnapshot();
});