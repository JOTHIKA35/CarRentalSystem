import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpirybookingsComponent } from './admin-expirybookings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

describe('AdminExpirybookingsComponent', () => {
  let component: AdminExpirybookingsComponent;
  let fixture: ComponentFixture<AdminExpirybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExpirybookingsComponent , AdminNavbarComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExpirybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
