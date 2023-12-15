import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-confirmbooking',
  templateUrl: './admin-confirmbooking.component.html',
  styleUrls: ['./admin-confirmbooking.component.css']
})
export class AdminConfirmbookingComponent {

  bookings: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.adminService.getBookings().subscribe(bookings => {
        if (bookings) {
          this.bookings = bookings.filter(booking =>
            booking.userStatus === 'Confirmed' || booking.status === 'Confirmed'
          );
        }
      });
  }
}

