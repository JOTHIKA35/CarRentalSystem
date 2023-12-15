import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmbookingComponent } from './admin-confirmbooking.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

describe('AdminConfirmbookingComponent', () => {
  let component: AdminConfirmbookingComponent;
  let fixture: ComponentFixture<AdminConfirmbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfirmbookingComponent , AdminNavbarComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfirmbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
