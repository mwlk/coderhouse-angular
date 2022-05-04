import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppGuard } from './app.guard';

describe('AppGuard', () => {
  let guard: AppGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AppGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
