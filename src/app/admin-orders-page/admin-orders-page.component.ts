import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrls: ['./admin-orders-page.component.css'],
})
export class AdminOrdersPageComponent {
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
            booking.userStatus === 'Yet to Confirm' ||
            booking.status === 'Yet to Confirm'
        );
      }
    });
  }
}
