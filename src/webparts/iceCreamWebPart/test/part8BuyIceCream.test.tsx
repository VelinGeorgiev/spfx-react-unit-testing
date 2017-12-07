/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from "enzyme";
import IceCreamMultiplier from '../IceCreamMultiplier';

declare const sinon;

mocha.timeout(0);

describe('Buy ice cream', () => {

  let multiplier: IceCreamMultiplier = new IceCreamMultiplier();

  it('Buy ice cream', () => {

    
    assert(true);
  });
});
