import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { UpdatePasswordComponent } from './update-password.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterpartComponent } from '../footerpart/footerpart.component';

describe('UpdatePasswordComponent', () => {
  let component: UpdatePasswordComponent;
  let fixture: ComponentFixture<UpdatePasswordComponent>;

  beforeEach(async () => {
    const mockActivatedRoute = {
      queryParams: of({ id: 'your-param-value' })
    };

    await TestBed.configureTestingModule({
      declarations: [
        UpdatePasswordComponent,
        NavbarComponent,
        FooterpartComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule 
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('', fakeAsync(() => {
  //   const updatedPassword = 'newPassword'; // Set a sample new password

  //   // Initialize the component
  //   fixture.detectChanges();
  //   tick();

  //   // Set form values
  //   component.reset.controls['password'].setValue(updatedPassword);
  //   component.reset.controls['cpassword'].setValue(updatedPassword);
  //   fixture.detectChanges();

  //   // Call the resetpass method
  //   component.resetpass();
  //   tick();
  // }));
});
