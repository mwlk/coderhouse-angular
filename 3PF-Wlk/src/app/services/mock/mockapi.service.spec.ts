import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockapiService } from './mockapi.service';

describe('MockapiService', () => {
  let service: MockapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockapiService],
    });
    service = TestBed.inject(MockapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
