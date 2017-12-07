/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";
import IceCreamMultiplier from '../IceCreamMultiplier';

declare const sinon;

mocha.timeout(0);

describe('Private methods basic', () => {

  let multiplier: IceCreamMultiplier = new IceCreamMultiplier();

  it('should multiplier multiplyByTwo result', () => {

    const result = multiplier['multiplyByTwo'](2);
    assert(result === 4);
  });

  it('should multiplier multiplyByTwo result with cast', () => {
    
      const result = (multiplier as any)['multiplyByTwo'](2);
      assert(result === 4);
    });
});
