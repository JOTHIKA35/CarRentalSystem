import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarDetailsAdminComponent } from './car-details-admin.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


describe('CarDetailsAdminComponent', () => {
  let component: CarDetailsAdminComponent;
  let fixture: ComponentFixture<CarDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailsAdminComponent , AdminNavbarComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
