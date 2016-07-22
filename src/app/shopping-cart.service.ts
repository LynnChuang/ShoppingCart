import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';

@Injectable()
export class ShoppingCartService {

  constructor(public shoppingCart: ShoppingCart) {}

}
