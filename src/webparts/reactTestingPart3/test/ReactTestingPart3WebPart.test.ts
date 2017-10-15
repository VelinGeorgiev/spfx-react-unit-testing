/// <reference types="mocha" />

import * as React from 'react';
import { expect } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import ReactTestingPart3 from '../components/ReactTestingPart3';

mocha.timeout(0);

// tslint:disable:no-unused-expression
describe('ReactTestingPart3WebPart', () => {

  let reactComponent: ReactWrapper;

  /**
   * Before the tests run. 
   */
  before(() => {

    reactComponent = mount(React.createElement(
      ReactTestingPart3,
      {
        description: "test"
      }
    ));

    // Alternativly rename the current file from .ts to .tsx and mount in an HTML/XML fashion.
    // reactComponent = mount(<ReactTestingPart2 description="test" />);
  });


  it('should has SharePoint Patterns and Practices text after click', () => {
    debugger;
    
    reactComponent.find('a').simulate('click');

    let welcomeText: string = reactComponent.find('.ms-font-xl .ms-fontColor-white').text();

    expect(welcomeText).to.equal("Welcome to SharePoint Patterns and Practices (PnP)!");
  });
});
