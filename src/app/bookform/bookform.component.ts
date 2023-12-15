import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent {
  form!: FormGroup;
  isPickupDateSelected = false;
  pickupDate: string = '';
  dropoffDate: string = '';
  pickupTime: string = '';
  dropoffTime: string = '';
  dailyRate: number = 0;
  cardetails:any="";
  searchFor:any="";
  finalcardetail:any="";
  totalHours: number = 0;
  totalCost: number = 0;
  rentalRate: number = 0;
  location: string = '';
  driverOption: string='';
  finalcardetails:any;
  public discount = environment. discount;
  public driverPay = environment. driverPay;
  initialpayment:number=environment.initialpayment;


  minPickupDateTime(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().substring(0, 16);
  }
  maxPickupDateTime(): string {
    const today = new Date();
    const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return maxDate.toISOString().substring(0, 16);
  }

  minDropoffDateTime(): string {
    const pickupDate = new Date(this.form.get('pickupDate')?.value);
  if (pickupDate) {
    const minDate = new Date(pickupDate.getTime() + 24 * 60 * 60 * 1000);
    return minDate.toISOString().substring(0, 16);
  }
  return this.minPickupDateTime();
  }
  constructor(private service:ProductsService, private authService: AuthService, private formBuilder: FormBuilder,private route:ActivatedRoute,private http:HttpClient,private router:Router){
  }

  ngOnInit():void{

    this.form = this.formBuilder.group({
      pickupDate: ['', Validators.required],
      dropoffDate: [{ value: '', disabled: true }, Validators.required],
      pickupAddress: ['',[Validators.required,Validators.pattern("^.{10,100}$")]],
      dropoffAddress: ['',[Validators.required,Validators.pattern("^.{10,100}$")]],
      rentalRate: new FormControl(this.rentalRate, Validators.required),
      driverOption: ['', Validators.required],
      // identityfile: ['', Validators.required],
      // DrivingLicense: ['', Validators.required],
      paymentOption: ['', Validators.required],
      totalRent: [null]
    });

    this.form.get('pickupDate')?.valueChanges.subscribe((value) => {
      this.isPickupDateSelected = !!value;
      if (this.isPickupDateSelected) {
        this.form.get('dropoffDate')?.enable();
      } else {
        this.form.get('dropoffDate')?.disable();
      }
    });

    this.service.cardetails().subscribe(data =>{
      this.cardetails=data;
      this.route.params.subscribe(paramdata=>{
          this.searchFor=paramdata['check'];

          for(let cardetail of this.cardetails){
            if(cardetail.id==this.searchFor){
              this.finalcardetails = cardetail;
              this.finalcardetail = {
                carName: cardetail.carname,
                brand: cardetail.images,
              };
              this.dailyRate = cardetail.price;
              break;
            }
          }
      })
    })
  }


  proceedToPayment(): void {
    if (this.form.valid) {
      const formDetails = this.form.value;
      const carDetails = this.finalcardetails;

      this.router.navigate(['/payment'], {
        queryParams: { formDetails: JSON.stringify(formDetails), carDetails: JSON.stringify(carDetails) }
      });
    }
    else{
      alert('Please verify that all of the details were entered.');
    }
  }

  isCashOnDeliverySelected(): boolean {
    const paymentOptionControl = this.form.get('paymentOption');
    return paymentOptionControl ? paymentOptionControl.value === 'Cash On Delivery' : false;
  }
  calculateHours() {
    const pickupDate = new Date(this.form.value.pickupDate);
    const dropoffDate = new Date(this.form.value.dropoffDate);

    if (pickupDate && dropoffDate) {
      const timeDiff = dropoffDate.getTime() - pickupDate.getTime();
      const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
      const totalMinutes = Math.floor((timeDiff / (1000 * 60)) % 60);

      const ratePerDay = this.dailyRate;
      const ratePerHour = ratePerDay / 24;
      const ratePerMinute = ratePerHour / 60;

      let rentalAmount = 0;


      if (totalHours <= 24) {
        rentalAmount = (totalHours * ratePerHour) + (totalMinutes * ratePerMinute);
      } else {
        const fullDays = Math.floor(totalHours / 24);
        const remainingHours = totalHours % 24;

        rentalAmount = (fullDays * ratePerDay) + (remainingHours * ratePerHour) + (totalMinutes * ratePerMinute);
      }

      if (totalHours > 48) {
        const discount = this.discount;
        rentalAmount *= (1 - discount);
      }

      if (this.form.value.driverOption === 'yes') {
        const totalDays = Math.ceil(totalHours / 24);
        rentalAmount += totalDays * this.driverPay;
      }
      this.rentalRate = Math.ceil(rentalAmount);

      this.form.patchValue({ rentalRate: this.rentalRate });

      if (this.form.value.paymentOption === 'Cash On Delivery') {
        this.form.patchValue({ totalRent: this.initialpayment });
      } else {
        this.form.patchValue({ totalRent: this.rentalRate });
      }
    }
    }
  }



