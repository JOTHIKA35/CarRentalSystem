import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-view-page',
  templateUrl: './order-view-page.component.html',
  styleUrls: ['./order-view-page.component.css']
})
export class OrderViewPageComponent {
  bookings: any[] = [];
  searchFor:any="";
  bookingdetail:any="";

  constructor(private authservice: AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.fetchBookings();
  }
fetchBookings(){
  this.authservice.getBookingsForUser().subscribe(bookings => {
    if (bookings) {
      this.bookings = bookings;
    }
    this.route.params.subscribe(paramdata=>{
      this.searchFor=paramdata['check'];
      for(let bookingdetails of this.bookings){
        if(bookingdetails.id==this.searchFor){
          this.bookingdetail=bookingdetails;
          break;
        }
      }
    })
      })
    }
    cancelBooking(bookingId: string, carId: number): void {
      const pickupDate = new Date(this.bookingdetail.formDetails.pickupDate);
      const currentDate = new Date();
      const timeDiff = pickupDate.getTime() - currentDate.getTime();
      const hoursDiff = Math.ceil(timeDiff / (1000 * 60 * 60));

      let cancellationCharges = 0;
      if (hoursDiff <= 24) {
        // No cancellation charges if cancellation is within 24 hours
        cancellationCharges = 0;
      } else {
        // 15% cancellation charges for canceling after 24 hours
        cancellationCharges = this.bookingdetail.formDetails.rentalRate * 0.15;
      }

      if (cancellationCharges > 0) {
        const refundAmount = this.bookingdetail.formDetails.rentalRate - cancellationCharges;

        const userStatus = `Cancelled`;
        const status = `User cancelled this booking. Refund amount: Rs.${refundAmount.toFixed(2)}, Cancellation charges: Rs.${cancellationCharges.toFixed(2)}`;
        if (confirm(`Cancellation charges of Rs.${cancellationCharges.toFixed(2)} is need to pay for cancellation. Are you sure you want to cancel?`)) {
          this.authservice.updateBookingStatus(bookingId, status, userStatus).subscribe(() => {
            this.authservice.updateCarDetailsEnableStatus(carId).subscribe(() => {
              this.fetchBookings();
              alert('You cancelled this Booking');
              this.router.navigate(['/userorder']);
            });
          });
        }
      } else {
        if (confirm('Are you sure you want to cancel?')) {
          const userStatus = `Cancelled`;
        const status = `User cancelled this booking. No Cancellation charges.`;
          this.authservice.updateBookingStatus(bookingId, status, userStatus).subscribe(() => {
            this.authservice.updateCarDetailsEnableStatus(carId).subscribe(() => {
              this.fetchBookings();
              alert('You cancelled this Booking');
              this.router.navigate(['/userorder']);
            });
          });
        }
      }
    }
}

