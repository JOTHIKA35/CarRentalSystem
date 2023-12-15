import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminConfirmPageComponent } from './admin-confirm-page.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('AdminConfirmPageComponent', () => {
  let component: AdminConfirmPageComponent;
  let fixture: ComponentFixture<AdminConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminConfirmPageComponent, AdminNavbarComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ check: '1' })), 
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
