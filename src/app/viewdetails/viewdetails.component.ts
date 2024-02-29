import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent {
  cardetails: any = '';
  searchFor: any = '';
  finalcardetails: any = '';

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.cardetails().subscribe((data) => {
      this.cardetails = data;
      this.route.params.subscribe((paramdata) => {
        this.searchFor = paramdata['check'];

        for (let cardetail of this.cardetails) {
          if (cardetail.id == this.searchFor) {
            this.finalcardetails = cardetail;
            break;
          }
        }
      });
    });
  }
}
