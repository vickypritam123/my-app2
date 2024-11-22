import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs:any=[];

  constructor(private _blogsservice:BlogService){
    _blogsservice.getblogs().subscribe(
      (data:any)=>{
        this.blogs=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
