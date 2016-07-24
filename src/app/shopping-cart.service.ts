import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise' ;

@Injectable()
export class ShoppingCartService {

  // private shoppingCartsUrl='/api/shoppingCart.json';
  public shoppingCarts: ShoppingCart[] = [
      new ShoppingCart("BMW",2000,4,false)];

  constructor(public http: Http) {}
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
