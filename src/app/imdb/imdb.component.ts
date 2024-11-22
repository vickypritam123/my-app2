import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {

  imdbs:any=[];

  constructor(private _imdbsservice:ImdbService){
    _imdbsservice.getimdbs().subscribe(
      (data:any)=>{
        this.imdbs=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  getRating(rating:any){
    return Math.floor(rating);
  }

}
