/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HandsomeService } from './handsome.service';

describe('Handsome Service', () => {
  beforeEachProviders(() => [HandsomeService]);

  it('should ...',
      inject([HandsomeService], (service: HandsomeService) => {
    expect(service).toBeTruthy();
  }));
});
