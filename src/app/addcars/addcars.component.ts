import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css'],
})
export class AddcarsComponent {
  public cardetails!: FormGroup;

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.cardetails = this.FormBuilder.group({
      carname: ['', Validators.required],
      color: ['', Validators.required],
      images: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      Fuel: ['', Validators.required],
      seats: ['', Validators.required],
      Mileage: ['', Validators.required],
      id: ['', Validators.required],
      mainImage: ['', Validators.required],
      slideImage1: ['', Validators.required],
      slideImage2: ['', Validators.required],
      slideImage3: ['', Validators.required],
      slideImage4: ['', Validators.required],
      slideImage5: ['', Validators.required],
      slideImage6: ['', Validators.required],
      slideImage7: ['', Validators.required],
      slideImage8: ['', Validators.required],
      tankcapacity: ['', Validators.required],
      feature1: ['', Validators.required],
      feature2: ['', Validators.required],
      feature3: ['', Validators.required],
      feature4: ['', Validators.required],
      feature5: ['', Validators.required],
      location: ['', Validators.required],
      disable: [false, Validators.required],
    });
  }

  addcardetails() {
    return this.http
      .post<any>(`${environment.apiUrl}/cardetails`, this.cardetails.value)
      .subscribe({
        next: (res) => {
          this.logger.log('Car Details added successfully!');
          alert('Car Details added successfully!');
          this.cardetails.reset();
          this.router.navigate(['/view']);
        },
        error: (err) => {
          this.logger.error('Details not added. Please try again');
          alert('Details not added. Please try again');
        },
      });
  }
}
