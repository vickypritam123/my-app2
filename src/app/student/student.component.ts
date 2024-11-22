import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students:any=[];

  term:string="";

  column: string="";
  order: string="";

  id:string="";

  constructor(private _studentservice:StudentService){
   _studentservice.getstudents().subscribe(

    (data:any)=>{
      this.students=data;
    },

    (err:any)=>{
      alert("internal server error")
    }
   )
  }

  filter(){
    return this._studentservice.getfiltredstudents(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  sort(){
    return this._studentservice.getsortedstudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  delete(id:string){
    alert(id)
    return this._studentservice.deletestudent(id).subscribe(
      (data:any)=>{
        alert("delete sucessfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }



}
