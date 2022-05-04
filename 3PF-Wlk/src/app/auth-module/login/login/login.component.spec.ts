import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('lista usuarios declarada e inicializada', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const controller = fixture.componentInstance;

    fixture.detectChanges();
    expect(controller.userList.length).toEqual(0);
  });

  //! validar list
  it('lista de usuarios cargada exitosamente', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const controller = fixture.componentInstance;

    fixture.detectChanges();

    expect(controller.userList).toBeTruthy();
  });

  it('prepare form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const controller = fixture.componentInstance;

    fixture.detectChanges();

    expect(controller.formLogin.get('username')).toBeTruthy();
    expect(controller.formLogin.get('password')).toBeTruthy();
  });
});
