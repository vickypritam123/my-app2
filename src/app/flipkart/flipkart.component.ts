import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products: any=[
    {name:'pen',price: 50, rating:4, freedelivery:'false'},
    {name:'phone',price: 100000, rating:3, freedelivery:'true'},
    {name:'shirt',price: 4000, rating:2, freedelivery:'true'},
    {name:'cap',price: 6000, rating:5, freedelivery:'true'},
    {name:'mobilecase',price: 200, rating:3.5, freedelivery:'false'},
    {name:'remote',price: 800, rating:3, freedelivery:'false'},
    {name:'watch',price: 8000, rating:4.5, freedelivery:'true'},

  ];

  delete(i:number){
    this.products.splice(i,1);
  }

  priceh1(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }

  priceh2(){
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  rating1(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }

  rating2(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }

  name:any="";

  namefilter(){

    this.products=this.products.filter((product:any)=>product.name==this.name);


  }

  term: string="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }

  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price *0.5;
      return product;
    })
  }

  charges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+100;
      return product;
    })

    
  }

  term1: string="";
  searchname(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term1));
  }



  total(){
    let totalcost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalcost);
  }

  cart(){
    
    alert(this.products.length);

    
  }

}



  




