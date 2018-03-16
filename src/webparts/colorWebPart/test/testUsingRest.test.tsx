/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ColorWebPart from '../components/ColorWebPart';
import { IColorWebPartProps } from '../components/IColorWebPartProps';
import { IColorWebPartState } from '../components/IColorWebPartState';
import { IColorProvider } from '../providers/IColorProvider';
import { ColorRestProvider } from '../providers/ColorRestProvider';

mocha.timeout(0);

describe('Test color logic', () => {

  let reactComponent: ReactWrapper<IColorWebPartProps, IColorWebPartState>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      ColorWebPart,
      {
        // THAT IS WRONG. Never call rest provider without being stubed, mocked before.
        colorProvider: new ColorRestProvider()
      }
    ));
  });

  // it('should be green colored initially', () => {
    
  //   const colorButton = reactComponent.find("#changeColorButton").first();
  //     const state = reactComponent.state();
  //     assert(state.color === 'green');
  // });

  // it('should be red colored after click', (done) => {
    
  //   const colorButton = reactComponent.find("#changeColorButton").first();

  //   colorButton.simulate('click');
  //   setTimeout(_ => {

  //     const state = reactComponent.state();
  //     assert(state.color === 'red');
  //     done();
  
  //     }, 200);
  // });

  // it('should be blue colored after click', (done) => {
    
  //   const colorButton = reactComponent.find("#changeColorButton").first();

  //   colorButton.simulate('click');
  //   setTimeout(_ => {

  //     const state = reactComponent.state();
  //     assert(state.color === 'blue');
  //     done();
  
  //     }, 200);
  // });
});