import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  cardetailsCount: number = 0;
  bookingsCount: number = 0;
  registeredUserCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCounts();
  }

  fetchCounts() {
    this.http.get<any>(`${environment.apiUrl}/cardetails`).subscribe(cardetails => {
      this.cardetailsCount = cardetails.length;
    });

    this.http.get<any>(`${environment.apiUrl}/bookings`).subscribe(bookings => {
      this.bookingsCount = bookings.length;
    });

    this.http.get<any>(`${environment.apiUrl}/registeredUser`).subscribe(users => {
      // Filter out users with the "admin" role
      this.registeredUserCount = users.filter((user: { role: string; }) => user.role !== 'admin').length;
    });
  }
}
