import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise' ;

@Injectable()
export class ShoppingCartService {

  // private shoppingCartsUrl='/api/shoppingCart.json';
  public shoppingCarts;

  constructor(private http: Http) {
    // this.shoppingCarts=ShoppingCart;
    this.shoppingCarts=[
      {name:"BMW", price:2000, quantity:4, isEdit:false},
      {name:"BMW2", price:3000, quantity:3, isEdit:false}
    ]

    // this.getItems().then(shoppingCarts => this.shoppingCarts = shoppingCarts);
  }

//   addItem(){
//     this.shoppingCarts.push();
//   }
// getItems(): Promise<ShoppingCart[]> {
//     return this.http.get(this.shoppingCartsUrl)
//     .toPromise()
//     .then(this.extractData)
//     .catch(this.handleError);
//   }

//   private extractData(res: Response): ShoppingCart[]{
//     let body=res.json();

//     return body.data.map((model) =>{
//       return new ShoppingCart(model.name,
//                         model.price,
//                         model.quantity);
//     });
//   }

//   private handleError(){

//   }
}
