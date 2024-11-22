import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { subscribeOn } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
 

  accounts:any=[];

  term: string="";

  column: string="";
  order: string="";

  id: string="";

  limit: number=0;
  page: number=0;

  constructor(private _accountsService:AccountsService){
    _accountsService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }


    )

    
  }


  filter(){

    return this._accountsService.getfilteredaccounts(this.term).subscribe(
      (data:any)=>{

        this.accounts=data;
      },

      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  sort(){
    return this._accountsService.getsortedaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },

      (err:any)=>{
        alert("internal server error")
      }

    )
  }

  delete(id:string){
    alert(id)
    return this._accountsService.deleteaccount(id).subscribe(
      (data:any)=>{
        alert("delete sucessfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  pagenation(){

    return this._accountsService.getpagedaccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  
}
