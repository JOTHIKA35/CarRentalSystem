import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-confirm-page',
  templateUrl: './admin-confirm-page.component.html',
  styleUrls: ['./admin-confirm-page.component.css']
})
export class AdminConfirmPageComponent {

  bookings: any[] = [];
  searchFor:any="";
  bookingdetail:any="";

  constructor(private adminService: AdminService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.adminService.getBookings().subscribe(bookings => {
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
  confirmBooking(bookingId: string, carId: number): void {
    this.adminService.updateBookingStatus(bookingId, 'Confirmed', 'Confirmed').subscribe(() => {
      this.adminService.updateCarDetailsDisableStatus(carId).subscribe(() => {
        this.fetchBookings();
        alert('You confirmed this Booking');
        this.router.navigate(['/admin-bookings']);
      });
    });
  }

  cancelBooking(bookingId: string, carId: number): void {
    this.adminService.updateBookingStatus(bookingId, 'Cancelled', 'Cancelled').subscribe(() => {
      this.adminService.updateCarDetailsEnableStatus(carId).subscribe(() => {
        this.fetchBookings();
        alert('You cancelled this Booking');
        this.router.navigate(['/admin-bookings']);
      });
    });
  }
  // returnBooking(bookingId: string, carId: number): void {
  //   this.adminService.updateBookingStatus(bookingId, 'Expired', 'Expired').subscribe(() => {
  //     this.adminService.updateCarDetailsEnableStatus(carId).subscribe(() => {
  //       this.fetchBookings();
  //       this.router.navigate(['/admin-bookings']);
  //     });
  //   });
  // }
}
