/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";

import IceCreamComponent from '../components/IceCreamComponent';
import { IceCreamRealProvider } from '../iceCreamProviders/IceCreamRealProvider';
import { IIceCreamComponentProps } from '../components/IIceCreamComponentProps';
import { IIceCreamComponentState } from '../components/IIceCreamComponentState';
import IceCreamMultiplier from '../IceCreamMultiplier';

declare const sinon;

mocha.timeout(0);

describe('Sinon stubs', () => {

  let reactComponent: ReactWrapper<IIceCreamComponentProps, IIceCreamComponentState>;
  let getAllStub: sinon.SinonStub;
  let buyStub: sinon.SinonStub;

  beforeEach(() => {
    getAllStub = sinon.stub(IceCreamRealProvider.prototype, "getAll");
    buyStub = sinon.stub(IceCreamRealProvider.prototype, "buy");
  });

  afterEach(() => {
    getAllStub.restore();
    buyStub.restore();
  });

  it('should show 4 items', (done) => {

    getAllStub.resolves([
      { id: 1, flavour: "Cherry" },
      { id: 2, flavour: "Chocolate" },
      { id: 3, flavour: "Coffee and Cookie" },
      { id: 10, flavour: "Vanilla" }
    ]);

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamRealProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));

    setTimeout(_ => {

      const flavoursState = reactComponent.state().iceCreamFlavoursList;

      assert(flavoursState.length === 4);

      done();

    }, 10);
  });

  it('should show 2 items', (done) => {

    getAllStub.resolves([
      { id: 1, flavour: "Cherry 123" },
      { id: 2, flavour: "Chocolate 123" }
    ]);

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamRealProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));

    setTimeout(_ => {

      const flavoursState = reactComponent.state().iceCreamFlavoursList;

      assert(flavoursState.length === 2);

      done();

    }, 10);
  });

  it('should show 0 items', (done) => {

    getAllStub.rejects([{ id: 1, flavour: "Cherry 123" },
    { id: 2, flavour: "Chocolate 123" }]);

    reactComponent = mount(React.createElement(
      IceCreamComponent,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamRealProvider(),
        multiplier: new IceCreamMultiplier()
      }
    ));

    setTimeout(_ => {

      const flavoursState = reactComponent.state().iceCreamFlavoursList;

      assert(flavoursState.length === 0);

      done();

    }, 10);
  });
});
