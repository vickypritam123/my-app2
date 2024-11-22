import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private _accountsservice:AccountsService){}

  public accountForm: FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),





    },
  );
 submit(){
  console.log(this.accountForm);
  this._accountsservice.createaccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("Created Succesfully");
    },

    (err:any)=>{
      alert("Creation Failed")
    }
  )
 }

}
