import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent {

  empname: string="";
  role: string="";

  employess:any=[];

  add(){
    let employee = {
      name: this.empname,
      role:this.role
    }

    this.employess.push(employee);


  }
  

}
