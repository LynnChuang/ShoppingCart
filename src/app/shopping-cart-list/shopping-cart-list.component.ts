import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart-list',
  templateUrl: 'shopping-cart-list.component.html',
  styleUrls: ['shopping-cart-list.component.css'],
  directives:[ ShoppingCartService ]
})
export class ShoppingCartListComponent implements OnInit {

  title: string="購物車清單";
  constructor(public shoppingCart:ShoppingCartService) {}

  ngOnInit() {
  }

}
