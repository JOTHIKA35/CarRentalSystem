import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carList: any = '';
  homeimage: any = '';

  constructor(private service: ProductsService) {}
  ngOnInit() {
    this.service.carlist().subscribe((data) => {
      this.carList = data;
    });

    this.service.homeimage().subscribe((data) => {
      this.homeimage = data;
    });
  }
}
