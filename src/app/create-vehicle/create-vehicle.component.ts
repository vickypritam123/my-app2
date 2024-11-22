import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  constructor(private _vechileService:VechileService){}

  public vehicleForm:FormGroup = new FormGroup(
    {
      vehicle: new FormControl(),

      manufacturer: new FormControl(),

      model: new FormControl(),

      type: new FormControl(),

      fuel: new FormControl(),

      color: new FormControl(),

      image: new FormControl(),

      cost: new FormControl(),
    },
  );

  submit(){
    console.log(this.vehicleForm);
    this._vechileService.createvehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created sucesfully");
      },
      (err:any)=>{
        alert("creation Failed");
      }
    
    )
    
    
  }

}
