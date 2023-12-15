import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookinghistoryComponent } from './admin-bookinghistory.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


describe('AdminBookinghistoryComponent', () => {
  let component: AdminBookinghistoryComponent;
  let fixture: ComponentFixture<AdminBookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookinghistoryComponent , AdminNavbarComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
