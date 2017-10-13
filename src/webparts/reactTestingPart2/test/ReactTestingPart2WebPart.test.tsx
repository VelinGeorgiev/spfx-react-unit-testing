/// <reference types="mocha" />

import * as React from 'react';
import { expect } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ReactTestingPart2 from '../components/ReactTestingPart2';

mocha.timeout(0);

// tslint:disable:no-unused-expression
describe('ReactTestingPart2WebPart', () => {

  let reactComponent: ReactWrapper;

  /**
   * Before the tests run. 
   */
  before(() => {
    debugger;

    reactComponent = mount(React.createElement(
      ReactTestingPart2,
      {
        description: "test"
      }
    ));

    // Alternativly rename the current file from .ts to .tsx and mount in an HTML/XML fashion.
    // reactComponent = mount(<ReactTestingPart2 description="test" />);
  });


  it('should welcome element exist', () => {
    debugger;
    
    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';

    // Find the elemet using css selector.
    let element: ReactWrapper<React.AllHTMLAttributes<{}>> = reactComponent.find(cssSelector);

    expect(element).to.exist;
  });
});
