import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { ViewdetailsComponent } from './viewdetails.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterpartComponent } from '../footerpart/footerpart.component';
import { CopyrightsComponent } from '../copyrights/copyrights.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ViewdetailsComponent', () => {
  let component: ViewdetailsComponent;
  let fixture: ComponentFixture<ViewdetailsComponent>;

  beforeEach(async () => {
    const mockActivatedRoute = {
      params: of({ check: 'your-param-value' }) // Update with actual value
    };

    await TestBed.configureTestingModule({
      declarations: [ViewdetailsComponent, NavbarComponent, FooterpartComponent, CopyrightsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], // Add RouterTestingModule
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Provide the mock ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
