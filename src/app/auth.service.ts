import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, interval, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private loggedIn = false;
  private storageKey = 'isLoggedIn';
  private loggedInUser: any;

  constructor(private router: Router, private http: HttpClient) {
    var isLoggedIn = sessionStorage.getItem(this.storageKey);
    this.loggedIn = isLoggedIn === 'true';
    var loggedInUserString = sessionStorage.getItem('loggedInUser');
    this.loggedInUser = loggedInUserString
      ? JSON.parse(loggedInUserString)
      : null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(): void {
    this.loggedIn = true;
    sessionStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    alert('Are you sure you want to log out?');
    this.loggedIn = false;
    sessionStorage.removeItem(this.storageKey);
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/home']);
  }

  setUser(user: any): void {
    this.loggedInUser = user;
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  storeFormDetails(formDetails: any, carinfo: any): Observable<any> {
    var loggedInUser = this.getLoggedInUser();
    if (loggedInUser) {
      var bookingDetails = {
        id: this.generateBookingId(),
        formDetails,
        carinfo,
        date: new Date().toISOString(),
        status: 'Yet to Confirm',
        userStatus: 'Yet to Confirm',
        user: loggedInUser,
      };
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      return this.http.post<any>(`${this.apiUrl}/bookings`, bookingDetails);
    }
    return of(null);
  }
  public generateBookingId(): string {
    var randomId = Math.floor(Math.random() * 1000000);
    var timestamp = new Date().getTime();
    return `${randomId}-${timestamp}`;
  }

  getBookingsForUser(): Observable<any[]> {
    var loggedInUser = this.getLoggedInUser();
    if (loggedInUser) {
      return interval(1000).pipe(
        startWith(0),
        switchMap(() =>
          this.http
            .get<any[]>(`${this.apiUrl}/bookings`)
            .pipe(
              map((bookings) =>
                bookings.filter(
                  (booking) => booking.user.id === loggedInUser.id
                )
              )
            )
        )
      );
    }
    return of([]);
  }
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

  updateCarDetailsEnableStatus(carId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/cardetails/${carId}`, {
      disable: false,
    });
  }
}
