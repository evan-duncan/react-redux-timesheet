import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Hello from './hello/Hello';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it('should render a hello component', () => {
    expect(shallow(<App />).contains(<Hello friend="Woooohoooo!!!" />)).toBeTruthy();
  });
});
