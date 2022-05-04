import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockapiService } from './mockapi.service';
import { User } from 'src/app/models/user';

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

  it('login success work', () => {
    inject(
      [HttpTestingController, MockapiService],
      (mockApi: HttpTestingController, loginService: MockapiService) => {
        const mockUsuario: User = {
          name: "George Larson",
          surname: "Pollich",
          email: "Isabella70@yahoo.com",
          password: "mC)ZHx]B^;",
          username: "Lelia_Heller20",
          id: "1"
        };

        loginService.login("Lelia_Heller20", "mC)ZHx]B^;").subscribe((res) => {
          expect(res[0].id).toEqual(mockUsuario.id)
        })

        const request = mockApi.expectOne({
          method: "GET",
          url: "https://626de142e58c6fabe2d9655b.mockapi.io/api/users"
        })

        request.flush(mockUsuario)
      }
    );
  });
});
