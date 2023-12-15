import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  form!: FormGroup;
  formDetails: any;
  carDetails: any;
  minExpiryMonth: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      this.formDetails = JSON.parse(params['formDetails']);
      this.carDetails = JSON.parse(params['carDetails']);
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      card: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      month: ['', Validators.required],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
    const currentYear = currentDate.getFullYear();
    this.minExpiryMonth = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
  }

  onSubmit() {
    if (this.form.valid) {
      const paymentSuccessful = true;

      if (paymentSuccessful) {
        // this.userService.storeDetails(this.formDetails,this.carDetails).subscribe(
        //   (response) => {
            this.authService
              .storeFormDetails(this.formDetails, this.carDetails)
              .subscribe(
                (response) => {
                  if (response) {
                    Swal.fire({
                      title: 'Payment successful!',
                      text:'Please Wait Our Team will Verify Your Details and confirm Your Booking',
                      icon: 'success',
                      confirmButtonColor: 'rgb(1, 1, 58)'
                    });
                    this.router.navigate(['/userorder']);
                  }
                },
        );
              }
              // )};
      } else {
        Swal.fire({
          title: 'Payment failed',
          text: 'Please try again.',
          icon: 'error',
          confirmButtonColor: 'red'
        });
        this.router.navigate(['/carsearch']);
      }
    }



  onCancel() {
    this.router.navigate(['/carsearch']);
  }
}
