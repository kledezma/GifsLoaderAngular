import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public _history : string [] = [];
  constructor(
    private gifsService : GifsService
  ){}


 get tags(){
  return this.gifsService.tagsHistory;
 }

 public setOldTag (tag : string): void{

  this.gifsService.searchTag(tag);

 }

}
