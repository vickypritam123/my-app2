import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {

  vechiles: any=[];
  term: string="";

  column: string="";
  order: string="";

  limit: number=0;
  page: number=0;



  constructor(private _vechileservice:VechileService){

    _vechileservice.getvechiles().subscribe(

      (data:any)=>{
        this.vechiles=data;
        
      },

      (err:any)=>{
        alert("internal server error");
      }
      )
    
  }

  filter(){
    this._vechileservice.getFilteredVechiles(this.term).subscribe(
      (data:any)=>{
        this.vechiles=data;
        
      },

      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  sort(){

    this._vechileservice.getsortedVechiles(this.column,this.order).subscribe(
       (data:any)=>{
        this.vechiles=data;
        
      },

      (err:any)=>{
        alert("internal server error");
      })
    
  }

  delete(id:string){
    this._vechileservice.deletevechiles(id).subscribe(

      (data:any)=>{
        alert("delete succesfully");
        location.reload();
        
      },

      (err:any)=>{
        alert("internal server error");
      })

    
  }

  pagination(){
    this._vechileservice.getpagedvechiles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vechiles=data;
      },

      (err:any)=>{
        alert("internal server error");
      })
    
  }

}
