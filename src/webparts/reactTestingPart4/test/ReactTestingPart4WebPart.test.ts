/// <reference types="mocha" />

import * as React from 'react';
import { expect } from 'chai';
import { mount, ReactWrapper } from "enzyme";
import ReactTestingPart4 from '../components/ReactTestingPart4';
import { IceCreamFakeProvider } from '../iceCream/IceCreamFakeProvider';
import { IReactTestingPart4Props } from '../components/IReactTestingPart4Props';
import { IReactTestingPart4State } from '../components/IReactTestingPart4State';

mocha.timeout(0);

describe('ReactTestingPart4WebPart', () => {


  let reactComponent: ReactWrapper<IReactTestingPart4Props, IReactTestingPart4State>;
  
    /**
     * Before the tests run. 
     */
    beforeEach(() => {
  
      reactComponent = mount(React.createElement(
        ReactTestingPart4,
        {
          title: "Test title",
          iceCreamProvider: new IceCreamFakeProvider()
        }
      ));
  
      // Alternativly rename the current file from .ts to .tsx and mount in an HTML/XML fashion.
      // reactComponent = mount(<ReactTestingPart2 description="test" />);
    });

  it('should has test title is the props', () => {

    expect(reactComponent.props().title).to.equal("Test title");

  });

  it('should selectedIceCream be null on init', () => {

    expect(reactComponent.state().selectedIceCream).to.equal(null);

  });

  it('should has subtitle', () => {
    
    let cssSelector: string = ".ms-font-l .ms-fontColor-white";

    let subtitle: string = reactComponent.find(cssSelector).text();

    expect(subtitle).to.be.equal("Ice cream flavours list.");
  });

  it('should buy button be hidden', () => {
    
      let buyButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
      buyButton = reactComponent.find("#buyButton");
  
      expect(buyButton.length).to.be.equal(0);
  });

  // SPFx unit tests WORKING WITH PROMISES
  // https://mochajs.org/#working-with-promises
  it('should flavours list promise be resolved with list of items', (done) => {

    setTimeout(() => {

      expect(reactComponent.state().iceCreamFlavoursList.length).greaterThan(0);
      done();

    }, 100);
  });

  it('should selected flavour be Cherry', (done) => {
    
    setTimeout(() => {

        let selectButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
        //button = reactComponent.find("#iceCreamFlavoursList").find("button").first();
        selectButton = reactComponent.find("#iceCreamFlavoursList button").first();
        
        selectButton.simulate("click");
      
        let selectedFlavourText: string = reactComponent.find("#selectedFlavour").text();
        expect(selectedFlavourText).to.be.equal("Cherry");

        expect(reactComponent.state().selectedIceCream.flavour).to.be.equal("Cherry");

        done();
  
    }, 100);
  });

  it('should buy button be visible after selection', (done) => {
    
    setTimeout(() => {
      
        let selectButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
        selectButton = reactComponent.find("#iceCreamFlavoursList button").first();
        
        selectButton.simulate("click");

        let buyButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
        buyButton = reactComponent.find("#buyButton");

        expect(buyButton.length).greaterThan(0);

        done();
  
    }, 100);
  });
});
