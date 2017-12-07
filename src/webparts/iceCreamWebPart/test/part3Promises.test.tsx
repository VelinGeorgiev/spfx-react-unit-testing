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

describe('Promises basics', () => {

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

  it('should show a list of ice cream flavours', (done) => {

    setTimeout(_ => {

      const componentAsDOM = reactComponent.getDOMNode();
      const flavours = componentAsDOM.querySelectorAll("[class*='flavourLabel']");

      assert(flavours[0].textContent === " Cherry");
      assert(flavours[1].textContent === " Chocolate");
      assert(flavours[2].textContent === " Coffee and Cookie");
      assert(flavours[3].textContent === " Vanilla");

      done();

    }, 10);
  });

  it('should state of iceCreamFlavoursList changed', (done) => {
    
      setTimeout(_ => {
  
        const flavoursState = reactComponent.state().iceCreamFlavoursList;
  
        assert(flavoursState.length === 4);
  
        done();
  
      }, 10);
    });
});
