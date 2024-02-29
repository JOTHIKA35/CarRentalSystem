import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderViewPageComponent } from './order-view-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterpartComponent } from '../footerpart/footerpart.component';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { CopyrightsComponent } from '../copyrights/copyrights.component';

describe('OrderViewPageComponent', () => {
  let component: OrderViewPageComponent;
  let fixture: ComponentFixture<OrderViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OrderViewPageComponent,
        NavbarComponent,
        FooterpartComponent,
        CopyrightsComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [
        // Provide a mock ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: any) => void) =>
                fn({ check: 'your-check-value' }), // Provide your parameter value
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
