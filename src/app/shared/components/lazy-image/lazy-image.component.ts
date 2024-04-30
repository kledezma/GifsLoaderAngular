import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit{

@Input()
public imgUrl !: string;
@Input()
public alt : string = '';

public hasLoaded :  boolean = false;
ngOnInit(): void {
  if (!this.imgUrl) throw new Error('URL property is required');
}

onLoad(){
  console.log('Loaded');
  this.hasLoaded = true;
}

}
