import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  enteredSearchvalue:string='';


  @Output()
   searchTextchanged:EventEmitter<string>=new EventEmitter<string>();

   onsearchTextchanged(){
      this.searchTextchanged.emit(this.enteredSearchvalue);
   }
}
