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

describe('Enzyme basics', () => {

  let reactComponent: ReactWrapper;

  before(() => {

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));
  });

  it('should root web part element exists', () => {
    
        // Define the css selector.
        let cssSelector: string = '#iceCreamComponent';
        
        // Find the elemet using css selector.
        const element = reactComponent.find(cssSelector);
    
        assert(element.length > 0);
  });


  it('should has the correct title', () => {

    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';
    
    // Find the elemet using css selector.
    const text = reactComponent.find(cssSelector).text();

    assert(text == "Test title");
  });
});

// https://reactjs.org/docs/test-renderer.html
// https://github.com/airbnb/enzyme
