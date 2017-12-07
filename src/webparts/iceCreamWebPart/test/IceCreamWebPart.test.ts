// /// <reference types="mocha" />

// import * as React from 'react';
// import { expect } from 'chai';
// import { mount, ReactWrapper } from "enzyme";
// import IceCreamComponent from '../components/IceCreamComponent';
// import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';
// import { IIceCreamComponentProps } from '../components/IIceCreamComponentProps';
// import { IIceCreamComponentState } from '../components/IIceCreamComponentState';

// // mocha.timeout(0);

// describe('IceCreamComponent', () => {


//   let reactComponent: ReactWrapper<IIceCreamComponentProps, IIceCreamComponentState>;

//   beforeEach(() => {

//     reactComponent = mount(React.createElement(
//       IceCreamComponent,
//       {
//         title: "Test title",
//         iceCreamProvider: new IceCreamFakeProvider()
//       }
//     ));
//   });

//   it('should has test title is the props', () => {

//     expect(reactComponent.props().title).to.equal("Test title");

//   });

//   it('should selectedIceCream be null on init', () => {

//     expect(reactComponent.state() == {
//       iceCreamFlavoursList: [],
//       quantity: 1,
//       selectedIceCream: null,
//       hasBoughtIceCream: false
//     });

//   });

//   it('should has subtitle', () => {

//     let cssSelector: string = ".ms-font-l .ms-fontColor-white";

//     let subtitle: string = reactComponent.find(cssSelector).text();

//     expect(subtitle).to.be.equal("Ice cream flavours list.");
//   });

//   it('should buy button be hidden', () => {

//     let buyButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
//     buyButton = reactComponent.find("#buyButton");

//     expect(buyButton.length).to.be.equal(0);
//   });

//   // SPFx unit tests WORKING WITH PROMISES
//   // https://mochajs.org/#working-with-promises
//   it('should flavours list promise be resolved with list of items', (done) => {

//     setTimeout(() => {

//       expect(reactComponent.state().iceCreamFlavoursList.length).greaterThan(0);
//       done();

//     }, 100);
//   });

//   it('should selected flavour be Cherry', (done) => {

//     setTimeout(() => {

//       let selectButton: ReactWrapper<React.AllHTMLAttributes<{}>>;
//       //button = reactComponent.find("#iceCreamFlavoursList").find("button").first();
//       selectButton = reactComponent.find("#iceCreamFlavoursList button").first();

//       selectButton.simulate("click");

//       let selectedFlavourText: string = reactComponent.find("#selectedFlavour").text();
//       expect(selectedFlavourText).to.be.equal("Cherry");

//       expect(reactComponent.state().selectedIceCream.flavour).to.be.equal("Cherry");

//       done();

//     }, 100);
//   });
// });
