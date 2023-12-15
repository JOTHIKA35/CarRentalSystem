import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(public slogin: AuthService, public router: Router,private renderer: Renderer2, private elementRef: ElementRef){}
  logout(): void {
    this.slogin.logout();
  }
}
