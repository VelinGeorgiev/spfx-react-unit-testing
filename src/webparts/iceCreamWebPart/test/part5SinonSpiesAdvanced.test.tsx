/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import IceCreamComponent from '../components/IceCreamComponent';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';
import { IIceCreamComponentProps } from '../components/IIceCreamComponentProps';
import { IIceCreamComponentState } from '../components/IIceCreamComponentState';
import IceCreamMultiplier from '../IceCreamMultiplier';

declare const sinon;

mocha.timeout(0);

describe('Sinon spy', () => {

  let reactComponent: ReactWrapper<IIceCreamComponentProps, IIceCreamComponentState>;
  let selectHandlerSpy: sinon.SinonSpy;

  beforeEach((done) => {

    selectHandlerSpy = sinon.spy(IceCreamComponent.prototype, "selectHandler");

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));

    setTimeout(done, 10);
  });

  afterEach(() => {
    selectHandlerSpy.restore();
  });

  it('should selectHandler has the correct input', () => {

    const selectButton = reactComponent.find("#iceCreamFlavoursList button").first();

    selectButton.simulate('click');

    assert(selectHandlerSpy.calledWith(sinon.match({ id: 1, flavour: "Cherry" })));
  });

  it('should selectHandler called once', () => {

    const selectButton = reactComponent.find("#iceCreamFlavoursList button").first();

    selectButton.simulate('click');

    assert(selectHandlerSpy.calledOnce);
  });

  it('should selectHandler called twice', () => {

    const selectButton = reactComponent.find("#iceCreamFlavoursList button").first();

    selectButton.simulate('click');
    selectButton.simulate('click');

    assert(selectHandlerSpy.calledTwice);
  });
});
// http://sinonjs.org/