import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginUrlService } from '../login-url.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent {
  bookings: any[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchBookings();
  }
  fetchBookings() {
    this.authService.getBookingsForUser().subscribe((bookings) => {
      if (bookings) {
        this.bookings = bookings;
      }
    });
  }
}
