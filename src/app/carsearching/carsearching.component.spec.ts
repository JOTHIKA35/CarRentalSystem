import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarsearchingComponent } from './carsearching.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterpartComponent } from '../footerpart/footerpart.component';
import { CopyrightsComponent } from '../copyrights/copyrights.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('CarsearchingComponent', () => {
  let component: CarsearchingComponent;
  let fixture: ComponentFixture<CarsearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsearchingComponent ,NavbarComponent,FooterpartComponent,CopyrightsComponent,SearchbarComponent,
        FilterComponent],
      imports:[HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
