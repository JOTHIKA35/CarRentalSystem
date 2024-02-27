import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginUrlService } from '../login-url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;
  public isMenuOpen: boolean = false;
  public scrollThreshold: number = 0;

  constructor(public authService: AuthService, public router: Router, private renderer: Renderer2, private elementRef: ElementRef, public previousUrlService: LoginUrlService) {
    this.user = this.authService.getLoggedInUser();
  }

  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  capturePreviousUrl(): void {
    const currentUrl = this.router.url;
    this.previousUrlService.setPreviousUrl(currentUrl);
  }

  onClickToggle() {
    var menu = this.elementRef.nativeElement.querySelector('.dropdown');
    var toggleIcon = this.elementRef.nativeElement.querySelector('.toggle_btn i');

    menu.classList.toggle('open');
    var isOpen = menu.classList.contains('open');
    var iconOpenClass = 'fa-solid fa-xmark';
    var iconClosedClass = 'fa-solid fa-bars';
    this.renderer.setAttribute(toggleIcon, 'class', isOpen ? iconOpenClass : iconClosedClass);
  }

  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = (window.scrollY > this.scrollThreshold);
  }
}
