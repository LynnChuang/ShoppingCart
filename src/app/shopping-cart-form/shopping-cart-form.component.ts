import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service/';
import { ShoppingCart } from '../shopping-cart';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart-form',
  templateUrl: 'shopping-cart-form.component.html',
  styleUrls: ['shopping-cart-form.component.css']
})
export class ShoppingCartFormComponent implements OnInit {

  private shoppingCart:ShoppingCart;
  private name: string;
  private price: number;
  private quantity: number;
  private isEdit:boolean;
  constructor(private shoppingCartService:ShoppingCartService=null) {}


  ngOnInit() {
    this.name="BMW";
    this.price=1000;
    this.quantity=1;
    this.isEdit=false;
    //  this.shoppingCart=this.shoppingCartService.shoppingCarts[0];
    //  this.shoppingCart=new ShoppingCart(null,0,0,false);
  }

  calculate(price,quantity){
    return price*quantity;
  }

  onSubmit(){
    this.shoppingCart = new ShoppingCart(this.name, this.price, this.quantity, this.isEdit);
    this.shoppingCartService.shoppingCarts.push(this.shoppingCart);
    // this.shoppingCart=new ShoppingCart(null,0,0,false);
  }
}
