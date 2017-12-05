/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import IceCreamComponent from '../components/IceCreamComponent';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';
import { IIceCreamComponentProps } from '../components/IIceCreamComponentProps';
import { IIceCreamComponentState } from '../components/IIceCreamComponentState';

describe('ReactTestingPart1WebPart', () => {

  let reactComponent: ReactWrapper;

  before(() => {

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider()
      }
    ));
  });


  it('should welcome element exist', () => {

    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';
    
    // Find the elemet using css selector.
    let text: string;
    text = reactComponent.find(cssSelector).text();

    assert.isAbove(text.length, 0);
  });


  it('should has SharePoint Patterns and Practices text after click', () => {
    //debugger;
    
    reactComponent.find('a').simulate('click');

    let welcomeText: string = reactComponent.find('.ms-font-xl .ms-fontColor-white').text();

    assert.equal(welcomeText, "Welcome to SharePoint Patterns and Practices (PnP)!");
  });
});
