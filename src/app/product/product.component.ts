import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  products:any=[];

  constructor(private _productService: ProductService ){
    _productService.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
}
