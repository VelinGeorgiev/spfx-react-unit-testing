/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ColorWebPart from '../components/ColorWebPart';
import { IColorWebPartProps } from '../components/IColorWebPartProps';
import { IColorWebPartState } from '../components/IColorWebPartState';
import { IColorProvider } from '../providers/IColorProvider';

import { RedColorFakeProvider } from './RedColorFakeProvider';
import { BlueColorFakeProvider } from './BlueColorFakeProvider';

mocha.timeout(0);

describe('Test color logic with classes as mocks', () => {
  let reactComponent: ReactWrapper<IColorWebPartProps, IColorWebPartState>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      ColorWebPart,
      {
        colorProvider: new RedColorFakeProvider()
      }
    ));
  });

  it('should be red colored after click', (done) => {
    const colorButton = reactComponent.find("#changeColorButton").first();

    colorButton.simulate('click');
    setTimeout(_ => {

      const state = reactComponent.state();
      assert(state.color === 'red');
      done();
  
      }, 200);
  });
});

describe('Test color logic with classes as mocks 2', () => {
  let reactComponent: ReactWrapper<IColorWebPartProps, IColorWebPartState>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      ColorWebPart,
      {
        colorProvider: new BlueColorFakeProvider()
      }
    ));
  });

  it('should be blue colored after click', (done) => {
    const colorButton = reactComponent.find("#changeColorButton").first();

    colorButton.simulate('click');
    setTimeout(_ => {

      const state = reactComponent.state();
      assert(state.color === 'blue');
      done();
  
      }, 200);
  });
});