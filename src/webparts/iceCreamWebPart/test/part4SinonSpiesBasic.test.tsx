/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";
import IceCreamMultiplier from '../IceCreamMultiplier';

declare const sinon;

mocha.timeout(0);

describe('Sinon basic spy', () => {

  let multiplier: IceCreamMultiplier;
  let multiplyByTwoSpy: sinon.SinonSpy;

  beforeEach(() => {

    multiplyByTwoSpy = sinon.spy(IceCreamMultiplier.prototype, "multiplyByTwo");

    multiplier = new IceCreamMultiplier();
    multiplier.multiply(2);
  });

  afterEach(() => {
    multiplyByTwoSpy.restore();
  });

  it('should multiplier input', () => {

    assert(multiplyByTwoSpy.calledWith(2));
  });

  it('should multiplier output', () => {

    assert(multiplyByTwoSpy.returned(4));
  });
});
