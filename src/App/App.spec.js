import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';

describe('App', () => {
  it('Shows the input', () => {
    expect(shallow(<App />).contains(<AutocompleteInput />)).to.equal(true);
  });
});