import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import MessageInput from '../MessageInput/MessageInput';

describe('App', () => {
  it('should show the input', () => {
    expect(shallow(<App />).contains(<MessageInput />)).to.be.true;
  });
});
