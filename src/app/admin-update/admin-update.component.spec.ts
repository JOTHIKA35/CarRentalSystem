import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { AdminService } from '../admin.service';
import { AdminUpdateComponent } from './admin-update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminUpdateComponent', () => {
  let component: AdminUpdateComponent;
  let fixture: ComponentFixture<AdminUpdateComponent>;
  let mockAdminService: jasmine.SpyObj<AdminService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAdminService = jasmine.createSpyObj('AdminService', ['getproductbyid', 'updateproduct']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [AdminUpdateComponent, AdminNavbarComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: (key: string) => 1 }) } 
        },
        { provide: AdminService, useValue: mockAdminService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(AdminUpdateComponent);
    component = fixture.componentInstance;
  });


  it('should update product details and navigate to view page', () => {
    const mockProduct = { id: 1, carname: 'Maruthi suzuki Dzire', /* other properties */ };
    const updatedProduct = { ...mockProduct, carname: 'Updated Car' };
    mockAdminService.getproductbyid.and.returnValue(of(mockProduct));
    mockAdminService.updateproduct.and.returnValue(of(updatedProduct));

    fixture.detectChanges();

    component.Details.carname = 'Updated Car';
    component.update();
    expect(mockAdminService.updateproduct).toHaveBeenCalledWith(updatedProduct, 1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/view']);
  });
});
