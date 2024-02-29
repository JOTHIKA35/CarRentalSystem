import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-bookinghistory',
  templateUrl: './admin-bookinghistory.component.html',
  styleUrls: ['./admin-bookinghistory.component.css'],
})
export class AdminBookinghistoryComponent {
  bookings: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.adminService.getBookings().subscribe((bookings) => {
      if (bookings) {
        this.bookings = bookings.filter(
          (booking) =>
            booking.userStatus === 'Cancelled' ||
            booking.userStatus === 'Expired'
        );
      }
    });
  }
}
