/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('Component: ShoppingCart', () => {
  it('should create an instance', () => {
    let component = new ShoppingCartComponent();
    expect(component).toBeTruthy();
  });
});
