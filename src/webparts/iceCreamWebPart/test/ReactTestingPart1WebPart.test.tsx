/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ReactTestingPart1 from '../components/ReactTestingPart1';

// tslint:disable:no-unused-expression
describe('ReactTestingPart1WebPart', () => {

  let reactComponent: ReactWrapper;

  /**
   * Before the tests run. 
   */
  before(() => {

    reactComponent = mount(React.createElement(
      ReactTestingPart1,
      {
        description: "test"
      }
    ));

    // Alternativly rename the current file from .ts to .tsx and mount in an HTML/XML fashion.
    // reactComponent = mount(<ReactTestingPart1 description="test" />);
  });


  it('should welcome element exist', () => {

    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';
    
    // Find the elemet using css selector.
    let text: string;
    text = reactComponent.find(cssSelector).text();

    expect(text.length).greaterThan(0);
  });
});
