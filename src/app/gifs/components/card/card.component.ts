import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gifItem !: Gif;


  ngOnInit(): void {

    if (!this.gifItem) throw new Error('Gif Property is required');

  }





}
