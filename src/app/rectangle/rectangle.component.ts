import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  

  result: number=0;
breadth: number=0;
length: number=0;

area(){
  this.result=this.length*this.breadth
}

peri(){
  this.result=this.length*this.breadth
}

}
