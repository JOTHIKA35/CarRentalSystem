import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, startWith, switchMap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Adding product
  addcardetails(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addproduct`, data);
  }

  // Display registered user details
  getuserdetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/registeredUser/`);
  }

  // Get product details
  getproduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cardetails/`);
  }

  // Delete product by ID
  deleteproduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cardetails/${id}`);
  }

  // Update product by ID
  updateproduct(product: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/cardetails/${id}`, product);
  }

  // Get product by ID
  getproductbyid(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cardetails/${id}`);
  }

  // Retrieve booking details
  bookdetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings/`);
  }

  // Get bookings with polling
  getBookings(): Observable<any[]> {
    return interval(1000).pipe(
      startWith(0), // Immediately trigger the first request
      switchMap(() => this.http.get<any[]>(`${this.apiUrl}/bookings/`))
    );
  }

  // Update booking status and user status
  updateBookingStatus(
    bookingId: string,
    status: string,
    userStatus: string
  ): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/bookings/${bookingId}`, {
      status,
      userStatus,
    });
  }

  // Update car details disable status
  updateCarDetailsDisableStatus(carId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/cardetails/${carId}`, {
      disable: true,
    });
  }

  // Update car details enable status
  updateCarDetailsEnableStatus(carId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/cardetails/${carId}`, {
      disable: false,
    });
  }
}
