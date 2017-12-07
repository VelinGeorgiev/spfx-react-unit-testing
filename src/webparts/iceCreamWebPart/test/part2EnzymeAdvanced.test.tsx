/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import IceCreamComponent from '../components/IceCreamComponent';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';
import { IIceCreamComponentProps } from '../components/IIceCreamComponentProps';
import { IIceCreamComponentState } from '../components/IIceCreamComponentState';
import IceCreamMultiplier from '../IceCreamMultiplier';

mocha.timeout(0);

describe('Enzyme advanced', () => {

  let reactComponent: ReactWrapper<IIceCreamComponentProps, IIceCreamComponentState>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));
  });

  it('should has test title is the props', () => {

    assert(reactComponent.props().title === "Test title");
  });

  it('should has initial state', () => {

    const state = reactComponent.state();
    
    assert(state.hasBoughtIceCream === false);
    assert(state.iceCreamFlavoursList.length === 0);
    assert(state.quantity === 1);
    assert(state.selectedIceCream === null);
  });

  it('should buy form be hidden', () => {

    const buyForm = reactComponent.find("#buyForm");

    assert(buyForm.length === 0);
  });

  it('should select button unhide the buy form', (done) => {

    setTimeout(_ => {

      const selectButton = reactComponent.find("#iceCreamFlavoursList button").first();
      
      selectButton.simulate('click');

      const buyForm = reactComponent.find("#buyForm");
      
      assert(buyForm.length > 0);

      done();

    }, 10);
  });
});
// https://reactjs.org/docs/test-renderer.html
// https://github.com/airbnb/enzyme
