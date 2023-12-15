import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-car-details-admin',
  templateUrl: './car-details-admin.component.html',
  styleUrls: ['./car-details-admin.component.css']
})
export class CarDetailsAdminComponent {

  cardetails:any=[];
  constructor(private api:AdminService){}


   ngOnInit():void{
     this.getproduct()
    }

  getproduct(){
   this.api.getproduct().subscribe((data)=>{
     this.cardetails=data;
   })
  }
  deleteproduct(id:number){
     if(confirm('Are you sure to delete'))
    this.api.deleteproduct(id).subscribe((res)=>{
        alert("Record deleted successfully");
       this.getproduct();
    })

  }
}

