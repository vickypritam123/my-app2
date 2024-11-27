import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({

      city: new FormControl('',[Validators.required]),
      pin: new FormControl()


    }),

    type: new FormControl(),
   // busfee: new FormControl(),
   // hostelfee: new FormControl()

   cards: new FormArray([])

  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }


  add(){

    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('',[Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholor'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }

        else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  submit(){
    console.log(this.userForm);
  }

}
