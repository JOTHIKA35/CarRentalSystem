import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css'],
})
export class AdminBookingsComponent {
  bookings: any[] = [];
  pendingBookingsCount: number = 0;
  confirmedBookingsCount: number = 0;
  expiredBookingsCount: number = 0;
  expiredCancelledBookingsCount: number = 0;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }
  fetchBookings(): void {
    this.adminService.getBookings().subscribe((bookings) => {
      if (bookings) {
        this.bookings = bookings;

        this.pendingBookingsCount = this.bookings.filter(
          (booking) => booking.status === 'Yet to Confirm'
        ).length;
        this.confirmedBookingsCount = this.bookings.filter(
          (booking) =>
            booking.userStatus === 'Confirmed' &&
            new Date(booking.formDetails.dropoffDate) >= new Date()
        ).length;

        const today = new Date();
        this.expiredBookingsCount = bookings.filter(
          (booking) =>
            (booking.userStatus === 'Confirmed' ||
              booking.status === 'Confirmed') &&
            new Date(booking.formDetails.dropoffDate) < today
        ).length;

        this.expiredCancelledBookingsCount = this.bookings.filter(
          (booking) =>
            booking.userStatus === 'Cancelled' ||
            booking.userStatus === 'Expired'
        ).length;
      }
    });
  }
}
