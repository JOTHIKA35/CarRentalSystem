import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddcarsComponent } from './addcars.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddcarsComponent', () => {
  let component: AddcarsComponent;
  let fixture: ComponentFixture<AddcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcarsComponent,   AdminNavbarComponent ],
      imports: [HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
