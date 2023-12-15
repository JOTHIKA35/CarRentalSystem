import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserdetailsComponent } from './admin-userdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

describe('AdminUserdetailsComponent', () => {
  let component: AdminUserdetailsComponent;
  let fixture: ComponentFixture<AdminUserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserdetailsComponent , AdminNavbarComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
