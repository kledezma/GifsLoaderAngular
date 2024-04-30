import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" (keyup.enter)="searchTag()" #txtTagInput placeholder="Buscar Gifs :D">
  `,
})
export class SearchBoxComponent {

  constructor(private GifsService : GifsService){}

@ViewChild('txtTagInput')
  tagInput !: ElementRef<HTMLInputElement>;

//  searchTag( newTag : string){
 searchTag( ){
  const  newTag = this.tagInput.nativeElement.value;
  this.GifsService.searchTag(newTag);
  this.tagInput.nativeElement.value = "";
 }

}
