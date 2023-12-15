import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-expirybookings',
  templateUrl: './admin-expirybookings.component.html',
  styleUrls: ['./admin-expirybookings.component.css']
})
export class AdminExpirybookingsComponent {

  bookings: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.adminService.getBookings().subscribe(bookings => {
        if (bookings) {
          const today = new Date();
          this.bookings = bookings.filter(booking =>
            (booking.userStatus === 'Confirmed' || booking.status === 'Confirmed') &&
            new Date(booking.formDetails.dropoffDate) < today
          );
        }
      });
  }
}

