/// <reference types="mocha" />
/// <reference types="enzyme" />

import * as React from 'react';
import { expect } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ReactTestingPart1 from '../components/ReactTestingPart1';

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
    // let reactComponent = mount(<ReactTestingPart1 description="test" />);
  });


  it('should welcome element exist', () => {

    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';

    // Find the elemet using css selector.
    let element: ReactWrapper<React.AllHTMLAttributes<{}>> = reactComponent.find(cssSelector);
    
    expect(element).to.exist;
  });
});
