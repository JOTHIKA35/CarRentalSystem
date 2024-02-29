import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterpartComponent } from './footerpart/footerpart.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsearchingComponent } from './carsearching/carsearching.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterComponent } from './filter/filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderDirective } from './slider.directive';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { BookformComponent } from './bookform/bookform.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CarDetailsAdminComponent } from './car-details-admin/car-details-admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserdetailsComponent } from './admin-userdetails/admin-userdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminOrdersPageComponent } from './admin-orders-page/admin-orders-page.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AdminConfirmPageComponent } from './admin-confirm-page/admin-confirm-page.component';
import { OrderViewPageComponent } from './order-view-page/order-view-page.component';
import { LoggerService } from './logger.service';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminConfirmbookingComponent } from './admin-confirmbooking/admin-confirmbooking.component';
import { AdminExpirybookingsComponent } from './admin-expirybookings/admin-expirybookings.component';
import { AdminBookinghistoryComponent } from './admin-bookinghistory/admin-bookinghistory.component';
import { CurrentBookingComponent } from './current-booking/current-booking.component';
import { ConfirmReturnComponent } from './confirm-return/confirm-return.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterpartComponent,
    CopyrightsComponent,
    CarsearchingComponent,
    SearchbarComponent,
    FilterComponent,
    SliderDirective,
    ViewdetailsComponent,
    BookformComponent,
    AboutUsComponent,
    ContactPageComponent,
    CarDetailsAdminComponent,
    AdminNavbarComponent,
    AdminUpdateComponent,
    AddcarsComponent,
    AdminHomeComponent,
    AdminUserdetailsComponent,
    PaymentComponent,
    AdminOrdersPageComponent,
    UserOrderComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    AdminConfirmPageComponent,
    OrderViewPageComponent,
    AdminBookingsComponent,
    AdminConfirmbookingComponent,
    AdminExpirybookingsComponent,
    AdminBookinghistoryComponent,
    CurrentBookingComponent,
    ConfirmReturnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
