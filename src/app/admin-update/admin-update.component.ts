import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent {

  dataid:any;
  Details: any = {};
  constructor(private api:AdminService,private activeroute:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']('id'); // Use array index notation here
      console.log("id is ", this.dataid);
    });

    this.api.getproductbyid(this.dataid).subscribe(
      (data: any) => {
        this.Details = data;
        console.log("Details data:", this.Details);
      },
      (error) => {
        console.error("Error fetching product by ID:", error);
      }
    );
  }


  update(){
    this.api.updateproduct(this.Details,this.dataid).subscribe((data:any)=>{
      this.router.navigate(['/view']);
    })
  }

}
