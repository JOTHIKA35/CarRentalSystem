import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-userdetails',
  templateUrl: './admin-userdetails.component.html',
  styleUrls: ['./admin-userdetails.component.css']
})
export class AdminUserdetailsComponent {
  userdetails:any=[];
  constructor(private api:AdminService){}


   ngOnInit():void{
     this.getuserdetails()
    }

    getuserdetails(){
      this.api.getuserdetails().subscribe((data) => {
        this.userdetails = data.filter((user: { role: string; }) => user.role !== 'admin');
      });
  }

}
