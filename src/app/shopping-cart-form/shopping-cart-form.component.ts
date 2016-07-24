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

  // name:string="ProductName"
  price:number=0;
  quantity:number=0;
  private shoppingCart:ShoppingCart;
  constructor(private shoppingCartService:ShoppingCartService=null) {}

  ngOnInit() {
    // this.shoppingCart=new ShoppingCart();
  }

  calculate(price,quantity){
    return price*quantity;
  }

  onSubmit(){
    this.shoppingCartService.shoppingCarts.push(this.shoppingCart);
    this.shoppingCart=new ShoppingCart();
  }
}
