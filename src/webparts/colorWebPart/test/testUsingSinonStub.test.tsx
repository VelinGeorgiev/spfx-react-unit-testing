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
    getColorStub.resolves({ color: "red" });
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
    const colorButton = reactComponent.find("#changeColorButton").first();

    colorButton.simulate('click');
    setTimeout(_ => {

      const state = reactComponent.state();
      assert(state.color === 'red');
      done();
  
      }, 200);
  });
});

describe('Test color logic with sinon stubs 2', () => {

  let reactComponent: ReactWrapper<IColorWebPartProps, IColorWebPartState>;
  let getColorStub: sinon.SinonStub;

  before(() => {
    getColorStub = sinon.stub(ColorRestProvider.prototype, "getColor");
    getColorStub.resolves({ color: "blue" });
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