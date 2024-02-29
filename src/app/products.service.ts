import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, startWith, switchMap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private client: HttpClient) {}

  carlist() {
    return this.client.get(`${this.apiUrl}/carbrands`);
  }

  homeimage() {
    return this.client.get(`${this.apiUrl}/homeimage`);
  }

  cardetails() {
    return interval(1000).pipe(
      startWith(0),
      switchMap(() => this.client.get<any[]>(`${this.apiUrl}/cardetails`))
    );
  }

  brands() {
    return this.client.get(`${this.apiUrl}/brands`);
  }
}
