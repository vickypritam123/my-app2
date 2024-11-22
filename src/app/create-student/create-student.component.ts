import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  constructor(private _createstudent:StudentService){}
  public studentForm:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl(),

    },
  );

  submit(){
    console.log(this.studentForm);
    this._createstudent.createstudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Created sucessfully");
      },

      (err:any)=>{
        alert("Creation Failed");
      }
    )
    
  }

}
