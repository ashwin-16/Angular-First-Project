import { Component } from '@angular/core';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  name="ashwin";
  addtocart:number=0;

  product={
  name :'iphone 13',
  price :199,
  color :'Red',
  discount:10,
  inStock:5,
  PImage:'assets/images/MPU63.jpg'
  }
 
  // methodil itt vilich
  getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }
  Instock(){
    return this.product.inStock>0? 'Only ' +this.product.inStock+' items left':'Not in stock'
  }
    // condtion operator use chydhu ?:


    onNameChange(event:any){
      this.name=event.target.value;
      // console.log(event.target.value);

    }

    DecrementCartValue(){
      if(this.product.inStock>0){
      this.addtocart--;
      }

    }
    IncrementCartValue(){
      if(this.addtocart<this.product.inStock){
      this.addtocart++;
      }
    }
   

}
