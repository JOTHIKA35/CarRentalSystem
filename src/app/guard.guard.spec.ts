import { TestBed } from '@angular/core/testing';

import { GuardGuard } from './guard.guard';
import { HttpClientModule } from '@angular/common/http';
describe('GuardGuard', () => {
  let guard: GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    guard = TestBed.inject(GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
