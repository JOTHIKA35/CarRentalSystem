import { TestBed } from '@angular/core/testing';

import { LoginUrlService } from './login-url.service';
import { HttpClientModule } from '@angular/common/http';
describe('LoginUrlService', () => {
  let service: LoginUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LoginUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
