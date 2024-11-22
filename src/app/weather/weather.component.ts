import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weathers: any=[];

  constructor(private _weatherservice:WeatherService){
    _weatherservice.getweathers().subscribe(
      (data:any)=>{
        this.weathers[0]=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  

  }


