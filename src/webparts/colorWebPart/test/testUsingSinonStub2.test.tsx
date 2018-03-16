/// <reference types="mocha" />
/// <reference types="enzyme" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ColorWebPart from '../components/ColorWebPart';
import { IColorWebPartProps } from '../components/IColorWebPartProps';
import { IColorWebPartState } from '../components/IColorWebPartState';
import { IColorProvider } from '../providers/IColorProvider';
import { ColorRestProvider } from '../providers/ColorRestProvider';

mocha.timeout(0);

declare const sinon: sinon.SinonStatic;

describe('Test color logic with sinon stubs', () => {
  let reactComponent: ReactWrapper<IColorWebPartProps, IColorWebPartState>;
  let getColorStub: sinon.SinonStub;

  before(() => {
    getColorStub = sinon.stub(ColorRestProvider.prototype, "getColor");
  });

  after(() => {
    getColorStub.restore();
  });

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      ColorWebPart,
      {
        colorProvider: new ColorRestProvider()
      }
    ));
  });

  it('should be red colored after click', (done) => {

    getColorStub.resolves({ color: "red" });
    const colorButton = reactComponent.find("#changeColorButton").first();

    colorButton.simulate('click');
    setTimeout(_ => {

      const state = reactComponent.state();
      assert(state.color === 'red');
      done();
  
      }, 200);
  });

  it('should be blue colored after click', (done) => {

    getColorStub.resolves({ color: "blue" });
    const colorButton = reactComponent.find("#changeColorButton").first();

    colorButton.simulate('click');
    setTimeout(_ => {

      const state = reactComponent.state();
      assert(state.color === 'blue');
      done();
  
      }, 200);
  });
});