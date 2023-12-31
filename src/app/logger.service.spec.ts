import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
