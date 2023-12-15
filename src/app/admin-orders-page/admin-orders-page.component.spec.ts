import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AdminOrdersPageComponent } from './admin-orders-page.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminOrdersPageComponent', () => {
  let component: AdminOrdersPageComponent;
  let fixture: ComponentFixture<AdminOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOrdersPageComponent, AdminNavbarComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AdminOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
