import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-carsearching',
  templateUrl: './carsearching.component.html',
  styleUrls: ['./carsearching.component.css'],
})
export class CarsearchingComponent {
  cardetails: any = '';
  filteredCarDetails: any = '';
  brands: any = '';
  searchPerformed: boolean = false;
  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.cardetails().subscribe((data: any) => {
      this.cardetails = data.filter((carDetail: any) => !carDetail.disable);
    });
    this.service.brands().subscribe((data: any) => {
      this.brands = data;
    });
  }

  carscountRadioButton: string = 'All';

  onRadioButton(data: string) {
    this.carscountRadioButton = data;
    this.filterCars();
  }
  searchText: string = '';

  onsearchtextEntered(searchValue: string) {
    this.searchText = searchValue;
    this.searchPerformed = true;
    this.filterCars();
  }
  filterCars() {
    if (this.carscountRadioButton === 'All') {
      this.filteredCarDetails = this.cardetails.filter(
        (carDetail: { carname: string }) =>
          carDetail.carname
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredCarDetails = this.cardetails.filter(
        (carDetail: { carname: string; location: string }) =>
          carDetail.carname
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) &&
          carDetail.location === this.carscountRadioButton
      );
    }
  }
}
