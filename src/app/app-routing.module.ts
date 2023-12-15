import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsearchingComponent } from './carsearching/carsearching.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { BookformComponent } from './bookform/bookform.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { CarDetailsAdminComponent } from './car-details-admin/car-details-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { GuardGuard } from './guard.guard';
import { AdminUserdetailsComponent } from './admin-userdetails/admin-userdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminOrdersPageComponent } from './admin-orders-page/admin-orders-page.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AdminConfirmPageComponent } from './admin-confirm-page/admin-confirm-page.component';
import { OrderViewPageComponent } from './order-view-page/order-view-page.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminConfirmbookingComponent } from './admin-confirmbooking/admin-confirmbooking.component';
import { AdminExpirybookingsComponent } from './admin-expirybookings/admin-expirybookings.component';
import { AdminBookinghistoryComponent } from './admin-bookinghistory/admin-bookinghistory.component';
// import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'updatepassword',
    component:UpdatePasswordComponent
  },
  {
    path:'contactus',
    component:ContactPageComponent
  },
  {
    path:'carsearch',
    component:CarsearchingComponent
  },
  {
    path:'cardetails/:check',
    component:ViewdetailsComponent
  },
  {
    path:'cardetails1/:check',
    component:BookformComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'Admin',
    component:AdminNavbarComponent
  },
  {
    path:'update/:id',
    component:AdminUpdateComponent
  },
  {
    path:'view',
    component:CarDetailsAdminComponent
  },
  {
    path:'addcars',
    component:AddcarsComponent
  },
  {
    path:'adminhome',
    component:AdminHomeComponent
  },
  {
    path:'adminuserdeatils',
    component:AdminUserdetailsComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'adminorder',
    component:AdminOrdersPageComponent
  },
  {
    path:'admin-bookings',
    component:AdminBookingsComponent
  },
  {
    path:'admin-confirm',
    component:AdminConfirmbookingComponent
  },
  {
    path:'admin-expiry',
    component:AdminExpirybookingsComponent
  },
  {
    path:'admin-history',
    component:AdminBookinghistoryComponent
  },
  {
    path:'userorder',
    component:UserOrderComponent
  },
   {
    path:'confirmpage/:check',
    component:AdminConfirmPageComponent
  } , {
    path:'viewpage/:check',
    component:OrderViewPageComponent
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
